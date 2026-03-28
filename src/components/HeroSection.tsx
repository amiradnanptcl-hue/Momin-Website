"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [count, setCount] = useState(0);

  // Animated counter
  useEffect(() => {
    const target = 15012676;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      setCount(current);
      if (current >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, []);

  // Blockchain particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const nodes: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    for (let i = 0; i < 60; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,212,255,${0.12 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      // nodes
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,212,255,0.5)";
        ctx.fill();
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section id="hero" className="relative w-screen h-screen overflow-hidden flex items-center justify-center">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-radial-hero z-[2]" />

      {/* Lamp effect overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-40">
        <LampContainer className="bg-transparent min-h-0 h-full rounded-none" >
          <span />
        </LampContainer>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="relative z-[5] text-center max-w-5xl px-10"
      >
        <p className="font-mono text-[11px] tracking-[4px] text-[#00D4FF] uppercase mb-6 opacity-80">
          ⬡ Blockchain · DeFi · Community Mining
        </p>
        <h1 className="leading-none mb-7">
          <span className="block text-[clamp(80px,14vw,160px)] font-black bg-gradient-to-r from-[#F5821F] via-[#FFD700] to-[#F5821F] bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(245,130,31,0.5)] font-mono">
            ATOSHI
          </span>
          <span className="block text-[clamp(24px,4vw,48px)] text-white font-bold tracking-tight mt-2">
            Mining Made Simple
          </span>
          <span className="block text-[clamp(18px,3vw,34px)] text-[#00D4FF] font-semibold mt-1" style={{ textShadow: "0 0 40px rgba(0,212,255,0.4)" }}>
            Powered by Community
          </span>
        </h1>

        <div className="inline-flex items-baseline gap-2 bg-[rgba(0,212,255,0.06)] border border-[rgba(0,212,255,0.2)] px-6 py-2.5 rounded-full mb-10">
          <span className="font-mono text-[clamp(18px,2.5vw,26px)] text-[#00D4FF]" style={{ textShadow: "0 0 40px rgba(0,212,255,0.4)" }}>
            {count.toLocaleString()}
          </span>
          <span className="text-sm text-[#8899BB] tracking-wide">Million+ Users Worldwide Mining</span>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <motion.a
            whileHover={{ y: -3, boxShadow: "0 0 80px rgba(245,130,31,0.7)" }}
            href="#"
            className="bg-gradient-to-r from-[#F5821F] to-[#FF6B00] text-white px-10 py-4 rounded-xl font-bold text-sm tracking-widest uppercase no-underline flex items-center gap-2 shadow-[0_0_40px_rgba(245,130,31,0.4)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            Start Mining
          </motion.a>
          <motion.a
            whileHover={{ borderColor: "#00D4FF", color: "#00D4FF", boxShadow: "0 0 40px rgba(0,212,255,0.4)" }}
            href="#ecosystem"
            className="border border-white/25 text-white px-10 py-4 rounded-xl font-semibold text-sm tracking-widest uppercase no-underline flex items-center gap-2 transition-colors duration-300"
          >
            Explore Ecosystem →
          </motion.a>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[5] flex flex-col items-center gap-2.5 opacity-50 animate-bounce">
        <span className="text-[11px] tracking-[3px] uppercase text-[#8899BB]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#F5821F]" />
      </div>
    </section>
  );
}
