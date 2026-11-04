import { localePath, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n";
import { publicSocialLinks, site } from "@/lib/site";

export function SiteFooter({
  locale,
  labels,
  tagline,
}: {
  locale: Locale;
  labels: Dictionary["footer"];
  tagline: string;
}) {
  const links = publicSocialLinks();
  return (
    <footer className="site-footer">
      <div>
        <p className="wordmark">{site.name}</p>
        <p>{tagline}</p>
      </div>
      <div className="footer-links">
        {links.length > 0 ? (
          <ul className="social-list">
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
        <nav aria-label={labels.legal}>
          <a href={localePath(locale, "/legal/terms")}>{labels.terms}</a>
          <a href={localePath(locale, "/legal/privacy")}>{labels.privacy}</a>
          <a href={localePath(locale, "/legal/services")}>{labels.serviceTerms}</a>
        </nav>
      </div>
    </footer>
  );
}
