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
  title: "TWC Architects",
  description:
    "The White Walls Company Portfolio, TWC Architects - A modern architecture firm designing timeless spaces.",
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
        <meta
          name="keywords"
          content="architecture, interiors, modern design, twc architects, white walls, the white walls company"
        />
        <meta name="author" content="TWC Architects" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="TWC Architects" />
        <meta
          property="og:description"
          content="A modern architecture and interior design firm."
        />
        <meta property="og:image" content="/twc-b.png" />
        <meta
          property="og:url"
          content="https://twc-architects-portfolio.vercel.app/"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TWC Architects" />
        <meta
          name="twitter:description"
          content="A modern architecture and interior design firm."
        />
        <meta name="twitter:image" content="/twc-b.png" />
      </head>
      <body className="font-sans antialiased bg-white min-h-screen flex flex-col">
        <Toaster position="top-center" />
        <Navbar />
        <main className="pt-12 pb-8 md:pt-20 flex-1">
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
