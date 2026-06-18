import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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

const siteUrl = "https://muhammadshahbaz.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Muhammad Shahbaz — Full Stack Engineer",
  description:
    "Full Stack Engineer specializing in real-time, data-intensive web applications. Angular, React, Node.js, TypeScript.",
  keywords: [
    "Full Stack Engineer",
    "Software Engineer",
    "Angular",
    "React",
    "Node.js",
    "TypeScript",
    "Real-time systems",
    "Muhammad Shahbaz",
  ],
  authors: [{ name: "Muhammad Shahbaz" }],
  openGraph: {
    title: "Muhammad Shahbaz — Full Stack Engineer",
    description:
      "Full Stack Engineer specializing in real-time, data-intensive web applications.",
    url: siteUrl,
    siteName: "Muhammad Shahbaz",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Shahbaz — Full Stack Engineer",
    description:
      "Full Stack Engineer specializing in real-time, data-intensive web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const themeInit = `(function(){try{if(localStorage.getItem('theme')==='light'){document.documentElement.classList.remove('dark');}}catch(e){}})();`;

  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
