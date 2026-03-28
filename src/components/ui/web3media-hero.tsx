"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CryptoIcon {
  icon: React.ReactNode;
  label: string;
  position: { x: string; y: string };
}

interface Web3MediaHeroProps {
  logo?: string;
  navigation?: Array<{
    label: string;
    onClick?: () => void;
  }>;
  contactButton?: {
    label: string;
    onClick: () => void;
  };
  title: string;
  highlightedText?: string;
  subtitle: string;
  ctaButton?: {
    label: string;
    onClick: () => void;
  };
  cryptoIcons?: CryptoIcon[];
  trustedByText?: string;
  brands?: Array<{
    name: string;
    logo: React.ReactNode;
  }>;
  className?: string;
  children?: React.ReactNode;
}

function BlockchainCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();

    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;

    const nodes: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    for (let i = 0; i < 30; i++) {
      nodes.push({
        x: Math.random() * w(),
        y: Math.random() * h(),
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, w(), h());
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(245,130,31,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(245,130,31,0.35)";
        ctx.fill();
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w()) n.vx *= -1;
        if (n.y < 0 || n.y > h()) n.vy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
      aria-hidden="true"
    />
  );
}

export function Web3MediaHero({
  logo = "Web3 Media",
  navigation = [
    { label: "Home" },
    { label: "Gallery" },
    { label: "Cases" },
    { label: "About us" },
  ],
  contactButton,
  title,
  highlightedText = "Web3 Visibility",
  subtitle,
  ctaButton,
  cryptoIcons = [],
  trustedByText = "Trusted by",
  brands = [],
  className,
  children,
}: Web3MediaHeroProps) {
  const logoWords = logo.split(" ");

  return (
    <section
      className={cn(
        "relative w-full min-h-screen flex flex-col overflow-hidden",
        className
      )}
      style={{
        background: "linear-gradient(165deg, #050810 0%, #0A0E1A 35%, #0D1225 60%, #111830 100%)",
      }}
      role="banner"
      aria-label="Hero section"
    >
      {/* Blockchain particle canvas */}
      <BlockchainCanvas />

      {/* Multi-layered glow effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Primary warm glow - center */}
        <div
          className="absolute"
          style={{
            width: "900px",
            height: "900px",
            left: "50%",
            top: "45%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(245,130,31,0.15) 0%, rgba(245,130,31,0) 65%)",
            filter: "blur(80px)",
          }}
        />
        {/* Secondary cyan accent - top right */}
        <div
          className="absolute"
          style={{
            width: "600px",
            height: "600px",
            right: "-100px",
            top: "-100px",
            background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Tertiary gold accent - bottom left */}
        <div
          className="absolute"
          style={{
            width: "500px",
            height: "500px",
            left: "-50px",
            bottom: "-50px",
            background: "radial-gradient(circle, rgba(255,215,0,0.06) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Noise overlay for texture */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            opacity: 0.4,
          }}
        />
      </div>

      {/* Header handled by external Navbar component */}

      {/* Main Content */}
      {children ? (
        <div className="relative z-10 flex-1 flex items-center justify-center w-full">
          {children}
        </div>
      ) : (
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col items-center text-center max-w-5xl"
            style={{ gap: "28px" }}
          >
            {/* Title */}
            <h1
              style={{
                fontFamily: "var(--font-kugile), 'Syne', serif",
                fontWeight: 400,
                fontSize: "clamp(44px, 8vw, 88px)",
                lineHeight: "1.1",
                color: "#FFFFFF",
                letterSpacing: "-0.01em",
              }}
            >
              {title}
              <br />
              <span
                className="inline-block"
                style={{
                  fontFamily: "var(--font-kugile), 'Syne', serif",
                  background: "linear-gradient(135deg, #F5821F 0%, #FFD700 50%, #F5821F 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: 400,
                  filter: "drop-shadow(0 0 40px rgba(245,130,31,0.4))",
                  fontSize: "clamp(60px, 14vw, 160px)",
                }}
              >
                {highlightedText}
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                fontSize: "clamp(14px, 1.8vw, 17px)",
                lineHeight: "1.7",
                color: "rgba(136,153,187,0.9)",
                maxWidth: "600px",
              }}
            >
              {subtitle}
            </p>

            {/* CTA Button */}
            {ctaButton && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex justify-center"
              >
                <motion.button
                  whileHover={{ y: -3, boxShadow: "0 0 60px rgba(245,130,31,0.6)" }}
                  onClick={ctaButton.onClick}
                  className="px-10 py-4 rounded-full flex items-center gap-2"
                  style={{
                    background: "linear-gradient(135deg, #F5821F, #FF6B00)",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 0 40px rgba(245,130,31,0.35)",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  {ctaButton.label}
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}

    </section>
  );
}
