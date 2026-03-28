"use client";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const achievements = [
  "The Most Innovative CEO of China New Economy",
  "The Excellent Leading Figure in China Blockchain Industry",
  "The Main Speaker Of International Blockchain Conference 2018",
];

const highlights = [
  "October 30, 2019 — Invited to attend the Sustainable Development Forum hosted by former British Prime Minister Gordon Brown.",
  "Started ATOSHI crypto project in middle of 2018. By 2022, ATOSHI had become a star blockchain project with over 8 million users.",
  "ATOSHI expanded into blockchain, online gaming, short videos, online advertisement, online shopping, crypto mining, and more.",
];

export default function TeamSection() {
  return (
    <section id="team" className="section-dark bg-[#0A0E1A] py-28 md:py-36 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-5 bg-[#F5821F] rounded-full" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#F5821F]" style={{ fontFamily: "'DM Sans', sans-serif" }}>Leadership</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            ATOSHI Team
          </h2>
        </div>

        {/* CEO Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-10 bg-white/[0.03] rounded-3xl border border-white/5 p-8 md:p-12"
        >
          {/* Photo placeholder */}
          <div className="shrink-0 flex flex-col items-center">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#F5821F]/20 to-[#00D4FF]/20 border-2 border-[#F5821F]/30 flex items-center justify-center overflow-hidden">
              <div className="w-36 h-36 rounded-full bg-gradient-to-br from-[#111830] to-[#0A0E1A] flex items-center justify-center">
                <span className="text-5xl">👤</span>
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-sm font-bold text-[#F5821F]" style={{ fontFamily: "'Syne', sans-serif" }}>CEO:</p>
              <p className="text-lg font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>Leomars Liao</p>
              <p className="text-xs text-white/40">(Liao Wang)</p>
            </div>
            {/* Social */}
            <div className="flex gap-2 mt-3">
              {["X", "IG", "in", "FB"].map((s) => (
                <a key={s} href="#" className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/30 text-[10px] no-underline transition hover:text-white/60">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div className="flex-1">
            {/* Achievements */}
            <div className="space-y-2 mb-6">
              {achievements.map((a, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Award size={14} className="text-[#FFD700] mt-0.5 shrink-0" />
                  <p className="text-sm text-[#FFD700]/80 italic" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    &quot;{a}&quot;
                  </p>
                </div>
              ))}
            </div>

            <p className="text-sm text-white/60 leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              An influential entrepreneur who wants to empower the world by blockchain technology. He built his business empire from nothing — arriving in Dubai in 2008, establishing his first company Atomic Properties in December 2009, and investing in hundreds of properties across Dubai, China, Turkey, and Europe.
            </p>
            <p className="text-sm text-white/60 leading-relaxed mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Inspired by technology giants like Elon Musk, Jack MA, he invested hugely in Bitcoin, Ethereum, Litecoin. He soon realized that cryptos are the future and started his own crypto project ATOSHI in 2018.
            </p>

            {/* Highlights */}
            <div className="space-y-3 pt-4 border-t border-white/5">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2">
                  <ExternalLink size={10} className="text-[#F5821F] mt-1 shrink-0" />
                  <p className="text-xs text-white/40 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {h}
                  </p>
                </div>
              ))}
            </div>

            <button className="mt-6 px-5 py-2 rounded-full border border-white/10 text-white/50 text-xs hover:text-white hover:border-white/20 transition cursor-pointer bg-transparent">
              + More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
