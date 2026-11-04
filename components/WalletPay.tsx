"use client";

import { useEffect, useState } from "react";
import { fill, type Dictionary } from "@/lib/i18n";
import { paymentUri, trustSendUrl, txUrl, type CryptoAssetId, type RateQuote } from "@/lib/crypto";
import {
  clearSubscription,
  discoverWallet,
  errorCode,
  readSubscription,
  sendEth,
  sendSol,
  shortAddress,
  solanaProvider,
  walletOpenUrl,
  writeSubscription,
  type WalletKind,
  type WalletSubscription,
} from "@/lib/web3";

const dateLocales: Record<string, string> = {
  en: "en-US",
  fr: "fr-FR",
  it: "it-IT",
  km: "km",
  "zh-Hans": "zh-Hans",
  "zh-Hant": "zh-Hant",
};

const assetIds: CryptoAssetId[] = ["eth", "sol", "btc"];

export async function loadQuotes(usd: number) {
  if (!Number.isFinite(usd) || usd <= 0 || usd > 100000) return null;
  const response = await fetch(`/api/rate?usd=${encodeURIComponent(usd.toFixed(2))}`, { cache: "no-store" });
  if (!response.ok) return null;
  const body = (await response.json()) as { quotes?: RateQuote[] };
  return body.quotes?.length ? body.quotes : null;
}

