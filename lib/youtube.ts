import { cacheLife } from "next/cache";
import { site } from "@/lib/site";

export type Video = {
  id: string;
  title: string;
  published: string;
  thumbnail: string;
};

const browserHeaders = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  "Accept-Language": "en-US,en;q=0.9",
};

function decodeXml(value: string) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'");
}

function handleFrom(url: string) {
  return url.match(/youtube\.com\/(@[\w.-]+)/)?.[1] ?? "";
}

function videoFrom(id: string, title: string, published = ""): Video | null {
  const cleanId = id.trim();
  const cleanTitle = title.trim();
  if (!/^[\w-]{11}$/.test(cleanId) || !cleanTitle) return null;
  return {
    id: cleanId,
    title: cleanTitle,
    published: published.trim(),
    thumbnail: `https://i.ytimg.com/vi/${cleanId}/hqdefault.jpg`,
  };
}

function takeVideos(videos: Video[]) {
  const seen = new Set<string>();
  const unique: Video[] = [];
  for (const video of videos) {
    if (seen.has(video.id)) continue;
    seen.add(video.id);
    unique.push(video);
    if (unique.length === 12) break;
  }
  return unique;
}

function textContent(value: unknown) {
  if (!value || typeof value !== "object") return "";
  const record = value as { simpleText?: string; content?: string; runs?: { text?: string }[] };
  if (typeof record.simpleText === "string") return record.simpleText;
  if (typeof record.content === "string") return record.content;
  if (Array.isArray(record.runs)) return record.runs.map((run) => run.text ?? "").join("");
  return "";
}

function lockupDate(metadata: unknown) {
  if (!metadata || typeof metadata !== "object") return "";
  const rows = (
    metadata as {
      lockupMetadataViewModel?: {
        metadata?: { contentMetadataViewModel?: { metadataRows?: { metadataParts?: { text?: unknown }[] }[] } };
      };
    }
  ).lockupMetadataViewModel?.metadata?.contentMetadataViewModel?.metadataRows;
  const parts = (rows ?? []).flatMap((row) => row.metadataParts ?? []);
  const texts = parts.map((part) => textContent(part.text)).filter(Boolean);
  return texts.length > 1 ? (texts.at(-1) ?? "") : "";
}

function collectVideos(node: unknown, found: Video[]) {
  if (!node || typeof node !== "object" || found.length >= 12) return;
  if (Array.isArray(node)) {
    for (const item of node) collectVideos(item, found);
    return;
  }

  const record = node as Record<string, unknown>;
  const renderer = (record.videoRenderer ?? record.gridVideoRenderer) as
    | { videoId?: string; title?: unknown; publishedTimeText?: unknown }
    | undefined;
  if (renderer?.videoId) {
    const video = videoFrom(renderer.videoId, textContent(renderer.title), textContent(renderer.publishedTimeText));
    if (video) found.push(video);
  }

  const lockup = record.lockupViewModel as { contentId?: string; metadata?: unknown } | undefined;
  if (typeof lockup?.contentId === "string") {
    const title = textContent(
      (lockup.metadata as { lockupMetadataViewModel?: { title?: unknown } } | undefined)?.lockupMetadataViewModel
        ?.title,
    );
    const video = videoFrom(lockup.contentId, title, lockupDate(lockup.metadata));
    if (video) found.push(video);
  }

  for (const value of Object.values(record)) collectVideos(value, found);
}

function parseAtom(xml: string) {
  return takeVideos(
    xml
      .split("<entry>")
      .slice(1)
      .map((entry) => {
        const id = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1] ?? "";
        const rawTitle = entry.match(/<title>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/)?.[1] ?? "";
        const published = entry.match(/<published>([^<]+)<\/published>/)?.[1] ?? "";
        return videoFrom(id, decodeXml(rawTitle), published);
      })
      .filter((video): video is Video => video !== null),
  );
}

