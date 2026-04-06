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
  title: "Momin Ali — Certified iPhone Technician",
  description: "Level 1 & 2 Certified Apple Device Repair Specialist from iPhone Fix Lab, Lahore. Screen repair, micro-soldering, board-level diagnostics.",
  openGraph: {
    title: "Momin Ali — Certified iPhone Technician",
    description: "Level 1 & 2 Certified Apple Device Repair Specialist from iPhone Fix Lab, Lahore.",
    images: [{ url: "/momin/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
    url: "https://mominali.tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Momin Ali — Certified iPhone Technician",
    description: "Level 1 & 2 Certified Apple Device Repair Specialist from iPhone Fix Lab, Lahore.",
    images: ["/momin/og-image.jpg"],
  },
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
