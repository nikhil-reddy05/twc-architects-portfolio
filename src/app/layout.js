import "./globals.css";
import Navbar from "@/components/Navbar";
import { Lexend_Mega } from "next/font/google";

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
      <body className="font-sans antialiased bg-white">
        <Navbar />
        <main className="pt-20 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
