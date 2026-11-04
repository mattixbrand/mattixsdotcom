import { ConnectSections } from "@/components/Connect";
import { Offices } from "@/components/Offices";
import { EmptyFilms, VideoCard, VideoFrame } from "@/components/Videos";
import { getDictionary } from "@/lib/i18n";
import { isLocale, localePath, localeTags } from "@/lib/i18n/config";
import { site } from "@/lib/site";
import { getHomeFilms } from "@/lib/youtube";
import { notFound } from "next/navigation";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const dateLocale = localeTags[locale];
  const { featured, videos, president: presidentFilm } = await getHomeFilms();

  return (
    <main>
      <section className="hero">
        <p className="eyebrow">
          {dict.meta.shortBio} · {dict.offices.cambodia} · {dict.offices.hongkong}
        </p>
        <h1>{site.name}</h1>
        <p className="lede">{dict.meta.tagline}</p>
        <div className="hero-actions">
          <a className="button" href={localePath(locale, "/videos")}>
            {dict.home.watch}
          </a>
          <a className="button ghost" href={localePath(locale, "/services")}>
            {dict.home.hire}
          </a>
          <a className="button ghost" href={localePath(locale, "/contact")}>
            {dict.nav.contact}
          </a>
        </div>
      </section>

      {featured ? <VideoFrame video={featured} nowPlaying={dict.home.nowPlaying} /> : null}

      <section className="sheet">
        <h2>{dict.home.latest}</h2>
        {videos.length > 0 ? (
          <div className="video-grid">
            {videos.slice(0, 3).map((video) => (
              <VideoCard key={video.id} video={video} locale={dateLocale} />
            ))}
          </div>
        ) : (
          <EmptyFilms message={dict.home.emptyFilms} hint={dict.home.emptyHint} />
        )}
      </section>

      <section className="sheet president">
        <div>
          <p className="eyebrow">{dict.home.presidentEyebrow}</p>
          <h2>{site.president.name}</h2>
          <p>{dict.home.presidentBody}</p>
          <a className="button" href={site.president.youtube} target="_blank" rel="noreferrer">
            {dict.home.presidentCta}
          </a>
        </div>
        {presidentFilm ? (
          <figure className="video-frame">
            <div className="video-embed">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${presidentFilm.id}`}
                title={presidentFilm.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <figcaption>
              <span>{dict.home.nowPlaying}</span>
              <strong>{presidentFilm.title}</strong>
            </figcaption>
          </figure>
        ) : (
          <EmptyFilms message={dict.home.presidentEmpty} />
        )}
      </section>

      <section className="band">
        <div>
          <p className="eyebrow">{site.novel.platform}</p>
          <h2>{site.novel.title}</h2>
          <p>{site.novel.logline}</p>
        </div>
        <a className="button" href={localePath(locale, "/novel")}>
          {dict.home.readNovel}
        </a>
      </section>

      <section className="sheet">
        <h2>{dict.home.connect}</h2>
        <p className="section-lead">{dict.home.connectLead}</p>
        <ConnectSections
          sections={[
            { title: dict.home.connectBrand, links: site.social, level: "h3" },
            { title: dict.home.connectPerson, links: site.personalSocial, level: "h3" },
          ]}
        />
      </section>

      <section className="about-grid">
        <h2>{dict.home.about}</h2>
        <div>
          {dict.home.aboutBody.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <a className="text-link" href={localePath(locale, "/services")}>
            {dict.home.prices}
          </a>
        </div>
      </section>

      <Offices locale={locale} copy={dict} />

      <section className="band">
        <div>
          <p className="eyebrow">{dict.home.supportEyebrow}</p>
          <h2>{dict.home.supportTitle}</h2>
        </div>
        <a className="button" href={localePath(locale, "/donate")}>
          {dict.home.supportCta}
        </a>
      </section>
    </main>
  );
}
