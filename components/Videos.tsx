import Image from "next/image";
import { formatPublished, type Video } from "@/lib/youtube";

export function VideoCard({ video, locale }: { video: Video; locale: string }) {
  return (
    <a
      className="video-card"
      href={`https://www.youtube.com/watch?v=${video.id}`}
      target="_blank"
      rel="noreferrer"
    >
      <div className="video-thumb">
        <Image src={video.thumbnail} alt="" width={480} height={360} />
      </div>
      <h3>{video.title}</h3>
      <Published published={video.published} locale={locale} />
    </a>
  );
}

function Published({ published, locale }: { published: string; locale: string }) {
  const formatted = formatPublished(published, locale);
  const label = formatted || published;
  if (!label) return null;
  return <time dateTime={formatted ? published : undefined}>{label}</time>;
}

export function VideoFrame({ video, nowPlaying }: { video: Video; nowPlaying: string }) {
  return (
    <figure className="video-frame">
      <div className="video-embed">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.id}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <figcaption>
        <span>{nowPlaying}</span>
        <strong>{video.title}</strong>
      </figcaption>
    </figure>
  );
}

export function EmptyFilms({ message, hint }: { message: string; hint?: string }) {
  return (
    <div className="empty-films">
      <p>{message}</p>
      {hint ? <p className="fine-print">{hint}</p> : null}
    </div>
  );
}
