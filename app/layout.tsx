import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ÇELTUR | Yalova'da Doğayla İç İçe Restoran ve Alabalık Tesisi",
  description: "Yalova'nın doğa harikası köşesinde şelale, akarsu, gölet eşliğinde alabalık, kuzu çevirme, kahvaltı ve kamp deneyimi. Düğün, nişan ve özel gün organizasyonları.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
