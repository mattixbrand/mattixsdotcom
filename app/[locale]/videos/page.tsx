import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EmptyFilms, VideoCard } from "@/components/Videos";
import { getDictionary } from "@/lib/i18n";
import { isLocale, localeTags } from "@/lib/i18n/config";
import { getChannelVideos } from "@/lib/youtube";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return { title: dict.videos.title, description: dict.videos.lead };
}

export default async function VideosPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const videos = await getChannelVideos();

  return (
    <main>
      <section className="page-intro">
        <p className="eyebrow">{dict.videos.eyebrow}</p>
        <h1>{dict.videos.title}</h1>
        <p>{dict.videos.lead}</p>
      </section>
      <section className="sheet">
        {videos.length > 0 ? (
          <div className="video-grid">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} locale={localeTags[locale]} />
            ))}
          </div>
        ) : (
          <EmptyFilms message={dict.home.emptyFilms} hint={dict.home.emptyHint} />
        )}
      </section>
    </main>
  );
}
