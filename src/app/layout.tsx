import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { norwester } from './fonts';

const inter = Inter({
  subsets: ["latin"],
});

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
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
