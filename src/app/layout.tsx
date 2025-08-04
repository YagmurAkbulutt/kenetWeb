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
  title: "Kenet Mimarlık | Modern Mimari Tasarım",
  description: "Kenet Mimarlık, konut ve ticari projeler için yenilikçi, sürdürülebilir mimari tasarım çözümlerinde uzmanlaşmıştır.",
  keywords: "mimarlık, mimari tasarım, modern mimari, sürdürülebilir tasarım, bina tasarımı",
  authors: [{ name: "Kenet Mimarlık" }],
  openGraph: {
    title: "Kenet Mimarlık | Modern Mimari Tasarım",
    description: "Yenilikçi ve sürdürülebilir mimari tasarım çözümleri",
    url: "https://kenet-architecture.com",
    siteName: "Kenet Mimarlık",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenet Mimarlık | Modern Mimari Tasarım",
    description: "Yenilikçi ve sürdürülebilir mimari tasarım çözümleri",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