export function WalletPay({
  walletId,
  label,
  amount,
  amountLabel,
  locale,
  copy,
}: {
  walletId: WalletKind;
  label: string;
  amount: number;
  amountLabel: string;
  locale: string;
  copy: Dictionary["donate"]["web3"];
}) {
  const [asset, setAsset] = useState<CryptoAssetId>("eth");
  const [quotes, setQuotes] = useState<RateQuote[] | null>(null);
  const [account, setAccount] = useState("");
  const [busy, setBusy] = useState<"connect" | "pay" | "rate" | "">("");
  const [notice, setNotice] = useState<"missing" | "rejected" | "chain" | "low" | "failed" | "rate" | "opened" | "">("");
  const [txHash, setTxHash] = useState("");
  const [opened, setOpened] = useState("");
  const [subscription, setSubscription] = useState<WalletSubscription | null>(null);

  useEffect(() => {
    setSubscription(readSubscription(walletId));
  }, [walletId]);

  useEffect(() => {
    let cancel = false;
    setBusy("rate");
    const timer = window.setTimeout(() => {
      void loadQuotes(amount).then((next) => {
        if (cancel) return;
        setQuotes(next);
        setBusy((current) => (current === "rate" ? "" : current));
        if (!next) setNotice("rate");
      });
    }, 250);
    return () => {
      cancel = true;
      window.clearTimeout(timer);
    };
  }, [amount]);

  const quote = quotes?.find((item) => item.asset === asset) ?? null;
  const due = subscription ? new Date(subscription.nextDue).getTime() <= Date.now() : false;
  const dueDate = subscription
    ? new Intl.DateTimeFormat(dateLocales[locale] ?? "en-US", { dateStyle: "long" }).format(new Date(subscription.nextDue))
    : "";

  async function connect() {
    setNotice("");
    setBusy("connect");
    const provider = await discoverWallet(walletId);
    if (!provider) {
      setBusy("");
      setNotice("missing");
      return;
    }
    try {
      const accounts = (await provider.request({ method: "eth_requestAccounts" })) as string[];
      setAccount(accounts[0] ?? "");
    } catch (error) {
      setNotice(errorCode(error) === 4001 ? "rejected" : "failed");
    } finally {
      setBusy("");
    }
  }

  function remember(monthly: boolean, payer: string, hash: string) {
    setAccount(payer);
    setTxHash(hash);
    if (!monthly) return;
    const nextDue = new Date();
    nextDue.setDate(nextDue.getDate() + 30);
    const saved: WalletSubscription = {
      walletId,
      account: payer,
      amount: amountLabel,
      nextDue: nextDue.toISOString(),
      txHash: hash,
    };
    writeSubscription(saved);
    setSubscription(saved);
  }

  async function pay(monthly: boolean) {
    setNotice("");
    setTxHash("");
    setOpened("");
    setBusy("pay");
    const fresh = await loadQuotes(amount);
    const current = fresh?.find((item) => item.asset === asset) ?? null;
    setQuotes(fresh);
    if (!current) {
      setBusy("");
      setNotice("rate");
      return;
    }
    try {
      if (current.asset === "eth") {
        const provider = await discoverWallet(walletId);
        if (!provider) {
          setNotice("missing");
          return;
        }
        const result = await sendEth(provider, current.baseUnits);
        remember(monthly, result.account, result.hash);
        return;
      }
      if (current.asset === "sol" && solanaProvider()) {
        const result = await sendSol(current.baseUnits);
        if (result) {
          remember(monthly, result.account, result.hash);
          return;
        }
      }
      const href = walletId === "trust" ? trustSendUrl(current.asset, current.address, current.crypto) : paymentUri(current.asset, current.address, current.crypto, current.baseUnits);
      setOpened(href);
      setNotice("opened");
    } catch (error) {
      const code = errorCode(error);
      if (code === 4001) setNotice("rejected");
      else if (code === "low") setNotice("low");
      else if (code === 4902) setNotice("chain");
      else setNotice("failed");
    } finally {
      setBusy("");
    }
  }

  const status =
    notice === "missing"
      ? fill(copy.missing, { label })
      : notice === "rejected"
        ? copy.rejected
        : notice === "chain"
          ? fill(copy.chain, { network: quote?.network ?? "Ethereum" })
          : notice === "low"
            ? fill(copy.low, { symbol: quote?.symbol ?? "ETH", network: quote?.network ?? "Ethereum" })
            : notice === "rate"
              ? copy.rateFail
              : notice === "opened"
                ? fill(copy.opened, { symbol: quote?.symbol ?? "" })
                : notice === "failed"
                  ? copy.failed
                  : busy === "connect"
                    ? fill(copy.connecting, { label })
                    : busy === "pay"
                      ? fill(copy.paying, { label })
                      : busy === "rate"
                        ? copy.rateWait
                        : txHash
                          ? fill(copy.paid, { network: quote?.network ?? "" })
                          : "";

  return (
    <div className="method-copy">
      <h3>{label}</h3>
      <p>{fill(copy.lead, { label, amount: amountLabel })}</p>
      <p className="fine-print">{copy.confirm}</p>
      <div className="amount-row" role="group" aria-label={copy.asset}>
        {assetIds.map((id) => (
          <button key={id} type="button" aria-pressed={asset === id} onClick={() => setAsset(id)}>
            {id.toUpperCase()}
          </button>
        ))}
      </div>
      {quote ? (
        <>
          <p>{fill(copy.rate, { amount: amountLabel, crypto: quote.crypto, symbol: quote.symbol })}</p>
          <p className="fine-print">{fill(copy.rateNow, { source: quote.source, symbol: quote.symbol, price: quote.price })}</p>
          <p>
            {copy.recipient} <code>{quote.address}</code>
          </p>
          <p className="fine-print">
            {copy.network}: {quote.network} · {copy.asset}: {quote.symbol}
          </p>
        </>
      ) : null}
      {account ? <p>{fill(copy.connected, { account: shortAddress(account) })}</p> : null}
      {subscription ? (
        <p>{due ? fill(copy.subDue, { amount: subscription.amount, label }) : fill(copy.subSaved, { date: dueDate })}</p>
      ) : null}
      <div className="web3-actions">
        {asset === "eth" && !account ? (
          <button className="pay-button" type="button" disabled={busy !== ""} onClick={() => void connect()}>
            {fill(copy.connect, { label })}
          </button>
        ) : (
          <>
            <button className="pay-button" type="button" disabled={!quote || busy !== ""} onClick={() => void pay(false)}>
              {quote ? fill(copy.once, { crypto: quote.crypto, symbol: quote.symbol }) : copy.rateWait}
            </button>
            <button className="pay-button" type="button" disabled={!quote || busy !== ""} onClick={() => void pay(true)}>
              {quote ? fill(copy.month, { crypto: quote.crypto, symbol: quote.symbol }) : copy.rateWait}
            </button>
          </>
        )}
        {notice === "missing" ? (
          <a className="pay-button" href={walletOpenUrl(walletId)}>
            {fill(copy.open, { label })}
          </a>
        ) : null}
        {opened ? (
          <a className="pay-button" href={opened} target="_blank" rel="noreferrer">
            {fill(copy.openPay, { symbol: quote?.symbol ?? "" })}
          </a>
        ) : null}
        {subscription ? (
          <button
            type="button"
            onClick={() => {
              clearSubscription();
              setSubscription(null);
            }}
          >
            {copy.subClear}
          </button>
        ) : null}
      </div>
      {status ? <p role="status">{status}</p> : null}
      {txHash && quote ? (
        <a href={txUrl(quote.asset, txHash)} target="_blank" rel="noreferrer">
          {copy.view}
        </a>
      ) : null}
    </div>
  );
}
