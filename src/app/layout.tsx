import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ThemeScript from "@/components/ThemeScript";
import { profile } from "@/data/content";
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

const siteUrl = profile.siteUrl;
const siteTitle = `${profile.name} — ${profile.role}`;
const siteDescription = `${profile.role} turning complex systems into products people rely on.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: `${siteDescription} Angular, React, Node.js, TypeScript.`,
  keywords: [
    "Senior Software Engineer",
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
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Muhammad Shahbaz",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
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
