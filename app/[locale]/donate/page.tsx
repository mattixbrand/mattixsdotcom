import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DonatePanel } from "@/components/DonatePanel";
import { getDictionary } from "@/lib/i18n";
import { isLocale } from "@/lib/i18n/config";
import { site } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return { title: dict.donate.title, description: dict.donate.lead };
}

export default async function DonatePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <main>
      <section className="page-intro">
        <p className="eyebrow">{dict.donate.eyebrow}</p>
        <h1>{dict.donate.title}</h1>
        <p>{dict.donate.lead}</p>
      </section>
      <section className="donate-layout">
        <DonatePanel donations={site.donations} copy={dict.donate} locale={locale} />
      </section>
    </main>
  );
}
