"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const stats = [
  { value: 5000, suffix: "+", label: "Families Supported", description: "Through food, healthcare & education programs" },
  { value: 20, suffix: "+", label: "Communities Reached", description: "Across Lafi/Obi Federal Constituency" },
  { value: 500, suffix: "+", label: "Scholarships Awarded", description: "To deserving students since 2015" },
  { value: 15, suffix: "+", label: "Infrastructure Projects", description: "Roads, bridges & public facilities" },
];

const testimonials = [
  {
    name: "Mama Ngozi Adaeze",
    role: "Market Trader, Obi LGA",
    quote:
      "When the floods destroyed our market, Amb. Isaac was the first to arrive with relief materials. He didn't wait for government — he acted. That is the kind of leader we need in Abuja.",
    image: "/images/testimonial-1.jpg",
  },
  {
    name: "Alhaji Musa Bello",
    role: "Farmer, Lafi District",
    quote:
      "He gave my son a scholarship when we had nothing. Today my son is an engineer. Isaac Ali Kigbu changed our family's story. He will change Lafi/Obi's story too.",
    image: "/images/testimonial-2.jpg",
  },
  {
    name: "Pastor Emmanuel Okeke",
    role: "Community Leader, Obi",
    quote:
      "In 20 years of community work, I have never seen a politician so committed to the people. He builds bridges — not just roads, but between communities. We trust him completely.",
    image: "/images/testimonial-3.jpg",
  },
  {
    name: "Hajiya Fatima Usman",
    role: "Women's Leader, Lafi",
    quote:
      "Our women's cooperative received support from his foundation when no one else cared. He sees us, he hears us. With him in the House of Representatives, our voices will finally be heard.",
    image: "/images/testimonial-4.jpg",
  },
];

const activities = [
  { src: "/images/activity-1.jpg", alt: "Food distribution to families in Lafi/Obi" },
  { src: "/images/activity-2.jpg", alt: "Scholarship award ceremony" },
  { src: "/images/activity-3.jpg", alt: "Community meeting with constituents" },
  { src: "/images/activity-4.jpg", alt: "Infrastructure project groundbreaking" },
  { src: "/images/activity-5.jpg", alt: "Youth empowerment program" },
  { src: "/images/activity-6.jpg", alt: "Healthcare outreach program" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function ImpactSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const prev = () => setActiveTestimonial((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActiveTestimonial((i) => (i + 1) % testimonials.length);

  return (
    <section
      id="impact"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #112240 0%, #0a1628 100%)" }}
      aria-label="Humanitarian work and community impact section"
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.04] blur-3xl pointer-events-none"
        style={{ background: "#006837" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionWrapper className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Proven Track Record
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Humanitarian Work &amp;{" "}
            <span className="text-gold-gradient">Community Impact</span>
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Before the campaign, there was the commitment. Years of action, not words.
          </p>
        </SectionWrapper>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* Activity photo grid */}
        <SectionWrapper delay={0.1} className="mb-20">
          <h3
            className="text-2xl font-bold text-white text-center mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            In the <span className="text-gold-gradient">Field</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {activities.map((activity, i) => (
              <ActivityPhoto key={activity.src} activity={activity} index={i} />
            ))}
          </div>
        </SectionWrapper>

        {/* Testimonials */}
        <SectionWrapper delay={0.15}>
          <h3
            className="text-2xl font-bold text-white text-center mb-10"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Voices from <span className="text-gold-gradient">the Constituency</span>
          </h3>

          <div className="relative max-w-3xl mx-auto">
            <div
              className="relative p-8 sm:p-12 rounded-2xl overflow-hidden"
              style={{
                background: "rgba(17,34,64,0.8)",
                border: "1px solid rgba(201,168,76,0.15)",
              }}
            >
              {/* Quote icon */}
              <Quote
                size={48}
                className="absolute top-6 left-6 opacity-10"
                style={{ color: "#C9A84C" }}
              />

              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <p
                  className="text-white/90 text-lg sm:text-xl leading-relaxed mb-8 italic"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div
                    className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0"
                    style={{ border: "2px solid #C9A84C" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={testimonials[activeTestimonial].image}
                      alt={testimonials[activeTestimonial].name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const img = e.currentTarget as HTMLImageElement;
                        img.style.display = "none";
                        const parent = img.parentElement;
                        if (parent) {
                          parent.style.background = "linear-gradient(135deg, #006837, #004d28)";
                          parent.style.display = "flex";
                          parent.style.alignItems = "center";
                          parent.style.justifyContent = "center";
                          parent.innerHTML = `<span style="color:#C9A84C;font-size:18px;font-weight:bold;">${testimonials[activeTestimonial].name[0]}</span>`;
                        }
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{testimonials[activeTestimonial].name}</p>
                    <p className="text-[#C9A84C] text-xs">{testimonials[activeTestimonial].role}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} className="text-white" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className="transition-all duration-300 rounded-full"
                    style={{
                      width: i === activeTestimonial ? "24px" : "8px",
                      height: "8px",
                      background: i === activeTestimonial ? "#C9A84C" : "rgba(255,255,255,0.2)",
                    }}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} className="text-white" />
              </button>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}

function StatCard({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative p-6 rounded-2xl text-center group card-glow transition-all duration-300"
      style={{
        background: "rgba(17,34,64,0.6)",
        border: "1px solid rgba(201,168,76,0.12)",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
      />
      <p
        className="text-4xl sm:text-5xl font-black mb-2"
        style={{ fontFamily: "'Playfair Display', serif", color: "#C9A84C" }}
      >
        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
      </p>
      <p className="text-white font-semibold text-sm mb-1">{stat.label}</p>
      <p className="text-white/40 text-xs leading-relaxed">{stat.description}</p>
    </motion.div>
  );
}

function ActivityPhoto({ activity, index }: { activity: (typeof activities)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="relative rounded-xl overflow-hidden group"
      style={{ aspectRatio: index % 3 === 1 ? "4/5" : "4/3" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={activity.src}
        alt={activity.alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        onError={(e) => {
          const img = e.currentTarget as HTMLImageElement;
          img.style.display = "none";
          const parent = img.parentElement;
          if (parent) {
            parent.style.background = "linear-gradient(135deg, #112240, #0a1628)";
            parent.style.display = "flex";
            parent.style.alignItems = "center";
            parent.style.justifyContent = "center";
            parent.innerHTML = `<div style="text-align:center;color:rgba(255,255,255,0.2);padding:16px;"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><p style="font-size:10px;margin-top:8px;">Activity photo</p></div>`;
          }
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-white text-xs font-medium">{activity.alt}</p>
      </div>
    </motion.div>
  );
}
