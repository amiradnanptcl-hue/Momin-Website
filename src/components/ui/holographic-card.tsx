"use client";

import React, { useRef } from "react";

const HolographicCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
    card.style.setProperty("--bg-x", `${(x / rect.width) * 100}%`);
    card.style.setProperty("--bg-y", `${(y / rect.height) * 100}%`);
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    card.style.setProperty("--x", `50%`);
    card.style.setProperty("--y", `50%`);
    card.style.setProperty("--bg-x", "50%");
    card.style.setProperty("--bg-y", "50%");
  };

  return (
    <div
      className="relative w-full max-w-sm mx-auto rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-8 transition-transform duration-200 ease-out cursor-pointer overflow-hidden"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        {
          "--x": "50%",
          "--y": "50%",
          "--bg-x": "50%",
          "--bg-y": "50%",
        } as React.CSSProperties
      }
    >
      <div className="relative z-10 text-center">
        <h3 className="font-bold text-xl text-white tracking-tight">
          Holographic Card
        </h3>
        <p className="text-zinc-400 text-sm mt-1">Move your mouse over me!</p>
      </div>
      {/* Holographic glow */}
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at var(--bg-x) var(--bg-y), rgba(245,158,11,0.15) 0%, transparent 60%)",
        }}
      />
    </div>
  );
};

export default HolographicCard;
