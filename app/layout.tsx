import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://lippalabs.com";
const description = "Lippa Labs develops AI-assisted products including SpendFence, GigLedger, and TradersDelight across finance, markets, productivity, and behavioral systems.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lippa Labs",
    template: "%s | Lippa Labs"
  },
  description,
  applicationName: "Lippa Labs",
  keywords: [
    "Lippa Labs",
    "SpendFence",
    "GigLedger",
    "TradersDelight",
    "AI product studio",
    "finance software",
    "trading journal"
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" }
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }]
  },
  openGraph: {
    title: "Lippa Labs | SpendFence, GigLedger, and TradersDelight",
    description,
    url: siteUrl,
    siteName: "Lippa Labs",
    type: "website",
    images: [
      {
        url: "/brand/lippa-labs-og.png",
        width: 1200,
        height: 630,
        alt: "Lippa Labs particle-cloud logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Lippa Labs",
    description,
    images: ["/brand/lippa-labs-og.png"]
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
    { media: "(prefers-color-scheme: light)", color: "#010208" },
    { media: "(prefers-color-scheme: dark)", color: "#010208" }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
