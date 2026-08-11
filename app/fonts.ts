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

export const audexFont = localFont({
  src: "./fonts/Audex-Regular.woff",
  display: "swap",
  variable: "--font-audex",
});

export const unboundedFont = localFont({
  src: "./fonts/Unbounded-Medium.ttf",
  display: "swap",
  variable: "--font-unbounded",
  weight: "500",
});

export const poiretOneFont = localFont({
  src: "./fonts/PoiretOne-Regular.ttf",
  display: "swap",
  variable: "--font-poiret-one",
  weight: "400",
});
