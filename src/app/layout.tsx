// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "TheAiValue — Turning AI into Real Value",
    template: "%s — TheAiValue",
  },
  description: "We design, deploy, and operate AI solutions to create new value and automate operations for organizations and individuals.",
  // ✅ Chỉ để những file bạn thực sự có trong /public
  icons: {
    icon: "/favicon.ico",                 // public/favicon.ico
    apple: "/apple-touch-icon.png",       // (tùy chọn) public/apple-touch-icon.png
  },
};

// ✅ chuyển themeColor sang viewport
export const viewport: Viewport = {
  // có thể để 1 màu, hoặc tách theo dark/light
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0B1220" },
    { media: "(prefers-color-scheme: dark)",  color: "#0B1220" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
