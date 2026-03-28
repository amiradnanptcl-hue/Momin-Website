"use client";
import { motion } from "framer-motion";
import { MagnetizeButton } from "@/components/ui/magnetize-button";
import { Rocket, Users, Code, Heart, Flame, ArrowRight } from "lucide-react";

const roles = [
  { label: "The One to Change the World", icon: Rocket, hot: true },
  { label: "Blockchain Geek", icon: Code, hot: true },
  { label: "Business Partners", icon: Users, hot: false },
  { label: "Volunteers", icon: Heart, hot: false },
  { label: "Direct Hire", icon: Flame, hot: false },
];

export default function CTASection() {
  return (
    <section id="join" className="section-light py-28 md:py-36 px-6" style={{ background: "#FAFAFA" }}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-[#F5821F]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#F5821F]" style={{ fontFamily: "'DM Sans', sans-serif" }}>Careers</span>
            <div className="w-10 h-[2px] bg-[#F5821F]" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#111]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            JOIN US
          </h2>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-sm text-[#666] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            &quot;Create a better cryptocurrency for the world.&quot; End financial hegemony with blockchain technology. To create new currency for international transaction is a historic undertaking. ATOSHI aims to be a blockchain technology solution to end the slow and expensive international transfer.
          </p>
        </motion.div>

        {/* CTA with Magnetize Button */}
        <div className="flex justify-center mb-16">
          <MagnetizeButton particleCount={16} className="px-10 py-4 text-sm">
            <span className="flex items-center gap-2">
              <ArrowRight size={16} />
              Join ATOSHI Today
            </span>
          </MagnetizeButton>
        </div>

        {/* Talents Wanted */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-bold text-[#111] text-center mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
            Talents Wanted
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {roles.map((role) => (
              <a
                key={role.label}
                href="#"
                className="group flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-gray-100 no-underline hover:border-[#F5821F]/30 hover:shadow-md transition-all"
              >
                <role.icon size={14} className="text-[#F5821F]" />
                <span className="text-sm text-[#333] group-hover:text-[#F5821F] transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {role.label}
                </span>
                {role.hot && (
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-red-500 text-white">HOT</span>
                )}
              </a>
            ))}
          </div>
          <div className="text-center mt-6">
            <button className="px-6 py-2.5 rounded-full border border-[#F5821F]/30 text-[#F5821F] text-sm font-medium hover:bg-[#F5821F]/5 transition cursor-pointer bg-transparent">
              + More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
