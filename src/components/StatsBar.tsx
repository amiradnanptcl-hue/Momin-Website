"use client";
import { motion } from "framer-motion";

const stats = [
  { num: "15,012,676", label: "Total Users" },
  { num: "0.04636", label: "Price (USDT)" },
  { num: "$4.636B", label: "Market Cap" },
  { num: "44 Years", label: "Mine-Out Estimate" },
];

export default function StatsBar() {
  return (
    <div
      className="py-20 px-6 md:px-14"
      style={{
        background: "linear-gradient(to bottom, #0A0E1A, #FAFAFA)",
        minHeight: "200px",
      }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <span
              className="font-bold text-3xl md:text-4xl text-[#F5821F]"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {s.num}
            </span>
            <span
              className="text-sm text-white/60 mt-2"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {s.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
