"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const newsItems = [
  {
    date: "April 15, 2025",
    category: "Campaign",
    headline: "Isaac Ali Kigbu Formally Declares Bid for APC House of Representatives Ticket",
    excerpt:
      "In a packed rally attended by thousands of supporters across Lafi/Obi, Hon. Amb. Isaac Ali Kigbu officially declared his intention to contest the APC primary for the House of Representatives seat.",
    image: "/images/news-1.jpg",
    featured: true,
  },
  {
    date: "March 28, 2025",
    category: "Humanitarian",
    headline: "Kigbu Foundation Distributes Relief Materials to 500 Flood-Affected Families",
    excerpt:
      "The Isaac Ali Kigbu Foundation responded swiftly to recent flooding in Obi LGA, distributing food, clothing, and emergency supplies to over 500 displaced families.",
    image: "/images/news-2.jpg",
    featured: false,
  },
  {
    date: "March 10, 2025",
    category: "Education",
    headline: "50 New Scholarships Awarded to Lafi/Obi Students for 2025 Academic Year",
    excerpt:
      "Fifty deserving students from across the constituency received full scholarships covering tuition, accommodation, and stipends for the 2025/2026 academic year.",
    image: "/images/news-3.jpg",
    featured: false,
  },
  {
    date: "February 20, 2025",
    category: "Infrastructure",
    headline: "Kigbu Advocates for Federal Road Rehabilitation in Lafi/Obi at Abuja Summit",
    excerpt:
      "At a national infrastructure summit in Abuja, Isaac Ali Kigbu made a compelling case for the rehabilitation of key federal roads connecting Lafi and Obi communities.",
    image: "/images/news-4.jpg",
    featured: false,
  },
  {
    date: "January 30, 2025",
    category: "Youth",
    headline: "Youth Empowerment Summit Draws 2,000 Participants from Across the Constituency",
    excerpt:
      "The annual Lafi/Obi Youth Summit, sponsored by the Kigbu Foundation, brought together young entrepreneurs, students, and community leaders for a day of mentorship and opportunity.",
    image: "/images/news-5.jpg",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  Campaign: "#006837",
  Humanitarian: "#C9A84C",
  Education: "#008a4a",
  Infrastructure: "#4a90d9",
  Youth: "#9b59b6",
};

export default function NewsSection() {
  const featured = newsItems[0];
  const rest = newsItems.slice(1);

  return (
    <section
      id="news"
      className="relative w-full py-24 lg:py-32 overflow-hidden"
      style={{ background: "#0a1628" }}
      aria-label="News and updates section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionWrapper className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Stay Informed
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Latest from the <span className="text-gold-gradient">Campaign</span>
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            News, updates, and milestones from the movement to transform Lafi/Obi.
          </p>
        </SectionWrapper>

        {/* Featured article */}
        <SectionWrapper delay={0.1} className="mb-8">
          <FeaturedCard item={featured} />
        </SectionWrapper>

        {/* News grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rest.map((item, i) => (
            <NewsCard key={item.headline} item={item} index={i} />
          ))}
        </div>

        {/* View all CTA */}
        <SectionWrapper delay={0.2} className="text-center mt-12">
          <button
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{
              border: "1px solid rgba(201,168,76,0.3)",
              color: "#C9A84C",
              background: "rgba(201,168,76,0.05)",
            }}
          >
            View All News
            <ArrowRight size={16} />
          </button>
        </SectionWrapper>
      </div>
    </section>
  );
}

function FeaturedCard({ item }: { item: (typeof newsItems)[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const color = categoryColors[item.category] || "#006837";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      style={{ border: "1px solid rgba(201,168,76,0.15)" }}
    >
      <div className="grid lg:grid-cols-2">
        {/* Image */}
        <div className="relative h-64 lg:h-auto overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image}
            alt={item.headline}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              const img = e.currentTarget as HTMLImageElement;
              img.style.display = "none";
              const parent = img.parentElement;
              if (parent) {
                parent.style.background = "linear-gradient(135deg, #112240, #0a1628)";
                parent.style.display = "flex";
                parent.style.alignItems = "center";
                parent.style.justifyContent = "center";
                parent.innerHTML = `<div style="text-align:center;color:rgba(255,255,255,0.15);"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></div>`;
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
          {/* Featured badge */}
          <div
            className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white"
            style={{ background: color }}
          >
            Featured
          </div>
        </div>

        {/* Content */}
        <div
          className="p-8 lg:p-10 flex flex-col justify-center"
          style={{ background: "rgba(17,34,64,0.9)" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
              style={{ background: `${color}20`, color }}
            >
              <Tag size={10} />
              {item.category}
            </span>
            <span className="flex items-center gap-1.5 text-white/40 text-xs">
              <Calendar size={12} />
              {item.date}
            </span>
          </div>

          <h3
            className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-[#C9A84C] transition-colors"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {item.headline}
          </h3>

          <p className="text-white/60 leading-relaxed mb-6">{item.excerpt}</p>

          <button className="inline-flex items-center gap-2 text-[#C9A84C] text-sm font-semibold hover:gap-3 transition-all">
            Read Full Story
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function NewsCard({ item, index }: { item: (typeof newsItems)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const color = categoryColors[item.category] || "#006837";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group rounded-xl overflow-hidden cursor-pointer card-glow transition-all duration-300"
      style={{
        background: "rgba(17,34,64,0.6)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt={item.headline}
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
              parent.innerHTML = `<div style="color:rgba(255,255,255,0.1);"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></div>`;
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span
          className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-xs font-semibold text-white"
          style={{ background: color }}
        >
          {item.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-1.5 text-white/40 text-xs mb-3">
          <Calendar size={11} />
          {item.date}
        </div>
        <h4
          className="text-white font-bold text-sm leading-snug mb-3 group-hover:text-[#C9A84C] transition-colors line-clamp-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {item.headline}
        </h4>
        <p className="text-white/50 text-xs leading-relaxed line-clamp-3">{item.excerpt}</p>
        <button className="mt-4 flex items-center gap-1.5 text-[#C9A84C] text-xs font-semibold hover:gap-2.5 transition-all">
          Read More <ArrowRight size={12} />
        </button>
      </div>
    </motion.div>
  );
}
