"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Globe, Users, BookOpen, Shield, Briefcase } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const timeline = [
  {
    year: "Early Career",
    title: "Community Organizer & Youth Leader",
    description:
      "Began grassroots mobilization in Lafi/Obi, building networks across communities and championing youth development programs.",
    icon: Users,
  },
  {
    year: "Diplomatic Service",
    title: "Ambassador — Federal Republic of Nigeria",
    description:
      "Appointed as Ambassador, representing Nigeria's interests on the international stage and strengthening bilateral relations across multiple continents.",
    icon: Globe,
  },
  {
    year: "Humanitarian Work",
    title: "Founder, Community Development Initiatives",
    description:
      "Established and led multiple humanitarian programs delivering food security, education support, and healthcare access to over 5,000 families across Lafi/Obi.",
    icon: Award,
  },
  {
    year: "Political Leadership",
    title: "APC Chieftain & Constituency Advocate",
    description:
      "Rose to prominence within the All Progressives Congress, championing the interests of Lafi/Obi Federal Constituency at state and national levels.",
    icon: Shield,
  },
  {
    year: "2027",
    title: "House of Representatives Candidate",
    description:
      "Seeking the APC flag bearer ticket to bring experienced, principled leadership to the Nigerian House of Representatives for Lafi/Obi.",
    icon: Briefcase,
  },
];

const credentials = [
  { icon: Globe, label: "Ambassador", sub: "Federal Republic of Nigeria" },
  { icon: BookOpen, label: "Educated Leader", sub: "Advanced Degrees in Law & Diplomacy" },
  { icon: Users, label: "Community Champion", sub: "20+ Years of Service" },
  { icon: Award, label: "APC Chieftain", sub: "All Progressives Congress" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a1628 0%, #112240 50%, #0a1628 100%)" }}
      aria-label="About section"
    >
      {/* Background accent */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "#006837" }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "#C9A84C" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <SectionWrapper className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            The Candidate
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            About Hon. Amb.{" "}
            <span className="text-gold-gradient">Isaac Ali Kigbu</span>
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            A statesman forged by service. A leader shaped by the people of Lafi/Obi.
          </p>
        </SectionWrapper>

        {/* Bio + Photo grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Photo */}
          <SectionWrapper delay={0.1}>
            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #C9A84C, #006837)",
                  padding: "2px",
                }}
              >
                <div className="rounded-2xl overflow-hidden" style={{ background: "#112240" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/about.jpg"
                    alt="Hon. Amb. Isaac Ali Kigbu in official capacity"
                    className="w-full h-[480px] object-cover object-top"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.src = "/images/candidate.jpg";
                      img.onerror = () => {
                        img.style.display = "none";
                        const parent = img.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div style="height:480px;display:flex;align-items:center;justify-content:center;background:linear-gradient(180deg,#112240,#0a1628);"><div style="text-align:center;color:rgba(255,255,255,0.3);"><svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><p style="margin-top:12px;font-size:12px;">Add about.jpg to /public/images/</p></div></div>`;
                        }
                      };
                    }}
                  />
                </div>
              </div>

              {/* Credential badges */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                {credentials.map(({ icon: Icon, label, sub }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 p-3 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(0,104,55,0.2)" }}
                    >
                      <Icon size={16} className="text-[#C9A84C]" />
                    </div>
                    <div>
                      <p className="text-white text-xs font-semibold">{label}</p>
                      <p className="text-white/40 text-xs">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionWrapper>

          {/* Bio text */}
          <SectionWrapper delay={0.2}>
            <div className="space-y-6">
              <div
                className="p-6 rounded-2xl border-l-4 border-[#C9A84C]"
                style={{ background: "rgba(201,168,76,0.06)" }}
              >
                <p
                  className="text-xl sm:text-2xl font-bold text-white leading-relaxed italic"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  &ldquo;My life&rsquo;s work has been in service — to Nigeria, to Lafi/Obi, and to every family
                  that deserves a voice in Abuja. That work continues in 2027.&rdquo;
                </p>
                <p className="text-[#C9A84C] text-sm font-semibold mt-4">
                  — Hon. Amb. Isaac Ali Kigbu
                </p>
              </div>

              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  <strong className="text-white">Hon. Amb. Isaac Ali Kigbu</strong> is a distinguished
                  Nigerian diplomat, community leader, and political figure with over two decades of
                  dedicated public service. Born and raised in the Lafi/Obi Federal Constituency of
                  Kogi State, he has remained deeply connected to the people and communities that
                  shaped him.
                </p>
                <p>
                  His appointment as Ambassador of the Federal Republic of Nigeria placed him among
                  Nigeria&rsquo;s most trusted representatives on the world stage, where he championed
                  trade, diplomacy, and the welfare of Nigerians abroad. His international experience
                  brings a rare global perspective to local governance.
                </p>
                <p>
                  Beyond diplomacy, Isaac Ali Kigbu has been a tireless advocate for the people of
                  Lafi/Obi — funding scholarships, building infrastructure, supporting farmers, and
                  empowering youth. His humanitarian record speaks louder than any campaign promise.
                </p>
                <p>
                  As the APC candidate for the House of Representatives in 2027, he brings a
                  combination of legislative readiness, diplomatic skill, and grassroots credibility
                  that Lafi/Obi has never seen before.
                </p>
              </div>
            </div>
          </SectionWrapper>
        </div>

        {/* Timeline */}
        <SectionWrapper delay={0.1}>
          <h3
            className="text-2xl sm:text-3xl font-bold text-white text-center mb-12"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Career <span className="text-gold-gradient">Milestones</span>
          </h3>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px lg:-translate-x-px"
              style={{ background: "linear-gradient(180deg, transparent, #006837 10%, #C9A84C 50%, #006837 90%, transparent)" }}
            />

            <div className="space-y-8">
              {timeline.map((item, i) => {
                const Icon = item.icon;
                const isLeft = i % 2 === 0;
                return (
                  <TimelineItem key={item.year} item={item} Icon={Icon} isLeft={isLeft} index={i} />
                );
              })}
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}

function TimelineItem({
  item,
  Icon,
  isLeft,
  index,
}: {
  item: (typeof timeline)[0];
  Icon: React.ElementType;
  isLeft: boolean;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={`relative flex items-start gap-6 lg:gap-0 ${
        isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Card */}
      <div className={`pl-12 lg:pl-0 lg:w-[calc(50%-2rem)] ${isLeft ? "lg:pr-8 lg:text-right" : "lg:pl-8"}`}>
        <div
          className="p-5 rounded-xl card-glow transition-all duration-300"
          style={{
            background: "rgba(17,34,64,0.8)",
            border: "1px solid rgba(201,168,76,0.15)",
          }}
        >
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-3"
            style={{ background: "rgba(0,104,55,0.2)", color: "#C9A84C" }}
          >
            {item.year}
          </span>
          <h4 className="text-white font-bold text-base mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            {item.title}
          </h4>
          <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
        </div>
      </div>

      {/* Center dot */}
      <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center z-10 flex-shrink-0"
        style={{ background: "linear-gradient(135deg, #006837, #C9A84C)", boxShadow: "0 0 20px rgba(0,104,55,0.5)" }}
      >
        <Icon size={14} className="text-white" />
      </div>

      {/* Spacer for opposite side */}
      <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
    </motion.div>
  );
}
