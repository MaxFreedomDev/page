import localFont from "next/font/local";

export const editorialFont = localFont({
  src: [
    { path: "./fonts/CormorantGaramond-Regular.otf", style: "normal", weight: "400" },
    { path: "./fonts/CormorantGaramond-Italic.otf", style: "italic", weight: "400" },
  ],
  display: "swap",
  variable: "--font-editorial",
});

export const displayFont = localFont({
  src: [
    { path: "./fonts/Gerhaus-Regular.ttf", style: "normal", weight: "400" },
    { path: "./fonts/Gerhaus-Italic.ttf", style: "italic", weight: "400" },
  ],
  display: "swap",
  variable: "--font-display",
});

export const monoFont = localFont({
  src: [
    { path: "./fonts/ConsolaMono-Book.ttf", style: "normal", weight: "400" },
    { path: "./fonts/ConsolaMono-Bold.ttf", style: "normal", weight: "700" },
  ],
  display: "swap",
  variable: "--font-mono",
});
