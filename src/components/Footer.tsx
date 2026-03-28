"use client";

export default function Footer() {
  return (
    <footer className="bg-[#050810] border-t border-white/5 pt-16 pb-8 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Column 1 - Brand */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#F5821F] to-[#FFD700] flex items-center justify-center">
                <span className="text-white font-bold text-xs" style={{ fontFamily: "'Syne', sans-serif" }}>A</span>
              </div>
              <div>
                <span className="font-bold text-white text-sm tracking-widest uppercase block leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>ATOSHI</span>
                <span className="text-[8px] text-white/30 tracking-wider uppercase">Blockchain</span>
              </div>
            </div>
            <p className="text-xs text-white/30 mt-3 max-w-[200px] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Mining made simple. Empower the world with blockchain technology.
            </p>
            {/* Official Links */}
            <p className="text-[10px] text-[#F5821F] font-semibold mt-4 mb-2 uppercase tracking-wider">Official Links:</p>
            <div className="flex gap-2 flex-wrap">
              {["X", "TG", "DC", "YT", "LI", "FB"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-7 h-7 rounded-full bg-white/5 hover:bg-[#F5821F]/20 flex items-center justify-center text-white/30 text-[9px] no-underline transition hover:text-[#F5821F]"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Ecosystem */}
          <div>
            <h4 className="text-[11px] font-semibold text-white uppercase tracking-wider mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>Ecosystem</h4>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              {["ATOSHI App", "DeTok", "ATOSHI Gaming", "CoinSwap", "ATOS Wallet", "ATOSHI Meta"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-xs text-white/30 hover:text-[#F5821F] transition no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Technology */}
          <div>
            <h4 className="text-[11px] font-semibold text-white uppercase tracking-wider mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>Technology</h4>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              {["Blockchain OS", "Smart Contracts", "Biometric Wallet", "ATOS Token", "White Paper", "Blue Paper"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-xs text-white/30 hover:text-[#F5821F] transition no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Company */}
          <div>
            <h4 className="text-[11px] font-semibold text-white uppercase tracking-wider mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>Company</h4>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              {["About", "Team", "Roadmap", "Join Us", "Angel Investment", "Press Kit", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-xs text-white/30 hover:text-[#F5821F] transition no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>{link}</a>
                </li>
              ))}
            </ul>

            {/* CEO Links */}
            <p className="text-[10px] text-[#FFD700] font-semibold mt-6 mb-2 uppercase tracking-wider">CEO Liao Wang:</p>
            <div className="flex gap-2">
              {["X", "IG", "LI", "FB"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-6 h-6 rounded-full bg-white/5 hover:bg-[#FFD700]/20 flex items-center justify-center text-white/20 text-[8px] no-underline transition hover:text-[#FFD700]"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/5 pt-6 mb-6">
          <p className="text-[10px] text-white/20 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <span className="text-white/30 font-semibold">Disclaimer:</span> The above content is copyrighted and protected. All the technical ideas, features and plans of IMFO, ATOSHI and ATOS are just our vision, which may take a long and arduous process to achieve, and in the future may be changed. ATOSHI project is not risk free and may fail. ATOSHI reserves the right to change the content and interpretation without advance notice.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          <span className="text-[10px] text-white/20" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            &copy;Copyright | ATOSHI All Rights Reserved
          </span>
          <div className="flex gap-4">
            <a href="#" className="text-[10px] text-white/20 hover:text-white/40 transition no-underline">Privacy</a>
            <span className="text-[10px] text-white/20">&middot;</span>
            <a href="#" className="text-[10px] text-white/20 hover:text-white/40 transition no-underline">Terms</a>
            <span className="text-[10px] text-white/20">&middot;</span>
            <a href="#" className="text-[10px] text-white/20 hover:text-white/40 transition no-underline">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
