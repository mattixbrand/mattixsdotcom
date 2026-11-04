import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ConnectSections } from "@/components/Connect";
import { ContactForm } from "@/components/ContactForm";
import { Offices } from "@/components/Offices";
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
  return { title: dict.contact.title, description: dict.contact.lead };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <main>
      <section className="page-intro">
        <p className="eyebrow">{dict.contact.eyebrow}</p>
        <h1>{dict.contact.title}</h1>
        <p>{dict.contact.lead}</p>
      </section>
      <section className="donate-layout">
        <div>
          <h2>{dict.nav.contact}</h2>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p>
            <a href={`mailto:${site.personalEmail}`}>{site.personalEmail}</a>
          </p>
          <ConnectSections
            sections={[
              { title: dict.home.connectBrand, links: site.social },
              { title: dict.home.connectPerson, links: site.personalSocial },
            ]}
          />
        </div>
        <Suspense fallback={null}>
          <ContactForm copy={dict.contact} />
        </Suspense>
      </section>
      <Offices locale={locale} copy={dict} />
    </main>
  );
}
