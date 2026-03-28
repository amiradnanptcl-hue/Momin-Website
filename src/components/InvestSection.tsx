"use client";
import { motion } from "framer-motion";
import { Code2, GitBranch, Mail, CheckCircle2 } from "lucide-react";

const investCriteria = [
  "Company's business should have vast potential users.",
  "Company we invest in can accept ATOS for payment with a discount.",
  "Companies have huge growth potential.",
];

const repos = [
  {
    name: "atos-genesis-contract",
    lang: "Python",
    langColor: "#3572A5",
    desc: "A blockchain-based smart contract system that delivers a secure and reliable contract execution environment",
  },
  {
    name: "atos-chain",
    lang: "Go",
    langColor: "#00ADD8",
    desc: "High-performance blockchain infrastructure with modular architecture for rapid DApp deployment",
  },
];

export default function InvestSection() {
  return (
    <section id="invest" className="section-dark bg-[#0A0E1A] py-28 md:py-36 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Open Source */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-[#F5821F]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#F5821F]" style={{ fontFamily: "'DM Sans', sans-serif" }}>Open Source</span>
              <div className="w-10 h-[2px] bg-[#F5821F]" />
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Open Source
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repos.map((repo, i) => (
              <motion.a
                key={repo.name}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group block bg-white/[0.03] rounded-2xl border border-white/5 p-6 no-underline hover:border-[#F5821F]/20 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <GitBranch size={18} className="text-[#F5821F]" />
                  <span className="text-base font-bold text-white group-hover:text-[#F5821F] transition-colors" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {repo.name}
                  </span>
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full border"
                    style={{ color: repo.langColor, borderColor: repo.langColor + "40", backgroundColor: repo.langColor + "10" }}
                  >
                    {repo.lang}
                  </span>
                </div>
                <p className="text-sm text-white/40 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {repo.desc}
                </p>
                <div className="mt-4 flex items-center gap-2 text-[#F5821F] text-xs font-medium">
                  <Code2 size={12} />
                  View Repository
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Angel Investment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-[#FFD700]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#FFD700]" style={{ fontFamily: "'DM Sans', sans-serif" }}>Investment</span>
              <div className="w-10 h-[2px] bg-[#FFD700]" />
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Angel Investment
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-10 bg-white/[0.03] rounded-3xl border border-white/5 p-8 md:p-12">
            <div className="flex-1">
              <p className="text-sm text-white/60 leading-relaxed mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Part of the profits gained from ATOSHI project will be used to invest in various cryptocurrencies, high-potential stocks, real estate, and angel investments.
              </p>
              <p className="text-sm text-white/50 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                We are investing in companies with following characteristics:
              </p>
              <div className="space-y-3 mb-8">
                {investCriteria.map((c, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#FFD700] mt-0.5 shrink-0" />
                    <p className="text-sm text-white/70" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {c}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/30 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                If your company is in these categories, please contact us:
              </p>
              <a
                href="mailto:liao@atoshi.org"
                className="inline-flex items-center gap-2 text-[#F5821F] text-sm font-semibold no-underline hover:text-[#FFD700] transition-colors"
              >
                <Mail size={14} />
                liao@atoshi.org
              </a>
            </div>

            {/* Investment image placeholder */}
            <div className="w-full md:w-80 h-48 md:h-auto rounded-2xl bg-gradient-to-br from-[#FFD700]/10 to-[#F5821F]/10 border border-[#FFD700]/10 flex items-center justify-center min-h-[200px]">
              <div className="text-center">
                <span className="text-5xl block mb-3">🤝</span>
                <p className="text-xs text-white/30" style={{ fontFamily: "'DM Sans', sans-serif" }}>Angel Investment Program</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
