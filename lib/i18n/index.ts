import type { Locale } from "./config";
import { isLocale } from "./config";
import en, { type Dictionary } from "./en";
import fr from "./fr";
import it from "./it";
import km from "./km";
import zhHans from "./zh-Hans";
import zhHant from "./zh-Hant";

const dictionaries: Record<Locale, Dictionary> = {
  en,
  fr,
  km,
  "zh-Hans": zhHans,
  "zh-Hant": zhHant,
  it,
};

export function getDictionary(locale: string): Dictionary {
  return isLocale(locale) ? dictionaries[locale] : en;
}

export function fill(template: string, values: Record<string, string>) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? "");
}

export type { Dictionary };
