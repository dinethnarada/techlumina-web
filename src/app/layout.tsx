import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { norwester } from './fonts';

export const metadata: Metadata = {
  title: "Tech Lumina - Web Application Development",
  description: "Tech Lumina creates cutting-edge web applications tailored to your business needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={norwester.variable}>
      <body className="font-norwester antialiased">
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
