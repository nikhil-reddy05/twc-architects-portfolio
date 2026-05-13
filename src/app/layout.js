import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lexend_Mega } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const lexendMega = Lexend_Mega({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lexend-mega",
});

export const metadata = {
  metadataBase: new URL("https://www.twcarchitects.com"),
  title: "TWC Architects",
  description:
    "The White Walls Company Portfolio, TWC Architects - A modern architecture firm designing timeless spaces.",
  keywords: [
    "architecture", "interiors", "modern design", "twc architects", "white walls", "the white walls company", "pranav jella"
  ],
  alternates: {
  canonical:  "https://www.twcarchitects.com",
  },
  author: [{ name: "Pranav Jella" }, { name: "TWC Architects" }],
  creator: "Nikhil Reddy Banda",
  openGraph: {
    title: "TWC Architects",
    description:
      "The White Walls Company - A modern architecture and interior design firm.",
    url: "https://www.twcarchitects.com",
    siteName: "TWC Architects",
    type: "website",
    images: [{ url: "/twc-b.png", alt: "The White Walls Company" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TWC Architects",
    description:
      "The White Walls Company - A modern architecture and interior design firm.",
    // siteId: "1467726470533754880",
    // creator: "@nextjs",
    // creatorId: "1467726470533754880",
    images: ["/twc-b.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lexendMega.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "TWC Architects",
              url: "https://www.twcarchitects.com",
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-white min-h-screen flex flex-col">
        <Toaster position="top-center" />
        <Navbar />
        <main className="pt-12 pb-0 md:pt-20 flex-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
            <SpeedInsights />
            <Analytics />
          </div>
        </main>
        <Footer className="bottom-0 felx-2" />
      </body>
    </html>
  );
}
