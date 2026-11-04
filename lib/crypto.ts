export const cryptoAssets = [
  {
    id: "eth",
    symbol: "ETH",
    network: "Ethereum",
    address: "0x5a5c3917ebe91226cf35cd9aa6f5e6d35b477ddd",
    decimals: 18,
    pair: "ETH-USD",
    gecko: "ethereum",
    record: "https://etherscan.io/address/0x5a5c3917ebe91226cf35cd9aa6f5e6d35b477ddd",
  },
  {
    id: "sol",
    symbol: "SOL",
    network: "Solana",
    address: "2MbfRv5Lf3D4zEYMaTo8EntL5QpEGfGAe3oRdvwzTsdh",
    decimals: 9,
    pair: "SOL-USD",
    gecko: "solana",
    record: "https://solscan.io/account/2MbfRv5Lf3D4zEYMaTo8EntL5QpEGfGAe3oRdvwzTsdh",
  },
  {
    id: "btc",
    symbol: "BTC",
    network: "Bitcoin",
    address: "bc1qla5txazs3r00umm5muy35j5hnnts0sszskmwnj",
    decimals: 8,
    pair: "BTC-USD",
    gecko: "bitcoin",
    record: "https://mempool.space/address/bc1qla5txazs3r00umm5muy35j5hnnts0sszskmwnj",
  },
] as const;

export type CryptoAssetId = (typeof cryptoAssets)[number]["id"];

export type RateQuote = {
  asset: CryptoAssetId;
  symbol: string;
  network: string;
  address: string;
  crypto: string;
  price: string;
  baseUnits: string;
  source: string;
};

function pow10(decimals: number) {
  let scale = BigInt(1);
  for (let i = 0; i < decimals; i += 1) scale *= BigInt(10);
  return scale;
}

function formatUnits(units: bigint, decimals: number) {
  const scale = pow10(decimals);
  const whole = units / scale;
  const fraction = (units % scale).toString().padStart(decimals, "0").replace(/0+$/, "");
  return fraction ? `${whole.toString()}.${fraction}` : whole.toString();
}

export function quoteFromPrice(usd: number, price: number, decimals: number) {
  const cents = Math.round(usd * 100);
  const priceE8 = BigInt(Math.round(price * 1e8));
  if (cents <= 0 || priceE8 <= BigInt(0)) return null;
  const numerator = BigInt(cents) * pow10(decimals) * BigInt(100000000);
  const denominator = priceE8 * BigInt(100);
  const exact = (numerator + denominator / BigInt(2)) / denominator;
  const show = Math.min(decimals, 8);
  const drop = pow10(decimals - show);
  const units = ((exact + drop / BigInt(2)) / drop) * drop;
  if (units <= BigInt(0)) return null;
  return { units: units.toString(), crypto: formatUnits(units, decimals) };
}

export function paymentUri(asset: CryptoAssetId, address: string, crypto: string, baseUnits: string) {
  if (asset === "btc") return `bitcoin:${address}?amount=${crypto}`;
  if (asset === "sol") return `solana:${address}?amount=${crypto}`;
  return `ethereum:${address}@1?value=${baseUnits}`;
}

export function trustSendUrl(asset: CryptoAssetId, address: string, crypto: string) {
  const code = asset === "btc" ? "c0" : asset === "sol" ? "c501" : "c60";
  return `https://link.trustwallet.com/send?asset=${code}&address=${encodeURIComponent(address)}&amount=${encodeURIComponent(crypto)}`;
}

export function txUrl(asset: CryptoAssetId, hash: string) {
  if (asset === "eth") return `https://etherscan.io/tx/${hash}`;
  if (asset === "sol") return `https://solscan.io/tx/${hash}`;
  return `https://mempool.space/tx/${hash}`;
}
