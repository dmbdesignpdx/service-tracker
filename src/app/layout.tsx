// Theirs
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { PropsWithChildren } from "react";

// Ours
import "./globals.css";
import { MetaData, Url } from "@/data/meta";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  adjustFontFallback: false,
  fallback: ["serif"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  adjustFontFallback: false,
  fallback: ["monospace"],
});

export const metadata: Metadata = {
  title: MetaData.TITLE,
  description: MetaData.DESCRIPTION,
  metadataBase: Url.BASE,
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      className={cn(geistSans.variable, geistMono.variable)}
    >
      <body>{children}</body>
    </html>
  );
}
