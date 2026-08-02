import type { Metadata } from "next";
import "./globals.css";
import { assetPath } from "./assetPath";

const title = "PAGE — книжный клуб без рамок и дедлайнов";
const description =
  "Замедлитесь с книгой. Наполняйтесь с нами. Одна книга в месяц, закрытое Telegram-комьюнити и свободный формат участия.";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: assetPath("/favicon.png"),
    shortcut: assetPath("/favicon.png"),
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "ru_RU",
    images: [
      {
        url: assetPath("/og.png"),
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
    images: [assetPath("/og.png")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
