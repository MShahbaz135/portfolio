import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ThemeScript from "@/components/ThemeScript";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://mshahbaz.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Muhammad Shahbaz — Software Engineer",
  description:
    "Software Engineer turning complex systems into products people rely on. Angular, React, Node.js, TypeScript.",
  keywords: [
    "Software Engineer",
    "Full Stack Engineer",
    "Angular",
    "React",
    "Node.js",
    "TypeScript",
    "Real-time systems",
    "Muhammad Shahbaz",
  ],
  authors: [{ name: "Muhammad Shahbaz" }],
  openGraph: {
    title: "Muhammad Shahbaz — Software Engineer",
    description:
      "Software Engineer turning complex systems into products people rely on.",
    url: siteUrl,
    siteName: "Muhammad Shahbaz",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Shahbaz — Software Engineer",
    description:
      "Software Engineer turning complex systems into products people rely on.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <ThemeScript />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
