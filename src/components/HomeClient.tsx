"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import BlockchainBlastIntro from "@/components/BlockchainBlastIntro";

// Lazy-load ALL site sections — they only mount AFTER intro finishes
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const Web3MediaHeroDemo = dynamic(() => import("@/components/ui/web3media-hero.demo"), { ssr: false });
const StatsBar = dynamic(() => import("@/components/StatsBar"), { ssr: false });
const TokenDataSection = dynamic(() => import("@/components/TokenDataSection"), { ssr: false });
const WhySection = dynamic(() => import("@/components/WhySection"), { ssr: false });
const ValueSection = dynamic(() => import("@/components/ValueSection"), { ssr: false });
const AppsSection = dynamic(() => import("@/components/AppsSection"), { ssr: false });
const EcosystemSection = dynamic(() => import("@/components/EcosystemSection"), { ssr: false });
const ResourceSection = dynamic(() => import("@/components/ResourceSection"), { ssr: false });
const FAQSection = dynamic(() => import("@/components/FAQSection"), { ssr: false });
const TeamSection = dynamic(() => import("@/components/TeamSection"), { ssr: false });
const CTASection = dynamic(() => import("@/components/CTASection"), { ssr: false });
const InvestSection = dynamic(() => import("@/components/InvestSection"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function HomeClient() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      <BlockchainBlastIntro onComplete={() => setIntroComplete(true)} />
      {introComplete && (
        <>
          <Navbar />
          <Web3MediaHeroDemo />
          <StatsBar />
          <TokenDataSection />
          <WhySection />
          <ValueSection />
          <AppsSection />
          <EcosystemSection />
          <ResourceSection />
          <FAQSection />
          <TeamSection />
          <CTASection />
          <InvestSection />
          <Footer />
        </>
      )}
    </>
  );
}
