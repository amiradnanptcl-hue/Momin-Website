"use client";
import { motion } from "framer-motion";
import { BarChart3, CheckCircle2, Clock, Pickaxe, Timer } from "lucide-react";

const tokenStats = [
  {
    icon: CheckCircle2,
    label: "Total Verified ATOS",
    value: "1,209,949,468,928",
    color: "#F5821F",
  },
  {
    icon: Clock,
    label: "Total Verifying ATOS",
    value: "2,168,227,523,954",
    color: "#FFD700",
  },
  {
    icon: Pickaxe,
    label: "Un-mined ATOS",
    value: "6,621,823,007,116",
    color: "#00D4FF",
  },
  {
    icon: Timer,
    label: "Expected Mine-Out",
    value: "44 Years",
    color: "#a78bfa",
  },
];

export default function TokenDataSection() {
  return (
    <section id="token-data" className="section-dark bg-[#0A0E1A] py-28 md:py-36 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-[#F5821F]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#F5821F]" style={{ fontFamily: "'DM Sans', sans-serif" }}>On-Chain Data</span>
            <div className="w-10 h-[2px] bg-[#F5821F]" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Token Data
          </h2>
          <p className="text-base text-white/40 mt-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Verified ATOS token metrics in real-time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white/[0.03] rounded-2xl border border-white/5 p-8 relative overflow-hidden min-h-[320px]"
          >
            {/* Chart header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <BarChart3 size={18} className="text-[#F5821F]" />
                <span className="text-sm font-semibold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Mined vs Buyback Tokens
                </span>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00D4FF]" />
                  <span className="text-[10px] text-white/40">Mined Token</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F5821F]" />
                  <span className="text-[10px] text-white/40">Buyback Token</span>
                </div>
              </div>
            </div>

            {/* Simplified chart visualization */}
            <div className="flex items-end gap-1 h-48">
              {Array.from({ length: 40 }).map((_, i) => {
                const h1 = 30 + Math.sin(i * 0.4) * 25 + Math.random() * 20;
                const h2 = 20 + Math.cos(i * 0.3) * 15 + Math.random() * 15;
                return (
                  <div key={i} className="flex-1 flex flex-col gap-0.5 items-center">
                    <div
                      className="w-full rounded-sm bg-[#00D4FF]/60"
                      style={{ height: `${h1}%` }}
                    />
                    <div
                      className="w-full rounded-sm bg-[#F5821F]/60"
                      style={{ height: `${h2}%` }}
                    />
                  </div>
                );
              })}
            </div>

            {/* Glow effect */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-[#F5821F]/5 blur-3xl" />
          </motion.div>

          {/* Stats Cards */}
          <div className="space-y-4">
            {tokenStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/[0.03] rounded-xl border border-white/5 p-5 hover:border-white/10 transition-colors group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <stat.icon size={14} style={{ color: stat.color }} />
                  <span className="text-[11px] text-white/40 uppercase tracking-wider" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {stat.label}
                  </span>
                </div>
                <span
                  className="text-xl md:text-2xl font-bold text-white block"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {stat.value}
                </span>
              </motion.div>
            ))}

            {/* Check Assets CTA */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full py-3 rounded-xl bg-[#F5821F] text-white text-sm font-semibold cursor-pointer border-none hover:bg-[#FF6B00] transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Check my assets
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
