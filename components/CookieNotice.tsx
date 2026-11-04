"use client";

import { useEffect, useState } from "react";
import { localePath, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n";

const storageKey = "mattix-cookie";

export function CookieNotice({ locale, copy }: { locale: Locale; copy: Dictionary["cookie"] }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showing = window.localStorage.getItem(storageKey) !== "accepted";
    setVisible(showing);
    document.body.classList.toggle("has-cookie", showing);
    return () => document.body.classList.remove("has-cookie");
  }, []);

  if (!visible) return null;

  return (
    <div className="cookie-bar" role="dialog" aria-labelledby="cookie-title">
      <div>
        <p id="cookie-title">{copy.title}</p>
        <p>{copy.body}</p>
      </div>
      <div className="cookie-actions">
        <a href={localePath(locale, "/legal/privacy")}>{copy.privacy}</a>
        <button
          type="button"
          onClick={() => {
            window.localStorage.setItem(storageKey, "accepted");
            document.body.classList.remove("has-cookie");
            setVisible(false);
          }}
        >
          {copy.accept}
        </button>
      </div>
    </div>
  );
}
