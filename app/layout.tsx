import type { Metadata, Viewport } from "next";
import { site } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  keywords: [
    "ShijimiWORKs",
    "アート",
    "オンラインギャラリー",
    "抽象画",
    "デジタルアート",
    "アートプリント",
    "作品販売",
    "オーダーメイドアート",
  ],
  authors: [{ name: "ShijimiWORKs" }],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: site.url,
    siteName: site.brand,
    title: site.title,
    description: site.description,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: "ShijimiWORKs Art Collection のオンラインギャラリー",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.ogImage],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f5f1",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
