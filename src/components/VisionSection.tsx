"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  GraduationCap,
  Truck,
  Sprout,
  Zap,
  Shield,
  HeartHandshake,
  Download,
  ArrowRight,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const pillars = [
  {
    icon: GraduationCap,
    title: "Education & Skills",
    color: "#006837",
    description:
      "Build new schools, fund scholarships for Lafi/Obi students, and establish vocational training centers that equip youth with 21st-century skills.",
    points: ["100 scholarships annually", "3 new model schools", "Digital literacy programs"],
  },
  {
    icon: Truck,
    title: "Infrastructure",
    color: "#C9A84C",
    description:
      "Rehabilitate federal roads, construct bridges, and ensure reliable electricity and clean water reach every community in the constituency.",
    points: ["Road rehabilitation", "Rural electrification", "Clean water access"],
  },
  {
    icon: Zap,
    title: "Youth Empowerment",
    color: "#008a4a",
    description:
      "Create an enterprise fund for young entrepreneurs, partner with tech companies for internships, and build youth centers across the constituency.",
    points: ["₦500M enterprise fund", "Tech internship pipeline", "Youth centers in 10 LGAs"],
  },
  {
    icon: Sprout,
    title: "Agriculture",
    color: "#C9A84C",
    description:
      "Modernize farming through subsidized inputs, irrigation infrastructure, and guaranteed off-take agreements that secure farmers' livelihoods.",
    points: ["Subsidized farm inputs", "Irrigation projects", "Farmers' cooperative support"],
  },
  {
    icon: Shield,
    title: "Security",
    color: "#006837",
    description:
      "Advocate for increased security personnel, community policing frameworks, and intelligence infrastructure to protect lives and property.",
    points: ["Community policing", "Security infrastructure", "Conflict resolution programs"],
  },
  {
    icon: HeartHandshake,
    title: "Healthcare",
    color: "#008a4a",
    description:
      "Upgrade primary health centers, fund maternal health programs, and ensure every ward has access to basic medical services and trained personnel.",
    points: ["PHC upgrades", "Maternal health programs", "Mobile health clinics"],
  },
];

export default function VisionSection() {
  return (
    <section
      id="vision"
      className="relative w-full py-24 lg:py-32 overflow-hidden"
      style={{ background: "#0a1628" }}
      aria-label="Vision and manifesto section"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionWrapper className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            The Agenda
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Vision &amp; <span className="text-gold-gradient">Manifesto</span>
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Six pillars of transformation for Lafi/Obi — concrete plans, not empty promises.
          </p>
        </SectionWrapper>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} index={i} />
          ))}
        </div>

        {/* Manifesto download CTA */}
        <SectionWrapper delay={0.2}>
          <div
            className="relative rounded-2xl overflow-hidden p-8 sm:p-12 text-center"
            style={{
              background: "linear-gradient(135deg, #004d28 0%, #112240 50%, #004d28 100%)",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            {/* Decorative */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="relative z-10">
              <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-3">
                Full Policy Document
              </p>
              <h3
                className="text-3xl sm:text-4xl font-black text-white mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Download the Complete Manifesto
              </h3>
              <p className="text-white/60 max-w-xl mx-auto mb-8 leading-relaxed">
                Read the full policy agenda for Lafi/Obi Federal Constituency — detailed plans,
                timelines, and accountability frameworks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/manifesto.pdf"
                  download
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white text-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{
                    background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
                    color: "#0a1628",
                    boxShadow: "0 8px 30px rgba(201,168,76,0.3)",
                  }}
                  aria-label="Download manifesto PDF"
                >
                  <Download size={16} />
                  Download Manifesto (PDF)
                </a>
                <button
                  onClick={() => document.getElementById("get-involved")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-sm transition-all duration-300 hover:scale-105"
                  style={{
                    border: "2px solid rgba(255,255,255,0.2)",
                    color: "white",
                    background: "rgba(255,255,255,0.05)",
                  }}
                >
                  Support the Vision
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}

function PillarCard({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = pillar.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative p-6 rounded-2xl card-glow transition-all duration-300 cursor-default"
      style={{
        background: "rgba(17,34,64,0.6)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
      whileHover={{ y: -4, borderColor: "rgba(201,168,76,0.3)" }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${pillar.color}, transparent)` }}
      />

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${pillar.color}20`, border: `1px solid ${pillar.color}40` }}
      >
        <Icon size={22} style={{ color: pillar.color }} />
      </div>

      {/* Content */}
      <h3
        className="text-white font-bold text-lg mb-3"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {pillar.title}
      </h3>
      <p className="text-white/60 text-sm leading-relaxed mb-4">{pillar.description}</p>

      {/* Key points */}
      <ul className="space-y-1.5">
        {pillar.points.map((point) => (
          <li key={point} className="flex items-center gap-2 text-xs text-white/50">
            <div
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: pillar.color }}
            />
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
