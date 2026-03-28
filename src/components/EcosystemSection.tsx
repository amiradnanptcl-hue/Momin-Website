"use client";
import { motion } from "framer-motion";
import { Smartphone, Video, Gamepad2, Wallet, Gem, ArrowRight } from "lucide-react";

const appDetails = [
  {
    icon: Smartphone,
    name: "ATOSHI App",
    badge: "LIVE",
    tagline: "Blockchain Empowering Social Game E-commerce",
    desc: "ATOSHI APP takes the form of blockchain empowering social game e-commerce. The daily activation peak exceeds 9.6 million times. The daily payment in the mall exceeds 40,000. The daily active user peak exceeds one million. It integrates Tmall, Taobao, JD.com, etc. The platform provides users with discounts and conveniences in shopping, dining, leisure and entertainment and life services.",
    gradient: "from-[#F5821F] to-[#FFB347]",
    download: true,
  },
  {
    icon: Video,
    name: "DeTok",
    badge: "LIVE",
    tagline: "Swipe Videos, Earn Cryptos",
    desc: "DeTok is a decentralized short video platform built on ATOSHI blockchain. Users can create, share, and earn from short videos. Holders of ATOS can become video reviewers and share the revenue from reviewed videos. We currently have more than 10 million users. The advertising revenue in short videos has great potential for growth.",
    gradient: "from-[#FF6B6B] to-[#ee5a24]",
    download: true,
  },
];

const otherApps = [
  {
    icon: Gamepad2,
    name: "ATOSHI Game",
    desc: "A variety of games for relaxation and fun. Users can get free ATOS by playing games. If 1% of users contribute 1 dollar a day, the income can reach more than 100,000 dollars a day.",
    gradient: "from-[#4834d4] to-[#686de0]",
  },
  {
    icon: Wallet,
    name: "ATOSHI Wallet",
    desc: "A secure and convenient digital asset management tool with state-of-the-art encryption technology. Create your own wallet, obtain a unique private key, and protect your assets with a clean, intuitive interface.",
    gradient: "from-[#F5821F] to-[#FFD700]",
  },
  {
    icon: Gem,
    name: "ATOSHI Meta",
    desc: "A next-generation digital collectibles app for collecting, appreciating, and sharing digital creative works. Each digital collectible possesses a unique ownership certificate on the blockchain.",
    gradient: "from-[#6c5ce7] to-[#a29bfe]",
  },
];

export default function EcosystemSection() {
  return (
    <section id="apps" className="section-light py-28 md:py-36 px-6 md:px-20" style={{ background: "#FAFAFA" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-[#F5821F]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#F5821F]" style={{ fontFamily: "'DM Sans', sans-serif" }}>Ecosystem</span>
            <div className="w-10 h-[2px] bg-[#F5821F]" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#111]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Applications
          </h2>
          <p className="text-base text-[#666] mt-4 max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Realized application scenarios powering the ATOSHI ecosystem
          </p>
        </div>

        {/* Main Apps - Full Width Cards */}
        <div className="space-y-8 mb-20">
          {appDetails.map((app, i) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500`}
            >
              {/* Image placeholder */}
              <div className={`w-full md:w-2/5 h-64 md:h-auto bg-gradient-to-br ${app.gradient} flex items-center justify-center relative overflow-hidden min-h-[280px]`}>
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                  backgroundSize: "24px 24px",
                }} />
                <app.icon size={72} className="text-white/80" />
              </div>

              {/* Content */}
              <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-[#111]" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {app.name}
                  </h3>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-green-100 text-green-700 tracking-wider">
                    {app.badge}
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#F5821F] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {app.tagline}
                </p>
                <p className="text-sm text-[#666] leading-relaxed mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {app.desc}
                </p>
                {app.download && (
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#F5821F] text-sm font-semibold no-underline hover:gap-3 transition-all"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Download
                    <ArrowRight size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Apps */}
        <div>
          <h3 className="text-xl font-bold text-[#111] mb-8 text-center" style={{ fontFamily: "'Syne', sans-serif" }}>
            Other Active Applications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherApps.map((app, i) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#F5821F]/20 hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${app.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <app.icon size={26} className="text-white" />
                </div>
                <h4 className="text-lg font-bold text-[#111] mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {app.name}
                </h4>
                <p className="text-sm text-[#666] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {app.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
