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

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning: browser extensions (e.g. LocatorJS) add attributes
    // to <html> before React loads. This only silences that one element.
    <html lang="en" className={`${display.variable} ${text.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
