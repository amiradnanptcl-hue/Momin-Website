"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Where to know more about ATOSHI?",
    a: "You can visit our official website, read our White Paper and Blue Paper, or join our community channels on Telegram, Twitter, and Facebook for the latest updates.",
  },
  {
    q: "What is ATOS?",
    a: "ATOS is the native cryptocurrency of the ATOSHI blockchain network. It aims to be a global currency with low transaction fees, instant international payments, and a limited supply of 10 billion tokens.",
  },
  {
    q: "How can you make money from ATOSHI?",
    a: "You can earn ATOS through community mining using the ATOSHI app, watching videos on DeTok, playing games, and participating in the ecosystem. You can also buy and sell ATOS on supported exchanges.",
  },
  {
    q: "How does ATOSHI increase its value?",
    a: "Through a five-pillar strategy: community growth, investment & buyback mechanism, merchant adoption, ecosystem expansion, and building hard asset backing for the token.",
  },
  {
    q: "What are the main steps of ATOSHI now?",
    a: "ATOSHI is currently focused on expanding its application ecosystem (ATOSHI App, DeTok, Gaming, CoinSwap, Wallet, Meta), growing its user base beyond 15 million, and strengthening merchant adoption.",
  },
  {
    q: "What is the next 10 years plan for ATOSHI?",
    a: "ATOSHI plans to establish itself as a major international cryptocurrency with widespread merchant acceptance, develop its IMFO (International Monetary Fund Organization) concept, and achieve mainstream blockchain adoption.",
  },
  {
    q: "What is the use of ATOS?",
    a: "ATOS can be used for paying transaction fees on the network, purchasing goods and services from partner merchants, trading on exchanges, issuing tokens on the ATOSHI blockchain, and in-app purchases across the ecosystem.",
  },
  {
    q: "How to get some ATOS and Force?",
    a: "Download the ATOSHI app to mine ATOS daily. You can also earn by watching videos on DeTok, playing ATOSHI games, or purchasing ATOS on supported exchanges like CoinSwap.",
  },
  {
    q: "What is IMFO?",
    a: "IMFO (International Monetary Fund Organization) is ATOSHI's vision for a decentralized global monetary system that provides currency issuance and financial services through blockchain technology.",
  },
  {
    q: "Why we need IMFO?",
    a: "Traditional international monetary systems have limitations including slow transfers, high fees, and centralized control. IMFO aims to solve these problems through decentralized blockchain-based solutions.",
  },
  {
    q: "What is the relationship between IMFO, ATOS and ATOSHI?",
    a: "ATOSHI is the blockchain platform, ATOS is the native cryptocurrency token, and IMFO is the broader vision for a decentralized international monetary organization built on top of the ATOSHI network.",
  },
  {
    q: "Are there any conflicts with countries who issue their own currencies?",
    a: "ATOSHI aims to complement, not replace, national currencies. Like gold or Bitcoin, it provides an alternative store of value and medium of exchange for international transactions.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-light py-28 md:py-36 px-6 md:px-20" style={{ background: "#FAFAFA" }}>
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-[#F5821F]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#F5821F]" style={{ fontFamily: "'DM Sans', sans-serif" }}>Support</span>
            <div className="w-10 h-[2px] bg-[#F5821F]" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#111]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            FAQ
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03, duration: 0.3 }}
              viewport={{ once: true }}
              className="border border-gray-100 rounded-xl overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer bg-transparent border-none hover:bg-gray-50/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    openIndex === i ? "bg-[#F5821F]" : "bg-[#F5821F]/10"
                  }`}>
                    <ChevronDown
                      size={12}
                      className={`transition-all duration-300 ${
                        openIndex === i ? "rotate-180 text-white" : "text-[#F5821F]"
                      }`}
                    />
                  </div>
                  <span
                    className="text-sm font-medium text-[#111]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {faq.q}
                  </span>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-5 pb-5 pl-14">
                      <p
                        className="text-sm text-[#666] leading-relaxed"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* More button */}
        <div className="text-center mt-8">
          <button className="px-6 py-2.5 rounded-full border border-[#F5821F]/30 text-[#F5821F] text-sm font-medium hover:bg-[#F5821F]/5 transition cursor-pointer bg-transparent">
            + More
          </button>
        </div>
      </div>
    </section>
  );
}
