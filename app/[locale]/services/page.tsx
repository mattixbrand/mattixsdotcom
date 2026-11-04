import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n";
import { isLocale, localePath } from "@/lib/i18n/config";
import { site } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return { title: dict.services.title, description: dict.services.lead };
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const telegram = site.social.filter((item) => item.id.startsWith("telegram"));

  return (
    <main>
      <section className="page-intro">
        <p className="eyebrow">{dict.services.eyebrow}</p>
        <h1>{dict.services.title}</h1>
        <p>{dict.services.lead}</p>
      </section>
      <section className="sheet service-sheet">
        {site.services.map((group) => {
          const groupCopy = dict.services.groups[group.id as keyof typeof dict.services.groups];
          return (
            <article key={group.id} className="service-group">
              <div>
                <h2>{groupCopy.name}</h2>
                <p>{groupCopy.summary}</p>
              </div>
              <ul className="price-grid">
                {group.plans.map((plan) => {
                  const planCopy = dict.services.plans[plan.id as keyof typeof dict.services.plans];
                  return (
                    <li key={plan.id}>
                      <h3>{planCopy.name}</h3>
                      <p className="price">
                        {plan.price} <span>{planCopy.unit}</span>
                      </p>
                      <ul>
                        {planCopy.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
        <div className="service-note">
          <h2>{dict.services.ask}</h2>
          <p>
            {dict.services.lead}{" "}
            <a href={localePath(locale, "/legal/services")}>{dict.services.terms}</a>
          </p>
          <div className="hero-actions">
            <a className="button" href={localePath(locale, "/contact?purpose=consulting")}>
              {dict.contact.purposes.consulting}
            </a>
            <a className="button ghost dark" href={localePath(locale, "/contact")}>
              {dict.contact.purposes.contact}
            </a>
            <a className="button ghost dark" href={localePath(locale, "/contact?purpose=invoice")}>
              {dict.contact.purposes.invoice}
            </a>
            {telegram.map((item) => (
              <a key={item.id} className="button ghost dark" href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
