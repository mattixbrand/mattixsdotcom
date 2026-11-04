"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { isLocale, localeNames, localeShort, localeTags, locales, localePath, type Locale } from "@/lib/i18n/config";
import { site } from "@/lib/site";

type Labels = {
  films: string;
  novel: string;
  services: string;
  contact: string;
  support: string;
  menu: string;
  close: string;
  primary: string;
  language: string;
};

export function SiteHeader({ locale, labels }: { locale: Locale; labels: Labels }) {
  const [open, setOpen] = useState(false);
  const [narrow, setNarrow] = useState(false);
  const pathname = usePathname();
  const search = useSearchParams().toString();
  const links = [
    { href: "/videos", label: labels.films },
    { href: "/novel", label: labels.novel },
    { href: "/services", label: labels.services },
    { href: "/contact", label: labels.contact },
    { href: "/donate", label: labels.support },
  ];

  useEffect(() => {
    const query = window.matchMedia("(max-width: 900px)");
    const apply = () => setNarrow(query.matches);
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname, search]);

  useEffect(() => {
    const locked = narrow && open;
    document.body.classList.toggle("nav-open", locked);
    return () => document.body.classList.remove("nav-open");
  }, [narrow, open]);

  function hrefFor(next: string) {
    const parts = pathname.split("/");
    if (isLocale(parts[1] ?? "")) parts[1] = next;
    else parts.splice(1, 0, next);
    const path = parts.join("/") || `/${next}`;
    return search ? `${path}?${search}` : path;
  }

  return (
    <header className="site-header">
      <Link href={localePath(locale)} className="wordmark" onClick={() => setOpen(false)}>
        {site.name}
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="primary-nav"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? labels.close : labels.menu}
      </button>
      <nav id="primary-nav" className={open ? "is-open" : undefined} aria-label={labels.primary} inert={narrow && !open ? true : undefined}>
        <div className="nav-panel">
          <div className="nav-links">
            {links.map((item) => (
              <a key={item.href} href={localePath(locale, item.href)}>
                {item.label}
              </a>
            ))}
          </div>
          <nav className="lang-switch" aria-label={labels.language}>
            {locales.map((code) => (
              <a
                key={code}
                href={hrefFor(code)}
                hrefLang={localeTags[code]}
                lang={localeTags[code]}
                aria-current={code === locale ? "true" : undefined}
                title={localeNames[code]}
              >
                {localeShort[code]}
              </a>
            ))}
          </nav>
        </div>
      </nav>
    </header>
  );
}
