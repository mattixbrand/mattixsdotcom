import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Fraunces, Noto_Sans_Khmer, Noto_Sans_SC, Noto_Sans_TC, Outfit } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { site } from "@/lib/site";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const khmer = Noto_Sans_Khmer({
  subsets: ["khmer"],
  weight: ["400", "600"],
  variable: "--font-khmer",
  display: "swap",
  preload: false,
});

const simplified = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-sc",
  display: "swap",
  preload: false,
});

const traditional = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-tc",
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Mattix",
  description: "Films, a novel, and software for hire.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${sans.variable} ${khmer.variable} ${simplified.variable} ${traditional.variable} h-full antialiased`}
    >
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
