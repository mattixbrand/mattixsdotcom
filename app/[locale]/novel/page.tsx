import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
  return { title: dict.nav.novel, description: dict.novel.body };
}

export default async function NovelPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const novel = site.novel;

  return (
    <main>
      <section className="page-intro">
        <p className="eyebrow">{novel.platform}</p>
        <h1>{novel.title}</h1>
        <p>{novel.logline}</p>
      </section>
      <section className="status-card">
        <p>{dict.novel.body}</p>
        <a className="button" href={novel.url} target="_blank" rel="noreferrer">
          {dict.novel.open}
        </a>
      </section>
    </main>
  );
}
