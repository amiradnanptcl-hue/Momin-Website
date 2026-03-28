"use client";

import { Web3MediaHero } from "@/components/ui/web3media-hero";
import { Play, ArrowRight, Info } from "lucide-react";
import { motion } from "framer-motion";

export default function Web3MediaHeroDemo() {
  return (
    <Web3MediaHero
      logo="ATOSHI Blockchain"
      navigation={[]}
      title="Little Atoshi Can Light Up"
      highlightedText="The World"
      subtitle="Join 15M+ users in the ATOSHI ecosystem. A cryptocurrency built for the people — zero fees, instant international payments, and blockchain-powered community mining."
      ctaButton={{
        label: "Start Mining",
        onClick: () => console.log("Start Mining clicked"),
      }}
    >
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-5xl"
          style={{ gap: "28px" }}
        >
          {/* 3D Animated Title */}
          <h1
            className="hero-3d-title"
            style={{
              fontFamily: "var(--font-kugile), 'Syne', serif",
              fontWeight: 400,
              fontSize: "clamp(36px, 7vw, 72px)",
              lineHeight: "1.1",
              color: "#FFFFFF",
              letterSpacing: "-0.01em",
              perspective: "800px",
            }}
          >
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, rotateX: 90, y: 40 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: "block",
                transformStyle: "preserve-3d",
                textShadow: "0 4px 30px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              Little Atoshi Can
            </motion.span>
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, rotateX: 90, y: 40 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: "block",
                transformStyle: "preserve-3d",
                textShadow: "0 4px 30px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              Light Up
            </motion.span>
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, rotateX: 90, y: 60, scale: 0.8 }}
              animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: "block",
                background: "linear-gradient(135deg, #F5821F 0%, #FFD700 50%, #F5821F 100%)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontFamily: "var(--font-kugile), 'Syne', serif",
                fontWeight: 400,
                filter: "drop-shadow(0 0 40px rgba(245,130,31,0.4))",
                fontSize: "clamp(48px, 12vw, 140px)",
                transformStyle: "preserve-3d",
                animation: "shimmer 3s ease-in-out infinite",
              }}
            >
              The World
            </motion.span>
          </h1>

          {/* Mining Made Simple tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(12px, 2vw, 16px)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            Mining Made Simple{" "}
            <span style={{ color: "rgba(245,130,31,0.6)", margin: "0 8px" }}>·</span>{" "}
            Powered by Community
          </motion.p>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(14px, 1.8vw, 17px)",
              lineHeight: "1.7",
              color: "rgba(136,153,187,0.9)",
              maxWidth: "600px",
            }}
          >
            A cryptocurrency built for the people — zero fees, instant international payments, and blockchain-powered community mining for 15M+ users worldwide.
          </p>

          {/* Video Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-6 items-center flex-wrap justify-center"
          >
            <button className="flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-transparent border-none cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-[#F5821F]/20 border border-[#F5821F]/40 flex items-center justify-center group-hover:bg-[#F5821F]/30 transition">
                <Play size={14} className="text-[#F5821F] ml-0.5" />
              </div>
              <span className="text-sm font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>ATOSHI &amp; CEO</span>
            </button>
            <button className="flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-transparent border-none cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-[#00D4FF]/20 border border-[#00D4FF]/40 flex items-center justify-center group-hover:bg-[#00D4FF]/30 transition">
                <Play size={14} className="text-[#00D4FF] ml-0.5" />
              </div>
              <span className="text-sm font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>What is ATOS Coin?</span>
            </button>
          </motion.div>

          {/* Inline Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex gap-8 md:gap-12 items-center flex-wrap justify-center mt-2"
          >
            {[
              { num: "15,013,566", label: "Total Users" },
              { num: "0.04721", label: "Price of ATOS", suffix: " USDT" },
              { num: "4,721,000,000", label: "Market Cap", prefix: "$", suffix: " USDT" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <span
                  className="text-lg md:text-xl font-bold text-[#F5821F]"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {stat.prefix}{stat.num}
                </span>
                <p className="text-[10px] text-white/40 mt-1 uppercase tracking-wider" style={{ fontFamily: "'DM Sans', sans-serif" }}>{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Expected reduction */}
          <p className="text-xs text-white/30" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Expected next 1% reduction date: 2026-04-07
          </p>

          {/* Triple CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex gap-3 flex-wrap justify-center mt-2"
          >
            <motion.a
              whileHover={{ y: -3, boxShadow: "0 0 60px rgba(245,130,31,0.6)" }}
              href="#"
              className="px-8 py-3.5 rounded-full flex items-center gap-2 no-underline"
              style={{
                background: "linear-gradient(135deg, #F5821F, #FF6B00)",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                boxShadow: "0 0 40px rgba(245,130,31,0.35)",
              }}
            >
              Buy &amp; Sell ATOS
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="#"
              className="px-8 py-3.5 rounded-full flex items-center gap-2 border-2 border-white/20 text-white no-underline hover:bg-white/5 transition"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              <ArrowRight size={14} />
              Mine ATOS
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="#"
              className="px-8 py-3.5 rounded-full flex items-center gap-2 text-white/60 no-underline hover:text-white hover:bg-white/5 transition"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              <Info size={14} />
              INFO
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* CSS Keyframes for shimmer animation */}
      <style jsx global>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </Web3MediaHero>
  );
}
