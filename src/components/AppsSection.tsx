"use client";
import { motion } from "framer-motion";

const apps = [
  {
    gradient: "linear-gradient(135deg, #F5821F, #FFB347)",
    icon: "⛏️",
    name: "ATOSHI",
    badge: "LIVE" as const,
    desc: "Mobile mining made simple. Mine ATOS by simply using the app daily.",
  },
  {
    gradient: "linear-gradient(135deg, #FF6B6B, #ee5a24)",
    icon: "🎬",
    name: "DeTok",
    badge: "LIVE" as const,
    desc: "Swipe videos, earn cryptos. Short-form video platform with real rewards.",
  },
  {
    gradient: "linear-gradient(135deg, #4834d4, #686de0)",
    icon: "🎮",
    name: "ATOSHI Gaming",
    badge: "LIVE" as const,
    desc: "Massive games provided. Play-to-earn gaming hub with ATOS rewards.",
  },
  {
    gradient: "linear-gradient(135deg, #00D4FF, #0097e6)",
    icon: "🔄",
    name: "Coinswap",
    badge: "LIVE" as const,
    desc: "Decentralized exchange for seamless token swaps within the ecosystem.",
  },
];

const badgeStyles: Record<string, string> = {
  LIVE: "bg-green-500/20 text-green-400 border border-green-500/30",
  BETA: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
  SOON: "bg-gray-500/20 text-gray-400 border border-gray-500/30",
};

export default function AppsSection() {
  return (
    <section
      id="mine"
      className="section-dark"
      style={{ background: "#0A0E1A" }}
    >
      <div className="py-28 md:py-36 px-6 md:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-[#F5821F]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#F5821F]" style={{ fontFamily: "'DM Sans', sans-serif" }}>Mining Apps</span>
            <div className="w-10 h-[2px] bg-[#F5821F]" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            How to Mine ATOS?
          </h2>
          <p className="text-base text-white/50 mt-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Multiple ways to earn ATOS through our app ecosystem
          </p>
        </div>

        {/* App Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {apps.map((app, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group rounded-2xl overflow-hidden bg-white/5 border border-white/5 hover:border-[#F5821F]/20 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-500"
            >
              {/* Top Gradient */}
              <div
                className="h-36 flex items-center justify-center relative overflow-hidden"
                style={{ background: app.gradient }}
              >
                <span className="text-5xl group-hover:scale-110 transition-transform duration-500">{app.icon}</span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-white text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {app.name}
                  </span>
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${badgeStyles[app.badge]}`}
                  >
                    {app.badge}
                  </span>
                </div>
                <p className="text-xs text-white/40 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {app.desc}
                </p>
                <button className="mt-4 text-[#F5821F] text-xs font-semibold bg-[#F5821F]/10 px-4 py-1.5 rounded-full hover:bg-[#F5821F]/20 transition cursor-pointer border-none">
                  Enter
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
