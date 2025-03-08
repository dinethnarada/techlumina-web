import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { norwester } from './fonts';
import PageTransition from '@/components/PageTransition';

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
    <html lang="en" className={norwester.variable}>
      <body className="font-norwester antialiased">
        <Navbar />
        <main className="min-h-screen pt-16">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
