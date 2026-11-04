import { localePath, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Offices({ locale, copy }: { locale: Locale; copy: Dictionary }) {
  return (
    <section className="sheet">
      <h2>{copy.home.officesTitle}</h2>
      <p className="section-lead">{copy.home.officesLead}</p>
      <div className="office-grid">
        {site.offices.map((office) => (
          <article key={office.id} className="office-card">
            <h3>{copy.offices[office.id as "cambodia" | "hongkong"]}</h3>
            <p>{office.address}</p>
            <p className="eyebrow">{copy.home.phone}</p>
            <ul>
              {office.phones.map((phone, index) => (
                <li key={phone}>
                  <a href={`tel:${phone}`}>{office.phoneLabels[index]}</a>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <a className="text-link" href={localePath(locale, "/contact")}>
        {copy.nav.contact}
      </a>
    </section>
  );
}