async function readText(url: string, init?: RequestInit) {
  const response = await fetch(url, {
    ...init,
    cache: "no-store",
    headers: { ...browserHeaders, ...init?.headers },
    signal: AbortSignal.timeout(12000),
  });
  if (!response.ok) return "";
  return response.text();
}

async function readBrowse(channelId: string) {
  const response = await fetch("https://www.youtube.com/youtubei/v1/browse?prettyPrint=false", {
    method: "POST",
    cache: "no-store",
    headers: { ...browserHeaders, "Content-Type": "application/json" },
    body: JSON.stringify({
      context: { client: { clientName: "WEB", clientVersion: "2.20251101.01.00", hl: "en", gl: "US" } },
      browseId: channelId,
      params: "EgZ2aWRlb3PyBgQKAjoA",
    }),
    signal: AbortSignal.timeout(12000),
  });
  if (!response.ok) return [];
  const payload: unknown = await response.json();
  const found: Video[] = [];
  collectVideos(payload, found);
  return takeVideos(found);
}

async function readChannelPage(channelId: string) {
  const handle =
    channelId === site.president.channelId
      ? handleFrom(site.president.youtube)
      : handleFrom(site.social.find((item) => item.id === "youtube")?.href ?? "");
  const page = handle || `channel/${channelId}`;
  const html = await readText(`https://www.youtube.com/${page}/videos`);
  if (!html) return [];
  const found: Video[] = [];
  const pattern =
    /"videoId":"([\w-]{11})"[\s\S]{0,4000}?"lockupMetadataViewModel":\{"title":\{"content":"((?:\\.|[^"\\])*)"/g;
  for (const match of html.matchAll(pattern)) {
    let title = match[2] ?? "";
    try {
      title = JSON.parse(`"${match[2]}"`) as string;
    } catch {
      title = match[2] ?? "";
    }
    const video = videoFrom(match[1] ?? "", title);
    if (video) found.push(video);
  }
  return takeVideos(found);
}

async function readFeed(channelId: string): Promise<Video[]> {
  const id = channelId.trim();
  if (!id) return [];

  try {
    const videos = await readBrowse(id);
    if (videos.length > 0) return videos;
  } catch {
    // The browse call is the usual source. The page and the Atom feed are the backups.
  }

  try {
    const videos = await readChannelPage(id);
    if (videos.length > 0) return videos;
  } catch {
    // Fall through to the public Atom feed.
  }

  try {
    const xml = await readText(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${encodeURIComponent(id)}`,
    );
    if (!xml.includes("<entry>")) return [];
    return parseAtom(xml);
  } catch {
    return [];
  }
}

async function loadChannel(channelId: string) {
  "use cache";
  const videos = await readFeed(channelId);
  if (videos.length > 0) cacheLife("hours");
  else cacheLife({ revalidate: 60, expire: 180 });
  return videos;
}

export function formatPublished(iso: string, locale = "en-US") {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat(locale, {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export async function getChannelVideos(channelId = site.youtube.channelId) {
  return loadChannel(channelId);
}

export async function getVideoShelf() {
  const videos = await getChannelVideos();
  const featuredId = site.youtube.featuredVideoId.trim();
  const featured = featuredId
    ? (videos.find((video) => video.id === featuredId) ?? {
        id: featuredId,
        title: "Latest film",
        published: "",
        thumbnail: `https://i.ytimg.com/vi/${featuredId}/hqdefault.jpg`,
      })
    : (videos[0] ?? null);

  return { videos, featured };
}

export async function getHomeFilms() {
  const [brand, president] = await Promise.all([
    loadChannel(site.youtube.channelId),
    loadChannel(site.president.channelId),
  ]);
  const featuredId = site.youtube.featuredVideoId.trim();
  const featured = featuredId
    ? (brand.find((video) => video.id === featuredId) ?? {
        id: featuredId,
        title: "Latest film",
        published: "",
        thumbnail: `https://i.ytimg.com/vi/${featuredId}/hqdefault.jpg`,
      })
    : (brand[0] ?? null);

  return { videos: brand, featured, president: president[0] ?? null };
}
