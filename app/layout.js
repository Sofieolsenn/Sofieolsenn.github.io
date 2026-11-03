import { Wix_Madefor_Display, Wix_Madefor_Text } from "next/font/google";
import { site } from "@/data/content";
import "./globals.css";

const display = Wix_Madefor_Display({
  variable: "--font-wix-display",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const text = Wix_Madefor_Text({
  variable: "--font-wix-text",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: site.title,
    description: site.description,
    siteName: site.name,
  },
};

// Runs before the page is drawn: marks the page so the front page content can
// start hidden and fade in (see ScrollReveal). Skipped for people who prefer less
// motion, and undone after 4 seconds if the rest of the JavaScript never loads.
const revealScript = `if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  var root = document.documentElement;
  root.classList.add("js-reveal");
  setTimeout(function () { if (!root.classList.contains("reveal-ready")) root.classList.remove("js-reveal"); }, 4000);
}`;

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning: browser extensions (e.g. LocatorJS) add attributes
    // to <html> before React loads. This only silences that one element.
    <html lang="en" className={`${display.variable} ${text.variable}`} suppressHydrationWarning>
      {/* The same extensions also add attributes to <head>, so it's silenced too */}
      <head suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
