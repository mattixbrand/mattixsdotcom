"use client";

import { useState } from "react";
import { QrFile } from "@/components/QrFile";
import { fill, type Dictionary } from "@/lib/i18n";
import type { PayQr } from "@/lib/site";

export function QrCheckout({
  method,
  amountLabel,
  copy,
}: {
  method: PayQr;
  amountLabel: string;
  copy: Dictionary["donate"];
}) {
  const [region, setRegion] = useState<"hongkong" | "mainland">("hongkong");
  const codes = method.codes.filter((code) => code.region === region);

  return (
    <div className="method-copy checkout-stage" key={method.id}>
      <h3>{method.label}</h3>
      <p>{fill(copy.qrLead, { label: method.label, amount: amountLabel })}</p>
      <div className="region-switch" role="group" aria-label={copy.qrRegion}>
        <button type="button" aria-pressed={region === "hongkong"} onClick={() => setRegion("hongkong")}>
          {copy.qrHongkong}
        </button>
        <button type="button" aria-pressed={region === "mainland"} onClick={() => setRegion("mainland")}>
          {copy.qrMainland}
        </button>
      </div>
      <ul className="qr-stage" key={region}>
        {codes.map((code) => (
          <li key={code.id}>
            <div className="qr-frame">
              <QrFile src={code.src} alt={fill(copy.qrAlt, { label: `${method.label} ${code.account}` })} missing={fill(copy.qrMissing, { label: method.label })} />
              <span className="qr-scan" aria-hidden="true" />
            </div>
            <span>{copy.qrAccount}</span>
            <code>{code.account}</code>
          </li>
        ))}
      </ul>
    </div>
  );
}
