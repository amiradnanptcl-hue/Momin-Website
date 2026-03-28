"use client";

import { useState, useCallback, useEffect, useRef } from "react";

export default function BlockchainBlastIntro({ onComplete }: { onComplete: () => void }) {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const skip = useCallback(() => setFadeOut(true), []);
  const handleEnded = useCallback(() => setFadeOut(true), []);

  const markReady = useCallback(() => setVideoReady(true), []);

  // On mount: attach multiple readiness listeners + try autoplay immediately
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Multiple ways to detect readiness — first one wins
    video.addEventListener("loadeddata", markReady);
    video.addEventListener("canplay", markReady);
    video.addEventListener("canplaythrough", markReady);

    // If video already has data (cached), mark ready immediately
    if (video.readyState >= 2) {
      markReady();
    }

    // Fallback: show video after 1.5s no matter what (prevents forever-spinner)
    const fallback = setTimeout(markReady, 1500);

    // Try autoplay right away (muted videos autoplay on most browsers)
    const tryPlay = async () => {
      try {
        await video.play();
        markReady(); // If play succeeds, video is definitely ready
      } catch {
        setAutoplayBlocked(true);
        markReady(); // Still show the video (with tap-to-play overlay)
      }
    };
    tryPlay();

    return () => {
      video.removeEventListener("loadeddata", markReady);
      video.removeEventListener("canplay", markReady);
      video.removeEventListener("canplaythrough", markReady);
      clearTimeout(fallback);
    };
  }, [markReady]);

  // When user taps to play on mobile
  const handleTapToPlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    setAutoplayBlocked(false);
    video.play().catch(() => setFadeOut(true));
  }, []);

  // Safety fallback — auto-dismiss after 12s
  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 12000);
    return () => clearTimeout(timer);
  }, []);

  // After fade-out, remove from DOM
  useEffect(() => {
    if (fadeOut) {
      const video = videoRef.current;
      if (video) video.pause();
      const timer = setTimeout(() => {
        setShow(false);
        onComplete();
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [fadeOut, onComplete]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[9999]"
      style={{
        backgroundColor: "#F5881F",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
        pointerEvents: fadeOut ? "none" : "auto",
      }}
    >
      {/* Video — object-contain centers perfectly on ALL screen sizes including mobile */}
      <video
        ref={videoRef}
        src="/opening2.mp4"
        muted
        playsInline
        preload="auto"
        onEnded={handleEnded}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          objectPosition: "center center",
          display: "block",
          opacity: videoReady ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />

      {/* Cover Veo watermark in bottom-right corner */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "120px",
          height: "60px",
          background: "linear-gradient(135deg, transparent 0%, #F5881F 40%)",
          zIndex: 5,
          pointerEvents: "none",
        }}
      />

      {/* Loading spinner — only while video buffers, max 1.5s */}
      {!videoReady && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div
            className="w-10 h-10 rounded-full border-[3px] border-white/20 border-t-white/80"
            style={{ animation: "spin 0.8s linear infinite" }}
          />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      )}

      {/* Mobile: tap-to-play overlay if autoplay was blocked */}
      {autoplayBlocked && videoReady && (
        <div
          onClick={handleTapToPlay}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 cursor-pointer"
          style={{ backgroundColor: "rgba(245, 136, 31, 0.92)" }}
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white/60 flex items-center justify-center bg-white/10">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white" className="ml-1">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <p className="text-white/80 text-xs sm:text-sm tracking-[3px] uppercase font-mono">
            Tap to play
          </p>
        </div>
      )}

      {/* Skip button */}
      <button
        onClick={skip}
        className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 z-20 cursor-pointer group"
        style={{ background: "none", border: "none" }}
      >
        <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white/50 group-hover:text-white/90 group-hover:border-white/40 active:text-white/90 active:border-white/40 transition-all duration-300 text-[9px] sm:text-[10px] tracking-[3px] uppercase font-mono">
          Skip
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="opacity-50 group-hover:opacity-80 transition-opacity sm:w-3 sm:h-3">
            <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
    </div>
  );
}
