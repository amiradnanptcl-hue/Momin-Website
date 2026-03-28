"use client";
import { motion } from "framer-motion";
import { Users, TrendingUp, ArrowUpDown, Globe, Gem } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Community Growth",
    date: "2018 - Present",
    content: "Standing on the shoulders of giants, ATOSHI aims to have the advantages of gold and Bitcoin, while minimizing their shortcomings. Value-adding is simple: solve problems one by one.",
    category: "Growth",
    icon: Users,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Investment & Buyback",
    date: "Ongoing",
    content: "Part of the profits from ATOSHI project will be used to invest in various cryptocurrencies, high-potential stocks, real estate, and angel investments. Investment profits buy ATOS back from the market.",
    category: "Investment",
    icon: TrendingUp,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Merchant Adoption",
    date: "In Progress",
    content: "Companies we invest in are required to accept ATOSHI for payment. This creates multi-industry and wide range usage of ATOS, making it a strong currency with limited amount.",
    category: "Adoption",
    icon: ArrowUpDown,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 65,
  },
  {
    id: 4,
    title: "Ecosystem Expansion",
    date: "Growing",
    content: "Like Google investing in many companies, ATOSHI aims to do the same. This forms a multi-industry ecosystem where ATOS becomes a strong currency with real utility.",
    category: "Expansion",
    icon: Globe,
    relatedIds: [3, 5],
    status: "in-progress" as const,
    energy: 50,
  },
  {
    id: 5,
    title: "Hard Asset Backing",
    date: "Vision",
    content: "Bitcoin, Ethereum, Ripple are not supported by physical assets. ATOS aims to be \"hard\" enough — standing on giants' innovations with huge growth potential in development.",
    category: "Value",
    icon: Gem,
    relatedIds: [4, 1],
    status: "pending" as const,
    energy: 30,
  },
];

export default function ValueSection() {
  return (
    <section id="value" className="section-dark bg-[#0A0E1A] py-24 md:py-32 px-6 md:px-20 overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-10 h-[2px] bg-[#F5821F]" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#F5821F]" style={{ fontFamily: "'DM Sans', sans-serif" }}>Value Strategy</span>
          <div className="w-10 h-[2px] bg-[#F5821F]" />
        </div>
        <h2
          className="text-4xl md:text-5xl font-bold text-white"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          How Does ATOSHI Increase Value?
        </h2>
        <p className="text-base text-white/50 mt-4 max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Click on any node to explore our 5-step value growth strategy
        </p>
      </div>

      {/* Orbital Timeline */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <RadialOrbitalTimeline timelineData={timelineData} />
      </motion.div>

      {/* Mobile fallback: simple list */}
      <div className="lg:hidden mt-8 space-y-4 max-w-lg mx-auto">
        {timelineData.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex gap-4 items-start p-4 rounded-xl bg-white/5 border border-white/5"
          >
            <div className="w-10 h-10 rounded-full bg-[#F5821F]/20 flex items-center justify-center shrink-0">
              <item.icon size={18} className="text-[#F5821F]" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                  0{i + 1}. {item.title}
                </span>
                <span className={`text-[9px] px-2 py-0.5 rounded-full font-semibold ${
                  item.status === "completed"
                    ? "bg-[#F5821F]/20 text-[#F5821F]"
                    : item.status === "in-progress"
                    ? "bg-[#FFD700]/20 text-[#FFD700]"
                    : "bg-white/10 text-white/50"
                }`}>
                  {item.status.toUpperCase().replace("-", " ")}
                </span>
              </div>
              <p className="text-xs text-white/50 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {item.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
