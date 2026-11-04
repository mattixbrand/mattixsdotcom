import type { MetadataRoute } from "next";
import { localePath, locales, localeTags } from "@/lib/i18n/config";
import { site } from "@/lib/site";
import { getHomeFilms } from "@/lib/youtube";

const pages: {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/videos", changeFrequency: "daily", priority: 0.9 },
  { path: "/novel", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
  { path: "/donate", changeFrequency: "monthly", priority: 0.5 },
  { path: "/legal/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "/legal/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/legal/services", changeFrequency: "yearly", priority: 0.3 },
];

function pageUrl(locale: string, path: string) {
  return new URL(localePath(locale, path), site.url).toString();
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let clips: NonNullable<MetadataRoute.Sitemap[number]["videos"]> = [];
  try {
    const films = await getHomeFilms();
    const list = films.president ? [...films.videos, films.president] : films.videos;
    clips = list.slice(0, 12).map((video) => ({
      title: video.title,
      thumbnail_loc: video.thumbnail,
      description: video.title,
    }));
  } catch {
    clips = [];
  }

  return pages.flatMap((page) =>
    locales.map((locale) => {
      const languages: Record<string, string> = {};
      for (const alternate of locales) {
        languages[localeTags[alternate]] = pageUrl(alternate, page.path);
      }
      languages["x-default"] = pageUrl("en", page.path);
      return {
        url: pageUrl(locale, page.path),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: { languages },
        ...(page.path === "/videos" && clips.length > 0 ? { videos: clips } : {}),
      };
    }),
  );
}
