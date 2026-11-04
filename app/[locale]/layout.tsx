import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CookieNotice } from "@/components/CookieNotice";
import { LocaleLang } from "@/components/LocaleLang";
import { SiteFooter } from "@/components/SiteChrome";
import { SiteHeader } from "@/components/SiteHeader";
import { getDictionary } from "@/lib/i18n";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: {
      default: `Mattix · ${dict.meta.shortBio}`,
      template: `%s · Mattix`,
    },
    description: dict.meta.description,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <LocaleLang locale={locale} />
      <a className="skip-link" href="#content">
        {dict.nav.skip}
      </a>
      <Suspense fallback={null}>
        <SiteHeader locale={locale as Locale} labels={dict.nav} />
      </Suspense>
      <div id="content">{children}</div>
      <SiteFooter locale={locale} labels={dict.footer} tagline={dict.meta.tagline} />
      <CookieNotice locale={locale} copy={dict.cookie} />
    </>
  );
}
