import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://lippalabs.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lippa Labs",
    template: "%s | Lippa Labs"
  },
  description: "Independent software studio building AI-assisted tools for finance, productivity, and decision support.",
  applicationName: "Lippa Labs",
  openGraph: {
    title: "Lippa Labs",
    description: "Independent software studio building AI-assisted tools for finance, productivity, and decision support.",
    url: siteUrl,
    siteName: "Lippa Labs",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Lippa Labs",
    description: "Independent software studio building AI-assisted tools for finance, productivity, and decision support."
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#080b12" }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
