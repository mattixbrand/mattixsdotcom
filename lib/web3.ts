import { cryptoAssets, type CryptoAssetId } from "@/lib/crypto";

const storageKey = "mattix-web3-sub";
const ethereumAsset = cryptoAssets[0];

export type WalletKind = "metamask" | "trust";

export type EthereumProvider = {
  request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
  isMetaMask?: boolean;
  isTrust?: boolean;
  isTrustWallet?: boolean;
  providers?: EthereumProvider[];
};

type SolanaKey = { toString: () => string };

type SolanaProvider = {
  connect: () => Promise<{ publicKey: SolanaKey }>;
  signAndSendTransaction: (transaction: unknown) => Promise<{ signature?: string } | string>;
  publicKey?: SolanaKey;
};

export type WalletSubscription = {
  walletId: WalletKind;
  account: string;
  amount: string;
  nextDue: string;
  txHash: string;
};

type Announce = { info: { rdns?: string; name?: string }; provider: EthereumProvider };

function browserWindow() {
  return window as Window & {
    ethereum?: EthereumProvider;
    solana?: SolanaProvider;
    phantom?: { solana?: SolanaProvider };
    trustwallet?: { solana?: SolanaProvider };
  };
}

function matches(kind: WalletKind, rdns: string, name: string) {
  if (kind === "metamask") return rdns === "io.metamask" || name.includes("metamask");
  return rdns === "com.trustwallet.app" || name.includes("trust wallet") || name === "trust";
}

function matchesInjected(kind: WalletKind, provider: EthereumProvider) {
  const trust = Boolean(provider.isTrust || provider.isTrustWallet);
  if (kind === "trust") return trust;
  return Boolean(provider.isMetaMask) && !trust;
}

export function discoverWallet(kind: WalletKind) {
  return new Promise<EthereumProvider | null>((resolve) => {
    const found: Announce[] = [];
    const onAnnounce = (event: Event) => {
      const detail = (event as CustomEvent<Announce>).detail;
      if (detail?.provider) found.push(detail);
    };
    window.addEventListener("eip6963:announceProvider", onAnnounce);
    window.dispatchEvent(new Event("eip6963:requestProvider"));
    window.setTimeout(() => {
      window.removeEventListener("eip6963:announceProvider", onAnnounce);
      const announced = found.find((item) =>
        matches(kind, (item.info.rdns ?? "").toLowerCase(), (item.info.name ?? "").toLowerCase()),
      );
      if (announced) {
        resolve(announced.provider);
        return;
      }
      const injected = browserWindow().ethereum;
      const list = injected?.providers?.length ? injected.providers : injected ? [injected] : [];
      resolve(list.find((provider) => matchesInjected(kind, provider)) ?? null);
    }, 400);
  });
}

export function solanaProvider() {
  const browser = browserWindow();
  return browser.trustwallet?.solana ?? browser.solana ?? browser.phantom?.solana ?? null;
}

async function ensureEthereum(provider: EthereumProvider) {
  try {
    await provider.request({ method: "wallet_switchEthereumChain", params: [{ chainId: "0x1" }] });
  } catch (error) {
    const code = typeof error === "object" && error && "code" in error ? (error as { code?: number }).code : undefined;
    if (code !== 4902) throw error;
    await provider.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: "0x1",
          chainName: "Ethereum",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: ["https://cloudflare-eth.com"],
          blockExplorerUrls: ["https://etherscan.io"],
        },
      ],
    });
  }
}

export async function sendEth(provider: EthereumProvider, baseUnits: string) {
  const accounts = (await provider.request({ method: "eth_requestAccounts" })) as string[];
  const account = accounts[0];
  if (!account) throw Object.assign(new Error("No account"), { code: 4001 });
  await ensureEthereum(provider);
  const balance = await provider.request({ method: "eth_getBalance", params: [account, "latest"] });
  const held = typeof balance === "string" ? BigInt(balance) : BigInt(0);
  const value = BigInt(baseUnits);
  if (held < value) throw Object.assign(new Error("Low balance"), { code: "low" });
  const hash = (await provider.request({
    method: "eth_sendTransaction",
    params: [
      {
        from: account,
        to: ethereumAsset.address,
        value: `0x${value.toString(16)}`,
      },
    ],
  })) as string;
  return { account, hash };
}

export async function sendSol(baseUnits: string) {
  const provider = solanaProvider();
  if (!provider) return null;
  const connected = provider.publicKey ? { publicKey: provider.publicKey } : await provider.connect();
  const from = connected.publicKey.toString();
  const solana = await import("@solana/web3.js");
  const connection = new solana.Connection("https://api.mainnet-beta.solana.com", "confirmed");
  const transaction = new solana.Transaction().add(
    solana.SystemProgram.transfer({
      fromPubkey: new solana.PublicKey(from),
      toPubkey: new solana.PublicKey(cryptoAssets[1].address),
      lamports: Number(baseUnits),
    }),
  );
  transaction.feePayer = new solana.PublicKey(from);
  transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
  const result = await provider.signAndSendTransaction(transaction);
  const hash = typeof result === "string" ? result : result.signature;
  if (!hash) throw new Error("No signature");
  return { account: from, hash };
}

export function errorCode(error: unknown) {
  if (typeof error === "object" && error && "code" in error) return (error as { code?: number | string }).code;
  return undefined;
}

export function walletOpenUrl(kind: WalletKind) {
  const page = window.location.href;
  if (kind === "metamask") {
    const url = new URL(page);
    return `https://metamask.app.link/dapp/${url.host}${url.pathname}${url.search}`;
  }
  return `https://link.trustwallet.com/open_url?coin_id=60&url=${encodeURIComponent(page)}`;
}

export function readSubscription(kind: WalletKind): WalletSubscription | null {
  try {
    const saved = window.localStorage.getItem(storageKey);
    if (!saved) return null;
    const parsed = JSON.parse(saved) as WalletSubscription;
    if (parsed.walletId !== kind || !parsed.account || !parsed.nextDue) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeSubscription(subscription: WalletSubscription) {
  window.localStorage.setItem(storageKey, JSON.stringify(subscription));
}

export function clearSubscription() {
  window.localStorage.removeItem(storageKey);
}

export function shortAddress(account: string) {
  return `${account.slice(0, 6)}…${account.slice(-4)}`;
}

export type { CryptoAssetId };
