'use client';

// Demo file for ShaderBackground component
// Each named export is one usage scenario

import ShaderBackground from "@/components/ui/shader-background";

// Basic usage: full-screen WebGL plasma background
const DemoOne = () => {
  return <ShaderBackground />;
};

// Usage with overlaid content (e.g. hero section)
const DemoWithContent = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <ShaderBackground />
      <div className="relative z-10 text-center text-white px-8">
        <h1 className="text-6xl font-bold mb-4">Empower The World</h1>
        <p className="text-xl text-white/70 max-w-xl mx-auto">
          ATOSHI Blockchain — the next evolution of global decentralized finance.
        </p>
        <button className="mt-8 px-8 py-4 bg-amber-500 text-black font-semibold rounded-full hover:bg-amber-400 transition-colors">
          Get Started →
        </button>
      </div>
    </div>
  );
};

export { DemoOne, DemoWithContent };
