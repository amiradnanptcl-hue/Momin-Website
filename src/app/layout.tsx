import type { Metadata } from "next";
import { DM_Sans, DM_Mono, Syne } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const kugile = localFont({
  src: "../fonts/Kugile-Regular.ttf",
  variable: "--font-kugile",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ATOSHI Blockchain — Empower The World",
  description: "Join 15M+ users in the ATOSHI community mining ecosystem. Mine ATOS tokens, zero fees, biometric wallet recovery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${dmMono.variable} ${syne.variable} ${kugile.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
