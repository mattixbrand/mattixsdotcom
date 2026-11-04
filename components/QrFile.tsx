"use client";

import { useState } from "react";

export function QrFile({ src, alt, missing }: { src: string; alt: string; missing: string }) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return <p className="setup-note">{missing}</p>;
  }

  return (
    // User-supplied QR art may not match a fixed aspect ratio.
    // eslint-disable-next-line @next/next/no-img-element
    <img className="pay-qr" src={src} alt={alt} onError={() => setFailed(true)} />
  );
}
