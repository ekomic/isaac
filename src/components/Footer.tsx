"use client";

import { ArrowUp } from "lucide-react";
import { APCLogo, NigeriaCoatOfArmsInline } from "./Logos";
import { FacebookIcon, TwitterXIcon, InstagramIcon, WhatsAppIcon } from "./SocialIcons";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Vision & Manifesto", href: "#vision" },
  { label: "Community Impact", href: "#impact" },
  { label: "News & Updates", href: "#news" },
  { label: "Gallery", href: "#gallery" },
  { label: "Get Involved", href: "#get-involved" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { Icon: FacebookIcon, href: "https://facebook.com", label: "Facebook", color: "#1877F2" },
  { Icon: TwitterXIcon, href: "https://twitter.com", label: "X / Twitter", color: "#1DA1F2" },
  { Icon: InstagramIcon, href: "https://instagram.com", label: "Instagram", color: "#E1306C" },
  { Icon: WhatsAppIcon, href: "https://wa.me/2348000000000", label: "WhatsApp", color: "#25D366" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ background: "#060e1a", borderTop: "1px solid rgba(201,168,76,0.15)" }}
      role="contentinfo"
    >
      {/* Top accent line */}
      <div className="h-0.5 w-full" style={{ background: "linear-gradient(90deg, transparent, #006837, #C9A84C, #006837, transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-5">
              <NigeriaCoatOfArmsInline className="w-12 h-12" />
              <div className="w-px h-10 bg-gradient-to-b from-transparent via-[#C9A84C]/40 to-transparent" />
              <APCLogo className="w-12 h-12" />
            </div>
            <h3
              className="text-white font-black text-xl mb-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Hon. Amb. Isaac Ali Kigbu
            </h3>
            <p className="text-[#C9A84C] text-sm font-medium mb-4">
              House of Representatives · Lafi/Obi · APC · 2027
            </p>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              A Voice for Lafi/Obi. A Force for Nigeria. Committed to transformative
              representation for every family in the constituency.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                  aria-label={label}
                >
                  <Icon size={16} color={color} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/50 text-sm hover:text-[#C9A84C] transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5">
              Campaign Office
            </h4>
            <div className="space-y-3 text-white/50 text-sm">
              <p>Lafi/Obi Federal Constituency<br />Campaign Headquarters<br />Obi LGA, Kogi State<br />Nigeria</p>
              <p>
                <a href="tel:+2348000000000" className="hover:text-[#C9A84C] transition-colors">
                  +234 800 000 0000
                </a>
              </p>
              <p>
                <a href="mailto:info@isaackigbu2027.ng" className="hover:text-[#C9A84C] transition-colors">
                  info@isaackigbu2027.ng
                </a>
              </p>
            </div>

            {/* APC party info */}
            <div
              className="mt-6 p-4 rounded-xl"
              style={{ background: "rgba(0,104,55,0.1)", border: "1px solid rgba(0,104,55,0.2)" }}
            >
              <p className="text-[#C9A84C] text-xs font-bold tracking-wider uppercase mb-1">Party</p>
              <p className="text-white/70 text-sm">All Progressives Congress (APC)</p>
              <p className="text-white/40 text-xs mt-1">Federal Republic of Nigeria</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full mb-8" style={{ background: "rgba(255,255,255,0.06)" }} />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center">
            <p className="text-white/40 text-xs">
              © 2027 Hon. Amb. Isaac Ali Kigbu Campaign. All Rights Reserved.
            </p>
            <p className="text-white/25 text-xs mt-1">
              Authorized by the Campaign Committee of Hon. Amb. Isaac Ali Kigbu
            </p>
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, #006837, #008a4a)",
              boxShadow: "0 4px 15px rgba(0,104,55,0.3)",
            }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} className="text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
}
