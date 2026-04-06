import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Momin Ali — Certified iPhone Technician | Apple Device Repair Specialist",
  description:
    "Level 1 & 2 Certified iPhone Technician from iPhone Fix Lab, Lahore. Expert in micro-soldering, board-level repairs, screen replacements, and all Apple device diagnostics.",
  openGraph: {
    title: "Momin Ali — Certified iPhone Technician",
    description:
      "Level 1 & 2 Certified Apple Specialist from iPhone Fix Training Center, Lahore, Pakistan. Expert in micro-soldering, board-level repairs & all iPhone diagnostics.",
    type: "website",
    url: "https://mominali.tech",
    siteName: "Momin Ali — iPhone Expert",
    images: [
      {
        url: "https://mominali.tech/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Momin Ali — Certified iPhone Technician & Apple Specialist",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Momin Ali — Certified iPhone Technician",
    description:
      "Level 1 & 2 Certified Apple Specialist from iPhone Fix Training Center, Lahore. Expert in micro-soldering, board-level repairs & diagnostics.",
    images: [
      "https://mominali.tech/og-image.jpg",
    ],
  },
  metadataBase: new URL("https://mominali.tech"),
};

export default function MominLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${playfair.variable} ${dmSans.variable} ${jetbrains.variable}`}
    >
      {children}
    </div>
  );
}
