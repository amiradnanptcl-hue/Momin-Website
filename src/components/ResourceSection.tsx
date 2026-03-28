"use client";
import { motion } from "framer-motion";
import { Play, ExternalLink, FileText, BookOpen } from "lucide-react";

const videos = [
  { title: "ATOSHI CEO Leo Mars participated in a charity event", thumbnail: "🎬" },
  { title: "Global Dubai 2018 World Virtual Currency Forum", thumbnail: "🌍" },
  { title: "ATOSHI can light the world up", thumbnail: "💡" },
  { title: "ATOSHI & CEO Brief Introduction", thumbnail: "👤" },
  { title: "BTC will grow to one million", thumbnail: "📈" },
  { title: "What will be G20 Summit", thumbnail: "🏛️" },
];

const news = [
  {
    title: "Leomars Liao CEO of ATOSHI attended the Digital Economy Research Conference",
    tag: "Event",
  },
  {
    title: "ATOSHI Bluepaper Written by CEO Leomars Released",
    tag: "Announcement",
  },
  {
    title: "ATOSHI CEO Leo Mars participated in an event to care for left-behind children",
    tag: "Charity",
  },
];

export default function ResourceSection() {
  return (
    <section id="resource" className="section-dark bg-[#0A0E1A] py-28 md:py-36 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-[#F5821F]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#F5821F]" style={{ fontFamily: "'DM Sans', sans-serif" }}>Resources</span>
            <div className="w-10 h-[2px] bg-[#F5821F]" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Resource Center
          </h2>
        </div>

        {/* Documents Row */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <a href="#" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-[#F5821F] hover:border-[#F5821F]/30 transition-all no-underline text-sm">
            <FileText size={14} />
            White Paper
          </a>
          <a href="#" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-[#00D4FF] hover:border-[#00D4FF]/30 transition-all no-underline text-sm">
            <BookOpen size={14} />
            Blue Paper
          </a>
          <a href="#" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-[#FFD700] hover:border-[#FFD700]/30 transition-all no-underline text-sm">
            <ExternalLink size={14} />
            Download
          </a>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {videos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              viewport={{ once: true }}
              className="group relative aspect-video bg-white/[0.03] rounded-xl border border-white/5 overflow-hidden cursor-pointer hover:border-[#F5821F]/20 transition-all"
            >
              {/* Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0A0E1A] to-[#111830]">
                <span className="text-4xl">{video.thumbnail}</span>
              </div>

              {/* Play overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                <div className="w-12 h-12 rounded-full bg-[#F5821F]/90 flex items-center justify-center">
                  <Play size={18} className="text-white ml-0.5" />
                </div>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-xs text-white/80 line-clamp-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {video.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* News */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2" style={{ fontFamily: "'Syne', sans-serif" }}>
            <div className="w-1 h-5 bg-[#F5821F] rounded-full" />
            News
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {news.map((item, i) => (
              <motion.a
                key={i}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="group block bg-white/[0.03] rounded-xl border border-white/5 overflow-hidden no-underline hover:border-[#F5821F]/20 transition-all"
              >
                {/* Image placeholder */}
                <div className="h-40 bg-gradient-to-br from-[#111830] to-[#0A0E1A] flex items-center justify-center">
                  <FileText size={32} className="text-white/10" />
                </div>
                <div className="p-5">
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#F5821F]/10 text-[#F5821F] uppercase tracking-wider">
                    {item.tag}
                  </span>
                  <p className="text-sm text-white/70 mt-3 leading-relaxed group-hover:text-white transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {item.title}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
