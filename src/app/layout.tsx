import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { norwester, eightgon } from './fonts';
import PageTransition from '@/components/PageTransition';
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: 'Tech Lumina',
  description: "Crafting Tomorrow's Websites, Today",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${eightgon.variable}`}>
      <body className="font-eightgon antialiased bg-navy text-light-gray">
        <Navbar />
        <main className="min-h-screen pt-16">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
