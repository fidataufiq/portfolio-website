import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Fida Taufiq Imazuddin | Portfolio",
    template: "%s | Fida Taufiq Imazuddin",
  },

  description: "Personal portfolio of Fida Taufiq Imazuddin, showcasing projects and explorations in technology, web development, and UI/UX design.",

  keywords: ["Fida Taufiq Imazuddin", "Fida Portfolio", "Portfolio", "Web Developer", "Frontend Developer", "UI UX Designer", "Web Design", "Next.js", "React", "Technology"],

  authors: [
    {
      name: "Fida Taufiq Imazuddin",
    },
  ],

  creator: "Fida Taufiq Imazuddin",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Fida Taufiq Imazuddin | Portfolio",
    description: "Projects and explorations in technology, web development, and UI/UX design.",
    type: "website",
    images: [
      {
        url: "/public/Create a profile photo with a professional photo studio background can use a gray background that is... (1) (1)-Photoroom.png",
        width: 1200,
        height: 630,
        alt: "Fida Taufiq Imazuddin Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Fida Taufiq Imazuddin | Portfolio",
    description: "Projects and explorations in technology, web development, and UI/UX design.",
    images: ["/public/Create a profile photo with a professional photo studio background can use a gray background that is... (1) (1)-Photoroom.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Navbar />

          <main className="flex-1">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
