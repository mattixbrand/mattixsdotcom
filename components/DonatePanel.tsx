"use client";

import { useEffect, useState } from "react";
import { CryptoWallets } from "@/components/CryptoWallets";
import { loadQuotes, WalletPay } from "@/components/WalletPay";
import { paymentUri, type RateQuote } from "@/lib/crypto";
import { QrCheckout } from "@/components/QrCheckout";
import { fill, type Dictionary } from "@/lib/i18n";
import { paymentUrl, type PayField, type PayLink, type PayQr, type WalletGroup } from "@/lib/site";

function fieldLabel(field: PayField, copy: Dictionary["donate"]) {
  if (field.id === "nickname") return copy.nickname;
  if (field.id === "accountId") return copy.accountId;
  if (field.id === "email") return copy.email;
  if (field.id === "username") return copy.username;
  if (field.id === "name") return copy.name;
  return field.label;
}

type Donations = {
  presets: number[];
  links: PayLink[];
  qr: PayQr[];
  wallets: WalletGroup[];
};

export function DonatePanel({
  donations,
  copy,
  locale,
}: {
  donations: Donations;
  copy: Dictionary["donate"];
  locale: string;
}) {
  const [amount, setAmount] = useState(donations.presets[1] ?? donations.presets[0] ?? 10);
  const [custom, setCustom] = useState("");
  const [methodId, setMethodId] = useState(donations.links[0]?.id ?? "paypal");
  const [copied, setCopied] = useState("");
  const [quotes, setQuotes] = useState<RateQuote[] | null>(null);
  const [quoteFailed, setQuoteFailed] = useState(false);

  const chosen = custom.trim() ? Number(custom) : amount;
  const amountLabel = Number.isFinite(chosen) ? chosen.toFixed(2) : "0.00";
  const link = donations.links.find((item) => item.id === methodId);
  const qr = donations.qr.find((item) => item.id === methodId);
  const wallet = donations.wallets.find((item) => item.id === methodId);
  useEffect(() => {
    if (link?.id !== "coinbase") return;
    let cancel = false;
    const timer = window.setTimeout(() => {
      void loadQuotes(chosen).then((next) => {
        if (cancel) return;
        setQuotes(next);
        setQuoteFailed(!next);
      });
    }, 250);
    return () => {
      cancel = true;
      window.clearTimeout(timer);
    };
  }, [link?.id, chosen]);

  const href = link ? paymentUrl(link, chosen) : "";
  const fields = link?.fields?.filter((field) => field.value.trim()) ?? [];
  const linkAddresses = link?.addresses?.filter((item) => item.address.trim()) ?? [];

  return (
    <div className="donate-panel">
      <fieldset className="amount-picker">
        <legend>{copy.amount}</legend>
        <div className="amount-row">
          {donations.presets.map((preset) => (
            <button
              key={preset}
              type="button"
              aria-pressed={!custom && amount === preset}
              onClick={() => {
                setAmount(preset);
                setCustom("");
              }}
            >
              ${preset}
            </button>
          ))}
          <label className="custom-amount">
            <span>{copy.custom}</span>
            <input
              inputMode="decimal"
              min={1}
              step="0.01"
              value={custom}
              placeholder={copy.custom}
              onChange={(event) => setCustom(event.target.value)}
            />
          </label>
        </div>
      </fieldset>

      <div className="method-grid" role="tablist" aria-label={copy.methods}>
        {donations.links.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={methodId === item.id}
            onClick={() => setMethodId(item.id)}
          >
            <strong>{item.label}</strong>
            <span>{item.detail}</span>
          </button>
        ))}
        {donations.qr.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={methodId === item.id}
            onClick={() => setMethodId(item.id)}
          >
            <strong>{item.label}</strong>
            <span>{item.detail}</span>
          </button>
        ))}
        {donations.wallets.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={methodId === item.id}
            onClick={() => setMethodId(item.id)}
          >
            <strong>{item.label}</strong>
            <span>{item.detail}</span>
          </button>
        ))}
      </div>

      <div className="method-body" role="tabpanel">
        {link ? (
          fields.length || href || linkAddresses.length ? (
            <div className="method-copy">
              <h3>{link.label}</h3>
              <p>
                {link.id === "payoneer"
                  ? fill(copy.payoneer, { amount: amountLabel })
                  : fields.length
                    ? fill(copy.account, { label: link.label, amount: amountLabel })
                    : link.id === "revolut"
                      ? fill(copy.revolut, { amount: amountLabel })
                      : link.href
                        ? fill(copy.linked, { label: link.label, amount: amountLabel })
                        : fill(copy.leave, { label: link.label, amount: amountLabel })}
              </p>
              {fields.length ? (
                <ul className="account-fields">
                  {fields.map((field) => (
                    <li key={field.id}>
                      <span>{fieldLabel(field, copy)}</span>
                      <code>{field.value}</code>
                      <button
                        type="button"
                        onClick={() => {
                          void navigator.clipboard.writeText(field.value);
                          setCopied(field.id);
                          window.setTimeout(() => setCopied(""), 2000);
                        }}
                      >
                        {copied === field.id ? copy.copied : copy.copy}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : null}
              {linkAddresses.length ? (
                <>
                  <p className="fine-print">{copy.walletWarn}</p>
                  {link.id === "coinbase" && !quotes ? (
                    <p role="status">{quoteFailed ? copy.web3.rateFail : copy.web3.rateWait}</p>
                  ) : null}
                  <CryptoWallets
                    walletName={link.label}
                    addresses={linkAddresses.map((item) => {
                      const quote = quotes?.find((entry) => entry.symbol === item.asset && entry.network === item.network);
                      if (!quote) return item;
                      return {
                        ...item,
                        pay: paymentUri(quote.asset, quote.address, quote.crypto, quote.baseUnits),
                        amountText: `${fill(copy.web3.rate, { amount: amountLabel, crypto: quote.crypto, symbol: quote.symbol })} ${fill(copy.web3.rateNow, { source: quote.source, symbol: quote.symbol, price: quote.price })}`,
                      };
                    })}
                    copy={copy}
                  />
                </>
              ) : null}
              {href ? (
                <a className="pay-button" href={href} target="_blank" rel="noreferrer">
                  {fill(copy.continue, { label: link.label })}
                </a>
              ) : null}
            </div>
          ) : (
            <p className="setup-note">{fill(copy.unavailable, { label: link.label })}</p>
          )
        ) : null}

        {qr ? <QrCheckout method={qr} amountLabel={amountLabel} copy={copy} /> : null}

        {wallet && (wallet.id === "metamask" || wallet.id === "trust") ? (
          <WalletPay
            walletId={wallet.id === "trust" ? "trust" : "metamask"}
            label={wallet.label}
            amount={chosen}
            amountLabel={amountLabel}
            locale={locale}
            copy={copy.web3}
          />
        ) : wallet ? (
          <div className="method-copy">
            <h3>{wallet.label}</h3>
            <p>{fill(copy.walletLead, { label: wallet.label })}</p>
            <p className="fine-print">{copy.walletWarn}</p>
            <CryptoWallets walletName={wallet.label} addresses={wallet.addresses} copy={copy} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
