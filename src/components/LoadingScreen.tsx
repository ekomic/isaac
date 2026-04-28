"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { APCLogo, NigeriaCoatOfArmsInline } from "./Logos";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "linear-gradient(135deg, #0a1628 0%, #004d28 50%, #0a1628 100%)" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          aria-label="Loading"
          role="status"
        >
          {/* Logos row */}
          <motion.div
            className="flex items-center gap-8 mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <NigeriaCoatOfArmsInline className="w-16 h-16 md:w-20 md:h-20" />
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent" />
            <APCLogo className="w-16 h-16 md:w-20 md:h-20" />
          </motion.div>

          {/* Candidate name */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <p className="text-[#C9A84C] text-sm font-medium tracking-[0.3em] uppercase mb-2">
              Hon. Amb.
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Isaac Ali Kigbu
            </h1>
            <p className="text-[#C9A84C] text-sm tracking-[0.2em] uppercase mt-3">
              Lafi/Obi Federal Constituency
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="mt-12 w-48 h-0.5 bg-white/10 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, #006837, #C9A84C)" }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, delay: 0.9, ease: "easeInOut" }}
            />
          </motion.div>

          {/* APC tagline */}
          <motion.p
            className="mt-6 text-white/40 text-xs tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            All Progressives Congress · 2027
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
