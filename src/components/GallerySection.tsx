"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Hon. Amb. Isaac Ali Kigbu addressing constituents", span: "tall" },
  { src: "/images/gallery-2.jpg", alt: "Community development project launch", span: "normal" },
  { src: "/images/gallery-3.jpg", alt: "Scholarship award ceremony", span: "normal" },
  { src: "/images/gallery-4.jpg", alt: "Diplomatic engagement in Abuja", span: "wide" },
  { src: "/images/gallery-5.jpg", alt: "Food distribution to families", span: "normal" },
  { src: "/images/gallery-6.jpg", alt: "Youth empowerment summit", span: "tall" },
  { src: "/images/gallery-7.jpg", alt: "Infrastructure groundbreaking ceremony", span: "normal" },
  { src: "/images/gallery-8.jpg", alt: "Meeting with community elders", span: "normal" },
  { src: "/images/gallery-9.jpg", alt: "Campaign rally in Lafi", span: "wide" },
  { src: "/images/gallery-10.jpg", alt: "Healthcare outreach program", span: "normal" },
  { src: "/images/gallery-11.jpg", alt: "Women's cooperative support", span: "normal" },
  { src: "/images/gallery-12.jpg", alt: "APC party meeting", span: "normal" },
  // Fallback to activity images if gallery-specific ones aren't available
  { src: "/images/activity-1.jpg", alt: "Community engagement", span: "normal" },
  { src: "/images/activity-2.jpg", alt: "Humanitarian work", span: "normal" },
  { src: "/images/activity-3.jpg", alt: "Campaign activities", span: "normal" },
  { src: "/images/activity-4.jpg", alt: "Community projects", span: "normal" },
];

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length));
  }, []);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % galleryImages.length));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, prev, next]);

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <section
      id="gallery"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a1628 0%, #112240 100%)" }}
      aria-label="Photo gallery section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionWrapper className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            In Pictures
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Campaign <span className="text-gold-gradient">Gallery</span>
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            A visual record of service, leadership, and community connection.
          </p>
        </SectionWrapper>

        {/* Masonry grid */}
        <div className="masonry-grid">
          {galleryImages.map((img, i) => (
            <GalleryItem key={img.src + i} img={img} index={i} onClick={() => openLightbox(i)} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.95)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X size={20} className="text-white" />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>

            {/* Next */}
            <button
              className="absolute right-4 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next image"
            >
              <ChevronRight size={24} className="text-white" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              className="relative max-w-5xl max-h-[85vh] mx-16"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-xl"
                style={{ boxShadow: "0 25px 80px rgba(0,0,0,0.8)" }}
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  img.style.display = "none";
                  const parent = img.parentElement;
                  if (parent) {
                    parent.innerHTML = `<div style="width:400px;height:300px;display:flex;align-items:center;justify-content:center;background:#112240;border-radius:12px;color:rgba(255,255,255,0.3);text-align:center;"><div><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><p style="margin-top:12px;font-size:12px;">Image not available</p></div></div>`;
                  }
                }}
              />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 rounded-b-xl"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }}>
                <p className="text-white text-sm text-center">{galleryImages[lightboxIndex].alt}</p>
                <p className="text-white/40 text-xs text-center mt-1">
                  {lightboxIndex + 1} / {galleryImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function GalleryItem({
  img,
  index,
  onClick,
}: {
  img: (typeof galleryImages)[0];
  index: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className="masonry-item group relative rounded-xl overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 8) * 0.06 }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      aria-label={`View: ${img.alt}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img.src}
        alt={img.alt}
        className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
        style={{ display: "block" }}
        onError={(e) => {
          const imgEl = e.currentTarget as HTMLImageElement;
          // Try a fallback path
          if (!imgEl.dataset.fallback) {
            imgEl.dataset.fallback = "1";
            imgEl.src = `/images/activity-${(index % 6) + 1}.jpg`;
          } else {
            imgEl.style.display = "none";
            const parent = imgEl.parentElement;
            if (parent) {
              const aspectRatios = ["56.25%", "75%", "66.67%", "100%"];
              parent.style.paddingBottom = aspectRatios[index % 4];
              parent.style.background = "linear-gradient(135deg, #112240, #0a1628)";
              parent.innerHTML = `<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.1);"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></div>`;
            }
          }
        }}
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full flex items-center justify-center"
          style={{ background: "rgba(201,168,76,0.9)" }}>
          <ZoomIn size={18} className="text-white" />
        </div>
      </div>
    </motion.div>
  );
}
