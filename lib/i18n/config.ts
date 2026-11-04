export const locales = ["en", "fr", "km", "zh-Hans", "zh-Hant", "it"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeTags: Record<Locale, string> = {
  en: "en-US",
  fr: "fr-FR",
  km: "km",
  "zh-Hans": "zh-Hans",
  "zh-Hant": "zh-Hant",
  it: "it-IT",
};

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  km: "ខ្មែរ",
  "zh-Hans": "简体中文",
  "zh-Hant": "繁體中文",
  it: "Italiano",
};

export const localeShort: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  km: "KM",
  "zh-Hans": "简体",
  "zh-Hant": "繁體",
  it: "IT",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function localePath(locale: string, path = "/") {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return clean === "/" ? `/${locale}` : `/${locale}${clean}`;
}
