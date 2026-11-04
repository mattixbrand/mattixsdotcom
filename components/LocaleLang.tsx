"use client";

import { useEffect } from "react";
import { localeTags, type Locale } from "@/lib/i18n/config";

export function LocaleLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = localeTags[locale];
  }, [locale]);

  return null;
}
