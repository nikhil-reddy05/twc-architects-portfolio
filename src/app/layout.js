import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lexend_Mega } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import JsonLd from "@/components/JsonLd";
import {
  siteConfig,
  getLocalBusinessJsonLd,
  getWebSiteJsonLd,
} from "@/lib/siteConfig";

const lexendMega = Lexend_Mega({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lexend-mega",
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.name,
  authors: [{ name: "Ar. Pranav Jella" }, { name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.legalName,
  category: "Architecture & Interior Design",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
        alt: `${siteConfig.name} — ${siteConfig.legalName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  // Add your Google Search Console token here once you verify the domain:
  // verification: { google: "your-verification-token" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lexendMega.variable}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <JsonLd data={getLocalBusinessJsonLd()} />
        <JsonLd data={getWebSiteJsonLd()} />
        <Toaster position="top-center" />
        <Navbar />
        <main className="pt-12 pb-0 md:pt-20 flex-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
            <SpeedInsights />
            <Analytics />
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
