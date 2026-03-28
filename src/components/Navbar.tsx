"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#hero" },
  { label: "Application", href: "#apps" },
  { label: "Resource", href: "#resource" },
  { label: "FAQ", href: "#faq" },
  { label: "Team", href: "#team" },
  { label: "Join", href: "#join" },
  { label: "Invest", href: "#invest" },
  { label: "Testnet", href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-[#0A0E1A]/90 border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-3">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 no-underline">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#F5821F] to-[#FFD700] flex items-center justify-center">
              <span className="text-white font-bold text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>A</span>
            </div>
            <div className="flex flex-col">
              <span
                className="font-bold text-base tracking-[0.2em] uppercase text-white leading-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                ATOSHI
              </span>
              <span className="text-[9px] text-white/40 tracking-[0.15em] uppercase leading-tight">Blockchain</span>
            </div>
          </a>

          {/* Center links */}
          <ul className="hidden lg:flex items-center gap-1 list-none">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`text-xs font-medium tracking-wide no-underline transition-all duration-200 px-3 py-1.5 rounded-full ${
                    activeSection === link.href.replace("#", "")
                      ? "text-[#F5821F] bg-[#F5821F]/10"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* Language */}
            <span className="hidden md:flex items-center gap-1 text-xs text-white/50 cursor-pointer hover:text-white/70 transition">
              EN
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
            </span>

            {/* CTA */}
            <a
              href="#"
              className="bg-gradient-to-r from-[#F5821F] to-[#FF6B00] text-white px-5 py-2 rounded-full text-xs font-semibold no-underline transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 tracking-wider uppercase"
            >
              Buy &amp; Sell ATOS
            </a>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden text-white p-1 cursor-pointer bg-transparent border-none"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-72 bg-[#0A0E1A] border-l border-white/5 z-[70] p-8"
            >
              <button
                className="absolute top-6 right-6 text-white/60 hover:text-white cursor-pointer bg-transparent border-none"
                onClick={() => setMobileOpen(false)}
              >
                <X size={20} />
              </button>
              <div className="mt-12 flex flex-col gap-1">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-sm font-medium py-3 px-4 rounded-lg no-underline transition-all ${
                      activeSection === link.href.replace("#", "")
                        ? "text-[#F5821F] bg-[#F5821F]/10"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <a
                    href="#"
                    className="block text-center bg-gradient-to-r from-[#F5821F] to-[#FF6B00] text-white px-6 py-3 rounded-full text-sm font-semibold no-underline"
                  >
                    Buy &amp; Sell ATOS
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
