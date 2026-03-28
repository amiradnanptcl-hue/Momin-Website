"use client";
import { motion } from "framer-motion";
import {
  CircleDollarSign,
  Zap,
  Lock,
  ShieldCheck,
  Network,
  FileCode2,
  Map,
  Users,
} from "lucide-react";

const features = [
  {
    icon: CircleDollarSign,
    title: "Low Transaction Fee",
    desc: "Send ATOS anywhere with near-zero fees. Unlike traditional banking, ATOSHI eliminates unnecessary costs.",
  },
  {
    icon: Zap,
    title: "Instant International Payment",
    desc: "Transfer value across borders in seconds, not days. The more users join, the faster the network becomes.",
  },
  {
    icon: Lock,
    title: "Limited Quantity",
    desc: "Only 10 billion ATOS will ever exist. A deflationary model ensures long-term value appreciation.",
  },
  {
    icon: ShieldCheck,
    title: "Transaction Security",
    desc: "Every transaction is cryptographically secured and verified through decentralized consensus.",
  },
  {
    icon: Network,
    title: "Blockchain Decentralized",
    desc: "Fully decentralized operation system. No single entity controls the network — the community does.",
  },
  {
    icon: FileCode2,
    title: "Smart Contract",
    desc: "Issue tokens without coding knowledge. ATOSHI makes smart contracts accessible to everyone.",
  },
  {
    icon: Map,
    title: "Mapping Mechanism",
    desc: "Unique token mapping ensures transparent and traceable distribution across the entire network.",
  },
  {
    icon: Users,
    title: "More Users, More Frozen",
    desc: "As the community grows, more ATOS gets frozen — creating natural scarcity and value increase.",
  },
];

export default function WhySection() {
  return (
    <section
      id="why"
      className="section-light"
      style={{ background: "#FAFAFA", color: "#1A1A1A" }}
    >
      <div className="py-28 md:py-36 px-6 md:px-20 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-[#F5821F]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#F5821F]" style={{ fontFamily: "'DM Sans', sans-serif" }}>Core Features</span>
            <div className="w-10 h-[2px] bg-[#F5821F]" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#111]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Why ATOSHI?
          </h2>
        </div>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-base text-[#666] max-w-2xl mx-auto mb-16 leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          ATOSHI aims to be a cryptocurrency used between countries. Based on Friedrich Hayek&apos;s &quot;The De-nationalization of Money,&quot; we believe currency should be issued by blockchain technology and controlled by the people of the world.
        </motion.p>

        {/* 4x2 Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#F5821F]/20 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFF3E6] to-[#FFE4CC] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={22} className="text-[#F5821F]" />
              </div>
              <h3
                className="text-base font-bold text-[#111] mb-2"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {feature.title}
              </h3>
              <p
                className="text-sm text-[#888] leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
