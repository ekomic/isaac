"use client";

import { motion } from "framer-motion";
import { ChevronDown, Users, Star } from "lucide-react";
import { APCLogo, NigeriaCoatOfArmsInline } from "./Logos";
import ParticleCanvas from "./ParticleCanvas";

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: "easeOut" as const },
  };
}

export default function HeroSection() {
  const scrollToAbout = () =>
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  const scrollToInvolved = () =>
    document.getElementById("get-involved")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient" />

      {/* Particle canvas */}
      <ParticleCanvas />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(10,22,40,1) 0%, transparent 100%)" }}
      />

      {/* Diagonal accent lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-5"
          style={{ background: "linear-gradient(135deg, transparent 40%, #C9A84C 40%, #C9A84C 41%, transparent 41%)" }}
        />
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-5"
          style={{ background: "linear-gradient(135deg, transparent 50%, #006837 50%, #006837 51%, transparent 51%)" }}
        />
      </div>

      {/* Content — full width, centered */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="flex flex-col items-center justify-center gap-12">

          {/* ── Left column: Text ── */}
          <div className="w-full flex flex-col items-center text-center max-w-2xl mx-auto">

            {/* Logos row */}
            <motion.div
              className="flex items-center justify-center gap-5 mb-8"
              {...fadeUp(0.1)}
            >
              <NigeriaCoatOfArmsInline className="w-14 h-14" />
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#C9A84C]/60 to-transparent" />
              <APCLogo className="w-14 h-14" />
              <div className="hidden sm:flex flex-col">
                <span className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase">
                  All Progressives Congress
                </span>
                <span className="text-white/60 text-xs tracking-wider">
                  Federal Republic of Nigeria
                </span>
              </div>
            </motion.div>

            {/* Party badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border border-[#C9A84C]/30"
              style={{ background: "rgba(201,168,76,0.1)" }}
              {...fadeUp(0.2)}
            >
              <Star size={12} className="text-[#C9A84C] fill-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase">
                APC Flag Bearer · 2027 General Elections
              </span>
              <Star size={12} className="text-[#C9A84C] fill-[#C9A84C]" />
            </motion.div>

            {/* Main headline */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
              {...fadeUp(0.35)}
            >
              <span className="text-white">A Voice for</span>
              <br />
              <span className="text-gold-gradient">Lafi/Obi.</span>
              <br />
              <span className="text-white">A Force for</span>
              <br />
              <span className="text-gold-gradient">Nigeria.</span>
            </motion.h1>

            {/* Candidate name */}
            <motion.div className="mb-4 w-full text-center" {...fadeUp(0.5)}>
              <p className="text-[#C9A84C] text-sm font-semibold tracking-[0.25em] uppercase mb-1">
                Hon. Amb.
              </p>
              <p
                className="text-2xl sm:text-3xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Isaac Ali Kigbu
              </p>
              <p className="text-white/60 text-sm mt-1 tracking-wide">
                House of Representatives · Lafi/Obi Federal Constituency
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-white/70 text-base sm:text-lg leading-relaxed mb-10 max-w-lg"
              {...fadeUp(0.6)}
            >
              Experienced diplomat. Proven community leader. Ready to deliver
              transformative representation for every family in Lafi/Obi.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center w-full"
              {...fadeUp(0.75)}
            >
              <button
                onClick={scrollToInvolved}
                className="group relative px-8 py-4 rounded-lg font-bold text-white text-sm tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, #006837, #008a4a)",
                  boxShadow: "0 8px 30px rgba(0,104,55,0.4)",
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Users size={16} />
                  Join the Movement
                </span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>

              <button
                onClick={scrollToAbout}
                className="px-8 py-4 rounded-lg font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105"
                style={{
                  border: "2px solid rgba(201,168,76,0.6)",
                  color: "#C9A84C",
                  background: "rgba(201,168,76,0.05)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(201,168,76,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(201,168,76,0.05)";
                }}
              >
                Learn More
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="flex items-center justify-center gap-8 mt-12 pt-8 border-t border-white/10 w-full"
              {...fadeUp(0.9)}
            >
              {[
                { value: "20+", label: "Years of Service" },
                { value: "5K+", label: "Families Supported" },
                { value: "2", label: "Constituencies Served" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p
                    className="text-2xl font-black text-[#C9A84C]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-white/50 text-xs tracking-wide mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right column: Photo ── */}
          <motion.div
            className="flex-shrink-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            {/* Glow */}
            <div
              className="absolute w-80 h-80 rounded-full opacity-20 blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(circle, #006837 0%, transparent 70%)" }}
            />

            {/* Photo frame */}
            <div className="relative w-72 sm:w-80 lg:w-[380px] h-[420px] sm:h-[460px] lg:h-[500px]">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, #C9A84C, #006837, #C9A84C)",
                  padding: "2px",
                }}
              >
                <div
                  className="w-full h-full rounded-2xl overflow-hidden"
                  style={{ background: "#112240" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/candidate.jpg"
                    alt="Hon. Amb. Isaac Ali Kigbu — APC Candidate for Lafi/Obi Federal Constituency"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.style.display = "none";
                      const parent = img.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(180deg,#112240 0%,#0a1628 100%);">
                            <div style="width:110px;height:110px;border-radius:50%;background:linear-gradient(135deg,#006837,#004d28);display:flex;align-items:center;justify-content:center;border:3px solid #C9A84C;margin-bottom:16px;">
                              <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                            </div>
                            <p style="color:#C9A84C;font-size:14px;font-weight:600;text-align:center;padding:0 16px;font-family:'Playfair Display',serif;">Hon. Amb. Isaac Ali Kigbu</p>
                            <p style="color:rgba(255,255,255,0.3);font-size:11px;margin-top:8px;">Add candidate.jpg to /public/images/</p>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
              </div>

              {/* Floating badge: APC */}
              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, #006837, #004d28)",
                  border: "1px solid rgba(201,168,76,0.4)",
                }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase">APC</p>
                <p className="text-white text-xs">Lafi/Obi</p>
              </motion.div>

              {/* Floating badge: House of Reps */}
              <motion.div
                className="absolute -top-4 -right-4 px-4 py-2 rounded-xl shadow-2xl text-right"
                style={{
                  background: "linear-gradient(135deg, #112240, #0a1628)",
                  border: "1px solid rgba(201,168,76,0.3)",
                }}
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <p className="text-[#C9A84C] text-xs font-bold">House of Reps</p>
                <p className="text-white/60 text-xs">2027</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-[#C9A84C] transition-colors"
        onClick={scrollToAbout}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll to about section"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} />
      </motion.button>
    </section>
  );
}
