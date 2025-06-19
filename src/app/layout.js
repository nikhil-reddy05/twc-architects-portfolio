import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lexend_Mega } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next";

const lexendMega = Lexend_Mega({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lexend-mega",
});

export const metadata = {
  title: "TWC Architects",
  description: "The White Walls Company Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lexendMega.variable}>
      <body className="font-sans antialiased bg-white min-h-screen flex flex-col">
        <Toaster position="top-center" />
        <Navbar />
        <main className="pt-12 pb-8 md:pt-20 flex-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
            <SpeedInsights />
          </div>
        </main>
        <Footer className="bottom-0 felx-2" />
      </body>
    </html>
  );
}
