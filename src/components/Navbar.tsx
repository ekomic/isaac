"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { APCLogo } from "./Logos";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Vision", href: "#vision" },
  { label: "Impact", href: "#impact" },
  { label: "News", href: "#news" },
  { label: "Gallery", href: "#gallery" },
  { label: "Get Involved", href: "#get-involved" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(10, 22, 40, 0.97)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "none",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo + Name */}
            <button
              onClick={() => handleNavClick("#hero")}
              className="flex items-center gap-3 group"
              aria-label="Go to top"
            >
              <APCLogo className="w-10 h-10 transition-transform group-hover:scale-110" />
              <div className="hidden sm:block">
                <p className="text-white font-bold text-sm leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Hon. Amb. Isaac Ali Kigbu
                </p>
                <p className="text-[#C9A84C] text-xs tracking-wider">Lafi/Obi · APC · 2027</p>
              </div>
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                      isActive ? "text-[#C9A84C]" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A84C] rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
              <button
                onClick={() => handleNavClick("#get-involved")}
                className="ml-4 px-5 py-2 text-sm font-semibold rounded-md text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ background: "linear-gradient(135deg, #006837, #008a4a)" }}
              >
                Join the Movement
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-md text-white hover:text-[#C9A84C] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-50 w-72 lg:hidden flex flex-col"
              style={{ background: "linear-gradient(180deg, #0a1628 0%, #112240 100%)", borderLeft: "1px solid rgba(201,168,76,0.2)" }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div>
                  <p className="text-white font-bold text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Isaac Ali Kigbu
                  </p>
                  <p className="text-[#C9A84C] text-xs">APC · Lafi/Obi · 2027</p>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-white/60 hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto py-6 px-4" aria-label="Mobile navigation">
                {navLinks.map((link, i) => {
                  const id = link.href.replace("#", "");
                  const isActive = activeSection === id;
                  return (
                    <motion.button
                      key={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className={`w-full text-left px-4 py-3 rounded-lg mb-1 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-[#006837]/30 text-[#C9A84C] border-l-2 border-[#C9A84C]"
                          : "text-white/80 hover:bg-white/5 hover:text-white"
                      }`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      {link.label}
                    </motion.button>
                  );
                })}
              </nav>

              {/* CTA */}
              <div className="p-6 border-t border-white/10">
                <button
                  onClick={() => handleNavClick("#get-involved")}
                  className="w-full py-3 rounded-lg text-white font-semibold text-sm transition-all hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #006837, #008a4a)" }}
                >
                  Join the Movement
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
