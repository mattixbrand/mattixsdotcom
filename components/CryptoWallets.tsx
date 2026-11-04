"use client";

import { useEffect, useState } from "react";
import { fill, type Dictionary } from "@/lib/i18n";
import type { WalletAddress } from "@/lib/site";

function WalletQr({ value }: { value: string }) {
  const [src, setSrc] = useState("");

  useEffect(() => {
    let cancelled = false;
    import("qrcode")
      .then((QRCode) =>
        QRCode.toDataURL(value, {
          margin: 1,
          width: 220,
          color: { dark: "#1b1714", light: "#fffaf3" },
        }),
      )
      .then((url) => {
        if (!cancelled) setSrc(url);
      });
    return () => {
      cancelled = true;
    };
  }, [value]);

  if (!src) return <div className="qr-skeleton" aria-hidden="true" />;
  return (
    // Generated data URL, not a remote asset.
    // eslint-disable-next-line @next/next/no-img-element
    <img className="pay-qr" src={src} alt="" width={220} height={220} />
  );
}

export function CryptoWallets({
  walletName,
  addresses,
  copy,
}: {
  walletName: string;
  addresses: WalletAddress[];
  copy: Dictionary["donate"];
}) {
  const [copied, setCopied] = useState("");
  const ready = addresses.filter((item) => item.address.trim().length > 0);

  async function copyAddress(item: WalletAddress) {
    await navigator.clipboard.writeText(item.address);
    setCopied(item.id);
    window.setTimeout(() => setCopied(""), 2000);
  }

  if (ready.length === 0) {
    return <p className="setup-note">{fill(copy.unavailable, { label: walletName })}</p>;
  }

  return (
    <ul className="wallet-list">
      {ready.map((item) => (
        <li key={item.id}>
          <WalletQr value={item.pay || item.address} />
          <div>
            <h3>
              {item.asset} <span>{item.network}</span>
            </h3>
            <p>{fill(copy.walletSend, { asset: item.asset, network: item.network, wallet: walletName })}</p>
            {item.amountText ? <p>{item.amountText}</p> : null}
            <code>{item.address}</code>
            <button type="button" onClick={() => copyAddress(item)}>
              {copied === item.id ? copy.copied : copy.copy}
            </button>
            {item.record ? (
              <a className="record-link" href={item.record} target="_blank" rel="noreferrer">
                {copy.record}
              </a>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
}
