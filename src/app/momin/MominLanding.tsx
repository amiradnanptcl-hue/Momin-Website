"use client";

import React from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Smartphone, Cpu, Wrench, ShieldCheck, Zap, Monitor, Battery, Wifi,
  ChevronDown, ExternalLink, Award, Star, ArrowRight, Instagram, Facebook,
  Globe, MapPin, Phone, Microscope, CircuitBoard, Settings, Send, Music,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { LanguageProvider, useLanguage } from "./LanguageContext";

/* ─────────────── CUSTOM CURSOR ─────────────── */
function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = () => setHovering(true);
    const out = () => setHovering(false);
    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", over);
      el.addEventListener("mouseleave", out);
    });
    return () => {
      window.removeEventListener("mousemove", move);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", over);
        el.removeEventListener("mouseleave", out);
      });
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999] rounded-full bg-white mix-blend-difference transition-transform duration-150"
      style={{
        width: hovering ? 80 : 32,
        height: hovering ? 80 : 32,
        left: pos.x - (hovering ? 40 : 16),
        top: pos.y - (hovering ? 40 : 16),
      }}
    />
  );
}

/* ─────────────── MARQUEE ─────────────── */
function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y-2 border-[#09090B] py-4 bg-[#D2E823]">
      <div className="marquee-track flex gap-12 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="font-['Dela_Gothic_One'] text-2xl md:text-3xl uppercase text-[#09090B] flex items-center gap-12">
            {item} <span className="text-[#09090B]/30">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────── NAV ─────────────── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const links = [
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.expertise"), href: "#expertise" },
    { label: t("nav.certification"), href: "#certification" },
    { label: t("nav.gallery"), href: "#gallery" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-4 right-4 z-50 bg-[#F8F4E8]/90 backdrop-blur-[24px] border-2 border-[#09090B] rounded-xl"
      style={{ boxShadow: "4px 4px 0px 0px #09090B" }}
    >
      <div className="px-5 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <svg viewBox="0 0 170 170" className="w-5 h-5 text-[#09090B]" fill="currentColor">
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.2-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.28 2.13-9.54 3.25-12.8 3.35-4.93.21-9.84-1.96-14.75-6.52-3.13-2.73-7.05-7.41-11.76-14.04-5.05-7.11-9.2-15.36-12.45-24.77-3.47-10.17-5.21-20.01-5.21-29.54 0-10.91 2.36-20.32 7.07-28.2A41.45 41.45 0 0 1 29.2 48.6a39.86 39.86 0 0 1 20.05-5.71c3.92 0 9.06 1.21 15.43 3.59 6.35 2.39 10.43 3.61 12.22 3.61 1.34 0 5.87-1.43 13.56-4.27 7.26-2.63 13.39-3.72 18.41-3.3 13.61 1.1 23.84 6.46 30.62 16.12-12.17 7.38-18.19 17.72-18.07 30.97.11 10.32 3.86 18.91 11.22 25.73 3.34 3.17 7.07 5.62 11.22 7.36-.9 2.61-1.85 5.11-2.86 7.51zM119.11 7.24c0 8.1-2.96 15.66-8.86 22.65-7.12 8.33-15.73 13.13-25.07 12.38a25.21 25.21 0 0 1-.19-3.06c0-7.77 3.38-16.09 9.39-22.89 3-3.44 6.82-6.31 11.45-8.6 4.62-2.26 8.99-3.51 13.1-3.72.12 1.1.18 2.2.18 3.24z" />
          </svg>
          <Wrench size={16} className="text-[#09090B]" strokeWidth={2.5} />
          <span className="font-['Dela_Gothic_One'] text-lg uppercase text-[#09090B]">
            iFix Expert
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-['Space_Grotesk'] font-semibold tracking-wider uppercase text-[#09090B]/70 hover:text-[#09090B] hover:bg-[#D2E823] px-2 py-1 rounded-md transition-all duration-150"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="brutal-btn-acid !py-2 !px-5 !text-[12px] !tracking-widest"
            style={{ boxShadow: "2px 2px 0px 0px #09090B" }}
          >
            Get a Quote
          </a>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Social icons */}
          <div className="hidden sm:flex items-center gap-2">
            <a href="https://wa.me/923120123816" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
               className="w-8 h-8 rounded-lg border-2 border-[#09090B] bg-[#D2E823] flex items-center justify-center text-[#09090B] hover:translate-x-[1px] hover:translate-y-[1px] transition-transform"
               style={{ boxShadow: "2px 2px 0px 0px #09090B" }}>
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            </a>
            <a href="tel:+923120123816" aria-label="Call"
               className="w-8 h-8 rounded-lg border-2 border-[#09090B] bg-[#F8F4E8] flex items-center justify-center text-[#09090B] hover:bg-[#D2E823] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
               style={{ boxShadow: "2px 2px 0px 0px #09090B" }}>
              <Phone size={14} />
            </a>
          </div>
          {/* Lang toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "ur" : "en")}
            className="px-3 py-1.5 rounded-lg border-2 border-[#09090B] bg-[#F8F4E8] text-[#09090B] text-[11px] font-bold tracking-wide hover:bg-[#D2E823] transition-all"
            style={{ boxShadow: "2px 2px 0px 0px #09090B" }}
          >
            {lang === "en" ? "اردو" : "EN"}
          </button>
          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-[#09090B]" aria-label="Toggle menu">
            <div className="space-y-1.5">
              <span className={`block w-7 h-[3px] bg-[#09090B] rounded-sm transition-transform ${open ? "rotate-45 translate-y-[9px]" : ""}`} />
              <span className={`block w-7 h-[3px] bg-[#09090B] rounded-sm transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block w-7 h-[3px] bg-[#09090B] rounded-sm transition-transform ${open ? "-rotate-45 -translate-y-[9px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-t-2 border-[#09090B] px-5 pb-4"
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
               className="block py-3 text-sm tracking-widest uppercase text-[#09090B] font-semibold hover:text-[#D2E823] hover:bg-[#09090B] hover:px-3 rounded-md border-b-2 border-[#09090B]/10 transition-all">
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}

/* ─────────────── HERO ─────────────── */
function HeroSection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen w-full pt-28 pb-16 overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center min-h-[75vh]">
          {/* Left — Text */}
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <span className="sticker mb-6 inline-block">
                <ShieldCheck size={12} className="inline mr-1" />
                {t("hero.badge")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="brutal-heading text-[4rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] glitch-text"
            >
              {t("hero.name")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 font-['Space_Grotesk'] text-xl sm:text-2xl text-[#09090B]/70 font-light max-w-xl leading-relaxed"
            >
              {t("hero.desc_1")}{" "}
              <span className="font-bold text-[#09090B] bg-[#D2E823] px-2 py-0.5 border-2 border-[#09090B] rounded-md inline-block rotate-[-1deg]">
                {t("hero.desc_2")}
              </span>{" "}
              {t("hero.desc_3")}
            </motion.p>

            {/* CTA */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="mt-10 flex flex-wrap gap-4">
              <a href="#services" className="brutal-btn-acid flex items-center gap-2 !text-sm">
                {t("hero.cta1")}
                <ArrowRight size={16} />
              </a>
              <a href="https://wa.me/923120123816" target="_blank" rel="noopener noreferrer" className="brutal-btn flex items-center gap-2 !text-sm">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#D2E823]"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                {t("hero.cta2")}
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1 }} className="mt-12 flex flex-wrap gap-6 sm:gap-10">
              {[
                { num: t("hero.stat1_num"), label: t("hero.stat1_label") },
                { num: t("hero.stat2_num"), label: t("hero.stat2_label") },
                { num: t("hero.stat3_num"), label: t("hero.stat3_label") },
              ].map((s) => (
                <div key={s.label} className="brutal-card px-5 py-4">
                  <div className="text-2xl sm:text-3xl font-['Dela_Gothic_One'] text-[#09090B]">{s.num}</div>
                  <div className="text-[10px] font-['Space_Grotesk'] font-semibold tracking-wider text-[#09090B]/50 uppercase mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-[24px] overflow-hidden border-2 border-[#09090B] aspect-[3/4]"
                 style={{ boxShadow: "8px 8px 0px 0px #09090B" }}>
              <Image src="/momin/hero-full.jpg" alt="Momin Ali — Certified iPhone Technician" fill className="object-cover object-[60%_10%]" priority quality={95} />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 float-anim brutal-card-dark px-5 py-4 rounded-xl z-10">
              <div className="text-[#D2E823] font-['Dela_Gothic_One'] text-lg">L1 & L2</div>
              <div className="text-[#F8F4E8]/60 text-[11px] font-['Space_Grotesk'] tracking-wider uppercase">Certified</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-[#09090B]/30">
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}

/* ─────────────── SERVICES ─────────────── */
const services = [
  { icon: Monitor, title: "Screen Replacement", desc: "OLED & LCD display replacements for all iPhone models with OEM-quality parts and pixel-perfect calibration.", tag: "Most Popular" },
  { icon: CircuitBoard, title: "Board-Level Repair", desc: "Advanced micro-soldering for logic board issues — IC chip replacement, trace repair, and component-level diagnostics.", tag: "Advanced" },
  { icon: Battery, title: "Battery Service", desc: "Genuine-grade battery replacement with full health calibration. Restore your device to 100% battery health.", tag: null },
  { icon: Cpu, title: "Chip-Level Repair", desc: "Reballing, underfilling, and replacing damaged ICs — audio, charging, Wi-Fi, baseband, and NAND chips.", tag: "Specialist" },
  { icon: Wifi, title: "Network & Signal", desc: "Wi-Fi / Bluetooth / cellular signal repair. Antenna replacement, baseband IC troubleshooting, and IMEI restoration.", tag: null },
  { icon: Settings, title: "Software Diagnostics", desc: "Data recovery, firmware restoration, iCloud unlock assistance, and advanced software-level troubleshooting.", tag: null },
];

function ServicesSection() {
  const { t } = useLanguage();
  return (
    <section id="services" className="relative py-24 bg-[#F8F4E8]">
      <div className="brutal-divider" />
      <div className="max-w-7xl mx-auto px-6 pt-16">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <span className="sticker mb-4">{t("services.tag")}</span>
          <h2 className="mt-6 brutal-heading text-5xl md:text-7xl">{t("services.title")}</h2>
          <p className="mt-4 text-[#09090B]/60 font-['Space_Grotesk'] text-lg max-w-xl">{t("services.desc")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="brutal-card p-7 relative group">
              {s.tag && (
                <span className="absolute top-5 right-5 sticker !text-[10px] !py-1 !px-2.5">{s.tag}</span>
              )}
              <div className="w-12 h-12 rounded-xl bg-[#D2E823] border-2 border-[#09090B] flex items-center justify-center mb-5" style={{ boxShadow: "2px 2px 0px 0px #09090B" }}>
                <s.icon size={22} className="text-[#09090B]" />
              </div>
              <h3 className="text-lg font-['Dela_Gothic_One'] uppercase text-[#09090B] mb-2">{s.title}</h3>
              <p className="text-sm text-[#09090B]/60 leading-relaxed font-['Space_Grotesk']">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── EXPERTISE ─────────────── */
const skills = [
  { name: "Micro-Soldering", level: 95 },
  { name: "Logic Board Diagnostics", level: 92 },
  { name: "IC Chip Replacement", level: 90 },
  { name: "Screen Calibration", level: 98 },
  { name: "Data Recovery", level: 85 },
  { name: "Schematic Reading", level: 88 },
];

function ExpertiseSection() {
  const { t } = useLanguage();
  return (
    <section id="expertise" className="relative py-24 bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="relative rounded-[24px] overflow-hidden border-2 border-[#D2E823] aspect-[4/3]" style={{ boxShadow: "8px 8px 0px 0px #D2E823" }}>
              <Image src="/momin/lab-work.jpeg" alt="Momin Ali working with microscope at iPhone Fix Lab" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-2 text-[#D2E823]">
                <Microscope size={16} />
                <span className="text-[11px] font-['Space_Grotesk'] font-bold tracking-widest uppercase">{t("expertise.img_tag")}</span>
              </div>
            </div>
          </motion.div>

          {/* Right — Skills */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="sticker mb-4 inline-block">{t("expertise.tag")}</span>
            <h2 className="mt-6 font-['Dela_Gothic_One'] text-4xl md:text-5xl uppercase tracking-tighter text-[#F8F4E8] leading-[0.9]">{t("expertise.title")}</h2>

            <div className="space-y-5 mt-10">
              {skills.map((skill, i) => (
                <motion.div key={skill.name} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-['Space_Grotesk'] font-semibold text-[#F8F4E8]">{skill.name}</span>
                    <span className="text-[12px] font-['Space_Grotesk'] font-bold text-[#D2E823]">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-[#F8F4E8]/10 rounded-lg overflow-hidden border-2 border-[#F8F4E8]/20">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 + i * 0.08 }}
                      className="h-full rounded-lg bg-[#D2E823]" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tools */}
            <div className="mt-10 flex flex-wrap gap-2">
              {["Hot Air Station", "Soldering Iron", "Microscope", "DC Power Supply", "Multimeter", "Ultrasonic Cleaner", "Oscilloscope", "BGA Rework"].map((tool) => (
                <span key={tool} className="px-3 py-1.5 text-[11px] font-['Space_Grotesk'] font-semibold tracking-wider text-[#F8F4E8]/60 border-2 border-[#F8F4E8]/20 rounded-lg hover:border-[#D2E823] hover:text-[#D2E823] transition-all">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── CERTIFICATION ─────────────── */
function CertificationSection() {
  const { t } = useLanguage();
  return (
    <section id="certification" className="relative py-24 bg-[#F8F4E8]">
      <div className="brutal-divider" />
      <div className="max-w-7xl mx-auto px-6 pt-16">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <span className="sticker mb-4">{t("cert.tag")}</span>
          <h2 className="mt-6 brutal-heading text-5xl md:text-7xl">{t("cert.title")}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Certificate image */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="relative rounded-[24px] overflow-hidden border-2 border-[#09090B]" style={{ boxShadow: "8px 8px 0px 0px #09090B" }}>
              <Image src="/momin/certificate.jpeg" alt="iPhone Fix Certificate — Level 1 & 2" width={800} height={580} className="w-full" />
            </div>
          </motion.div>

          {/* Details */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="space-y-4">
              {[
                { icon: Award, label: "Certificate", value: "iPhone Fix — Apple Specialists" },
                { icon: Star, label: "Level", value: "Level One & Two (Complete)" },
                { icon: MapPin, label: "Institution", value: "iPhone Fix Training Center, Lahore" },
                { icon: ShieldCheck, label: "Serial Number", value: "Sr# 1592" },
                { icon: Zap, label: "Date Issued", value: "February 3, 2026" },
              ].map((item) => (
                <div key={item.label} className="brutal-card flex items-start gap-4 p-5">
                  <div className="w-10 h-10 rounded-lg bg-[#D2E823] border-2 border-[#09090B] flex items-center justify-center flex-shrink-0" style={{ boxShadow: "2px 2px 0px 0px #09090B" }}>
                    <item.icon size={18} className="text-[#09090B]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-['Space_Grotesk'] font-bold tracking-wider uppercase text-[#09090B]/50">{item.label}</div>
                    <div className="text-[#09090B] font-['Space_Grotesk'] font-semibold mt-0.5">{item.value}</div>
                  </div>
                </div>
              ))}

              <div className="pt-4">
                <div className="text-[11px] font-['Space_Grotesk'] font-bold tracking-wider uppercase text-[#09090B]/50 mb-3">Verify Institution</div>
                <div className="flex flex-wrap gap-3">
                  {[
                    { href: "http://iphonefix.org/", icon: Globe, label: "Website" },
                    { href: "https://www.instagram.com/iphonefixilab/", icon: Instagram, label: "Instagram" },
                    { href: "https://www.facebook.com/AppleSolutioniLab/", icon: Facebook, label: "Facebook" },
                  ].map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                       className="brutal-card inline-flex items-center gap-2 px-4 py-2 text-sm font-['Space_Grotesk'] font-semibold text-[#09090B] hover:bg-[#D2E823]">
                      <link.icon size={14} /> {link.label} <ExternalLink size={12} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── CEREMONY BANNER ─────────────── */
function CeremonyBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#09090B]">
      <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh]">
        <Image src="/momin/certificate-ceremony.jpeg" alt="Momin Ali receiving iPhone Fix Certificate" fill className="object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 pb-10 sm:pb-14">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <div>
                <span className="sticker mb-4 inline-block"><Award size={12} className="inline mr-1" />Milestone</span>
                <h3 className="font-['Dela_Gothic_One'] text-3xl sm:text-4xl lg:text-5xl uppercase text-[#F8F4E8] leading-tight">Earning the Certificate</h3>
                <p className="mt-3 text-[#F8F4E8]/80 font-['Space_Grotesk'] text-base sm:text-lg max-w-xl">
                  Receiving the iPhone Fix Level 1 & 2 certification at the Training Center, Lahore.
                </p>
              </div>
              <div className="brutal-card-dark px-5 py-3 rounded-xl flex-shrink-0">
                <div className="text-[10px] font-['Space_Grotesk'] font-bold tracking-wider uppercase text-[#D2E823]">iPhone Fix Training Center</div>
                <div className="text-[#F8F4E8] font-['Space_Grotesk'] font-semibold mt-1">Gulberg III, Lahore</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── GALLERY ─────────────── */
function GallerySection() {
  const { t } = useLanguage();
  const images: { src: string; alt: string; caption: string; span: string; fit?: string; objectPos?: string }[] = [
    { src: "/momin/lab-expert.jpg", alt: "iPhone Fix Lab Technical Expert", caption: "iPhone Fix Lab — Technical Expert", span: "md:col-span-2 md:row-span-2" },
    { src: "/momin/advanced-repair.jpg", alt: "Advanced micro-soldering", caption: "iPhone Fix Lab — Advanced Repair", span: "md:col-span-1" },
    { src: "/momin/certificate-ceremony-new.jpeg", alt: "Receiving iPhone Fix Certificate", caption: "Receiving the Certificate", span: "md:col-span-1", objectPos: "object-[center_25%]" },
    { src: "/momin/training-center-pose.jpeg", alt: "At iPhone Fix Training Center", caption: "At iPhone Fix Training Center", span: "md:col-span-1" },
    { src: "/momin/microscope-setup.jpeg", alt: "Professional microscope setup", caption: "Professional Equipment Setup", span: "md:col-span-1" },
    { src: "/momin/team-photo.jpeg", alt: "Team photo at iPhone Fix", caption: "Training Batch — iPhone Fix Lab", span: "md:col-span-2" },
    { src: "/momin/lab-work.jpeg", alt: "Micro-soldering", caption: "Lab Work — Micro-Soldering", span: "md:col-span-1" },
    { src: "/momin/lab-sitting-relaxed.jpeg", alt: "At workstation", caption: "Micro-Soldering at Training Center", span: "md:col-span-1" },
    { src: "/momin/lab-relaxed.jpeg", alt: "Micro-soldering under microscope", caption: "Precision Micro-Soldering", span: "md:col-span-1" },
    { src: "/momin/microscope-work-2.jpeg", alt: "Board repair", caption: "Board-Level Repair in Action", span: "md:col-span-1" },
    { src: "/momin/casual-photo.jpeg", alt: "Momin Ali", caption: "On The Move", span: "md:col-span-1" },
    { src: "/momin/og-image.jpg", alt: "Certified iPhone Technician", caption: "Apple Certified iPhone Technician", span: "md:col-span-3", fit: "contain" },
  ];

  return (
    <section id="gallery" className="relative py-24 bg-[#F8F4E8]">
      <div className="brutal-divider" />
      <div className="max-w-7xl mx-auto px-6 pt-16">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <span className="sticker mb-4">{t("gallery.tag")}</span>
          <h2 className="mt-6 brutal-heading text-5xl md:text-7xl">{t("gallery.title")}</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[260px] sm:auto-rows-[280px]">
          {images.map((img, i) => (
            <motion.div key={img.src} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative rounded-[16px] overflow-hidden border-2 border-[#09090B] ${img.span}`}
              style={{ boxShadow: "4px 4px 0px 0px #09090B", transition: "transform 0.15s, box-shadow 0.15s" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translate(2px, 2px)"; e.currentTarget.style.boxShadow = "0px 0px 0px 0px #09090B"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translate(0, 0)"; e.currentTarget.style.boxShadow = "4px 4px 0px 0px #09090B"; }}
            >
              <Image src={img.src} alt={img.alt} fill className={`${img.fit === "contain" ? "object-contain bg-[#F8F4E8]" : "object-cover"} ${img.objectPos || ""} grayscale group-hover:grayscale-0 transition-all duration-500`} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[#F8F4E8] font-['Space_Grotesk'] font-semibold text-sm bg-[#09090B] px-3 py-1 rounded-md border border-[#D2E823]/30 inline-block">{img.caption}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── PROCESS ─────────────── */
const steps = [
  { num: "01", title: "Diagnose", desc: "Thorough inspection using multimeter, DC power supply, and microscope to pinpoint the exact fault." },
  { num: "02", title: "Quote", desc: "Transparent pricing with no hidden fees. You approve the repair cost before any work begins." },
  { num: "03", title: "Repair", desc: "Precision repair using professional-grade tools and OEM-quality components under magnification." },
  { num: "04", title: "Test & Deliver", desc: "Full functionality testing, battery calibration, and quality assurance before handover." },
];

function ProcessSection() {
  const { t } = useLanguage();
  return (
    <section className="relative py-24 bg-[#F8F4E8]">
      <div className="brutal-divider" />
      <div className="max-w-7xl mx-auto px-6 pt-16">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <span className="sticker mb-4">{t("process.tag")}</span>
          <h2 className="mt-6 brutal-heading text-5xl md:text-7xl">{t("process.title")}</h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <motion.div key={step.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`brutal-card p-6 relative ${i % 2 === 0 ? '' : 'float-anim'}`}>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-[2px] bg-[#09090B]" />
              )}
              <div className="text-4xl font-['Dela_Gothic_One'] text-[#D2E823] mb-4" style={{ WebkitTextStroke: "2px #09090B", color: "#D2E823" }}>{step.num}</div>
              <h3 className="text-lg font-['Dela_Gothic_One'] uppercase text-[#09090B] mb-2">{step.title}</h3>
              <p className="text-sm text-[#09090B]/60 leading-relaxed font-['Space_Grotesk']">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── IPHONE MODELS ─────────────── */
const iphoneModels = [
  "iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 16", "iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15",
  "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14", "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13",
  "iPhone 12 Series", "iPhone 11 Series", "iPhone SE", "iPad All Models",
];

function ModelsSection() {
  const { t } = useLanguage();
  return (
    <section className="relative py-20 bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="sticker mb-4 inline-block">{t("models.tag")}</span>
          <h2 className="mt-6 font-['Dela_Gothic_One'] text-3xl md:text-5xl uppercase tracking-tighter text-[#F8F4E8]">{t("models.title")}</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {iphoneModels.map((model, i) => (
            <motion.span key={model} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.03 }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-[#F8F4E8]/20 text-[#F8F4E8]/70 text-sm font-['Space_Grotesk'] font-semibold hover:border-[#D2E823] hover:text-[#D2E823] hover:bg-[#D2E823]/10 transition-all duration-200 cursor-default">
              <Smartphone size={14} className="opacity-50" />{model}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────── CONTACT ─────────────── */
function ContactSection() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="relative py-24 bg-[#F8F4E8]">
      <div className="brutal-divider" />
      <div className="max-w-4xl mx-auto px-6 pt-16 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
          <span className="sticker mb-4 inline-block">{t("contact.tag")}</span>
          <h2 className="mt-6 brutal-heading text-5xl md:text-7xl">{t("contact.title")}</h2>
          <p className="mt-6 text-[#09090B]/60 font-['Space_Grotesk'] text-lg max-w-xl mx-auto">{t("contact.desc")}</p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { href: "https://wa.me/923120123816", icon: MessageCircle, label: "WhatsApp", sub: "+92 312 0123816", color: "#25D366" },
              { href: "tel:+923120123816", icon: Phone, label: "Call Me", sub: "+92 312 0123816", color: "#09090B" },
              { href: "https://t.me/MominAli512", icon: Send, label: "Telegram", sub: "@MominAli512", color: "#0088CC" },
              { href: "https://www.instagram.com/momin__512", icon: Instagram, label: "Instagram", sub: "@momin__512", color: "#E4405F" },
              { href: "https://www.facebook.com/share/1DhodbhHvZ/", icon: Facebook, label: "Facebook", sub: "Momin Ali", color: "#1877F2" },
              { href: "https://www.tiktok.com/@momin_ali_512", icon: Music, label: "TikTok", sub: "@momin_ali_512", color: "#09090B" },
            ].map((c) => (
              <a key={c.label} href={c.href} target={c.href.startsWith("tel") ? undefined : "_blank"} rel="noopener noreferrer"
                 className="brutal-card p-6 text-center group hover:bg-[#D2E823]">
                <div className="w-12 h-12 rounded-xl border-2 border-[#09090B] flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: c.color + "20", boxShadow: "2px 2px 0px 0px #09090B" }}>
                  <c.icon size={20} style={{ color: c.color }} />
                </div>
                <div className="text-[#09090B] font-['Space_Grotesk'] font-bold text-sm">{c.label}</div>
                <div className="text-[#09090B]/50 text-[11px] font-['Space_Grotesk'] font-semibold mt-1">{c.sub}</div>
              </a>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 inline-flex items-center gap-2 brutal-card px-5 py-2.5 text-[#09090B] text-sm font-['Space_Grotesk'] font-semibold">
            <MapPin size={15} className="text-[#09090B]" />
            {t("contact.location")}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────── FOOTER ─────────────── */
function Footer() {
  return (
    <footer className="relative py-12 bg-[#09090B] border-t-2 border-[#09090B]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-['Dela_Gothic_One'] text-lg uppercase text-[#F8F4E8]">
              iFix <span className="text-[#D2E823]">Expert</span>
            </span>
            <p className="text-[#F8F4E8]/40 text-sm font-['Space_Grotesk'] mt-1">Certified iPhone Technician — Level 1 & 2</p>
          </div>

          <div className="flex items-center gap-3">
            {[
              { href: "https://www.instagram.com/momin__512", icon: Instagram },
              { href: "https://www.facebook.com/share/1DhodbhHvZ/", icon: Facebook },
              { href: "https://www.tiktok.com/@momin_ali_512", icon: Music },
              { href: "https://t.me/MominAli512", icon: Send },
              { href: "https://wa.me/923120123816", icon: MessageCircle },
            ].map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-xl border-2 border-[#F8F4E8]/20 flex items-center justify-center text-[#F8F4E8]/50 hover:border-[#D2E823] hover:text-[#D2E823] hover:bg-[#D2E823]/10 transition-all"
                 style={{ boxShadow: "2px 2px 0px 0px rgba(248,244,232,0.1)" }}>
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t-2 border-[#F8F4E8]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#F8F4E8]/30 text-xs font-['Space_Grotesk']">&copy; {new Date().getFullYear()} Momin Ali. All rights reserved.</p>
          <p className="text-[#F8F4E8]/20 text-[10px] font-['Space_Grotesk'] font-semibold tracking-wider uppercase">Trained at iPhone Fix Training Center, Lahore &bull; Sr# 1592</p>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────── SPLASH SCREEN ─────────────── */
function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit">("enter");

  React.useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 800);
    const t2 = setTimeout(() => setPhase("exit"), 2300);
    const t3 = setTimeout(() => onComplete(), 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F8F4E8] overflow-hidden"
      animate={phase === "exit" ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-20" />

      {/* Center content */}
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={phase === "enter" ? { scale: 1, rotate: 0 } : phase === "hold" ? { scale: [1, 1.02, 1], rotate: [0, 1, -1, 0] } : { scale: 1, rotate: 0 }}
          transition={phase === "enter" ? { duration: 0.6, ease: [0.22, 1, 0.36, 1] } : { duration: 1.5, ease: "easeInOut" }}
        >
          <div className="w-[140px] h-[280px] sm:w-[160px] sm:h-[320px] rounded-[32px] border-4 border-[#09090B] bg-[#F8F4E8] relative overflow-hidden"
               style={{ boxShadow: "8px 8px 0px 0px #09090B" }}>
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60px] h-[22px] bg-[#09090B] rounded-b-2xl z-10" />
            {/* Screen */}
            <div className="absolute inset-[6px] rounded-[26px] overflow-hidden border-2 border-[#09090B]">
              <Image src="/momin/profile-selfie.jpeg" alt="Momin Ali" fill className="object-cover object-top" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/70 via-transparent to-transparent" />
            </div>
            {/* Home indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[40px] h-[4px] rounded-full bg-[#09090B]" />
          </div>
        </motion.div>

        <motion.div className="mt-8 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <h2 className="font-['Dela_Gothic_One'] text-4xl sm:text-5xl uppercase text-[#09090B]">Momin Ali</h2>
          <motion.p className="mt-2 text-[11px] font-['Space_Grotesk'] font-bold tracking-[0.35em] uppercase text-[#09090B]/50"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.7 }}>
            iPhone Expert
          </motion.p>
        </motion.div>

        {/* Loading bar */}
        <motion.div className="mt-8 w-[120px] h-[6px] bg-[#09090B]/10 rounded-full overflow-hidden border-2 border-[#09090B]"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <motion.div className="h-full bg-[#D2E823] rounded-full" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 2.2, delay: 0.5, ease: "easeInOut" }} />
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ─────────────── MAIN ─────────────── */
export default function MominLanding() {
  const [showSplash, setShowSplash] = useState(true);
  const handleSplashComplete = React.useCallback(() => setShowSplash(false), []);

  return (
    <LanguageProvider>
      <CustomCursor />
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <main className={`noise-overlay bg-[#F8F4E8] text-[#09090B] font-['Space_Grotesk'] overflow-x-hidden transition-opacity duration-500 ${showSplash ? "opacity-0" : "opacity-100"}`}>
        <Navbar />
        <HeroSection />
        <Marquee items={["SCREEN REPAIR", "BOARD-LEVEL", "MICRO-SOLDERING", "CHIP REPLACEMENT", "BATTERY SERVICE", "DATA RECOVERY"]} />
        <ServicesSection />
        <ExpertiseSection />
        <CertificationSection />
        <CeremonyBanner />
        <GallerySection />
        <Marquee items={["CERTIFIED", "LEVEL 1 & 2", "iPHONE FIX LAB", "LAHORE", "APPLE SPECIALIST", "100+ REPAIRS"]} />
        <ProcessSection />
        <ModelsSection />
        <ContactSection />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
