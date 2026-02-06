import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Michael Xu - Health AI Researcher",
  description: "Personal portfolio of Michael Xu, Health AI Researcher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-[#050505] text-white min-h-screen`}
      >
        <div className="ambient-glow" />
        <Navbar />
        <div className="relative z-10 pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
