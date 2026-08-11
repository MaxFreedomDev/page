import type { Metadata } from "next";
import "./globals.css";
import { assetPath } from "./assetPath";
import { displayFont, editorialFont, monoFont } from "./fonts";

const title = "PAGE — книжный клуб без рамок и дедлайнов";
const description =
  "Замедлитесь с книгой. Наполняйтесь с нами. Одна книга в месяц, закрытое Telegram-комьюнити и свободный формат участия.";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const socialImage = new URL(assetPath("/og.png"), `${new URL(siteUrl).origin}/`).toString();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: assetPath("/favicon.svg"),
    shortcut: assetPath("/favicon.svg"),
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "ru_RU",
    images: [
      {
        url: socialImage,
        width: 1536,
        height: 1024,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${editorialFont.variable} ${displayFont.variable} ${monoFont.variable}`}
      lang="ru"
    >
      <body>{children}</body>
    </html>
  );
}
