"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Heart, CheckCircle, AlertCircle } from "lucide-react";
import { FacebookIcon, TwitterXIcon, InstagramIcon, WhatsAppIcon } from "./SocialIcons";
import SectionWrapper from "./SectionWrapper";

const socialLinks = [
  { Icon: FacebookIcon, label: "Facebook", href: "https://facebook.com", color: "#1877F2" },
  { Icon: TwitterXIcon, label: "X / Twitter", href: "https://twitter.com", color: "#1DA1F2" },
  { Icon: InstagramIcon, label: "Instagram", href: "https://instagram.com", color: "#E1306C" },
  { Icon: WhatsAppIcon, label: "WhatsApp", href: "https://wa.me/2348000000000", color: "#25D366" },
];

type FormState = "idle" | "submitting" | "success" | "error";

export default function GetInvolvedSection() {
  const [volunteerForm, setVolunteerForm] = useState({
    name: "", email: "", phone: "", lga: "", role: "",
  });
  const [volunteerState, setVolunteerState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!volunteerForm.name.trim()) e.name = "Name is required";
    if (!volunteerForm.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(volunteerForm.email)) e.email = "Enter a valid email";
    if (!volunteerForm.phone.trim()) e.phone = "Phone number is required";
    if (!volunteerForm.lga.trim()) e.lga = "LGA is required";
    return e;
  };

  const handleVolunteerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setVolunteerState("submitting");
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setVolunteerState("success");
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-lg text-white text-sm outline-none transition-all duration-200 ${
      errors[field]
        ? "border-red-500/60 bg-red-500/5"
        : "border-white/10 bg-white/5 focus:border-[#C9A84C]/60 focus:bg-white/8"
    }`;

  return (
    <section
      id="get-involved"
      className="relative w-full py-24 lg:py-32 overflow-hidden"
      style={{ background: "#0a1628" }}
      aria-label="Get involved section"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A84C40, transparent)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionWrapper className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Be Part of History
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Get <span className="text-gold-gradient">Involved</span>
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            The movement to transform Lafi/Obi needs you. Volunteer, donate, or spread the word.
          </p>
        </SectionWrapper>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Volunteer form */}
          <SectionWrapper delay={0.1}>
            <div
              className="p-8 rounded-2xl"
              style={{ background: "rgba(17,34,64,0.7)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(0,104,55,0.2)" }}>
                  <Users size={20} className="text-[#C9A84C]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Volunteer Sign-Up
                  </h3>
                  <p className="text-white/40 text-xs">Join the campaign team</p>
                </div>
              </div>

              {volunteerState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <CheckCircle size={48} className="text-[#006837] mx-auto mb-4" />
                  <h4 className="text-white font-bold text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Welcome to the Movement!
                  </h4>
                  <p className="text-white/60 text-sm">
                    Thank you for signing up. Our campaign team will contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleVolunteerSubmit} noValidate className="space-y-4">
                  <div>
                    <label className="block text-white/60 text-xs font-medium mb-1.5" htmlFor="vol-name">Full Name *</label>
                    <input
                      id="vol-name"
                      type="text"
                      placeholder="Your full name"
                      className={inputClass("name")}
                      style={{ border: "1px solid" }}
                      value={volunteerForm.name}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                      aria-describedby={errors.name ? "vol-name-error" : undefined}
                    />
                    {errors.name && <p id="vol-name-error" className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={11} />{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/60 text-xs font-medium mb-1.5" htmlFor="vol-email">Email *</label>
                      <input
                        id="vol-email"
                        type="email"
                        placeholder="your@email.com"
                        className={inputClass("email")}
                        style={{ border: "1px solid" }}
                        value={volunteerForm.email}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                        aria-describedby={errors.email ? "vol-email-error" : undefined}
                      />
                      {errors.email && <p id="vol-email-error" className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={11} />{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-white/60 text-xs font-medium mb-1.5" htmlFor="vol-phone">Phone *</label>
                      <input
                        id="vol-phone"
                        type="tel"
                        placeholder="+234 800 000 0000"
                        className={inputClass("phone")}
                        style={{ border: "1px solid" }}
                        value={volunteerForm.phone}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                        aria-describedby={errors.phone ? "vol-phone-error" : undefined}
                      />
                      {errors.phone && <p id="vol-phone-error" className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={11} />{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/60 text-xs font-medium mb-1.5" htmlFor="vol-lga">LGA / Ward *</label>
                    <input
                      id="vol-lga"
                      type="text"
                      placeholder="Your LGA or ward"
                      className={inputClass("lga")}
                      style={{ border: "1px solid" }}
                      value={volunteerForm.lga}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, lga: e.target.value })}
                      aria-describedby={errors.lga ? "vol-lga-error" : undefined}
                    />
                    {errors.lga && <p id="vol-lga-error" className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={11} />{errors.lga}</p>}
                  </div>

                  <div>
                    <label className="block text-white/60 text-xs font-medium mb-1.5" htmlFor="vol-role">How would you like to help?</label>
                    <select
                      id="vol-role"
                      className="w-full px-4 py-3 rounded-lg text-white text-sm outline-none transition-all duration-200 bg-white/5 border border-white/10 focus:border-[#C9A84C]/60"
                      value={volunteerForm.role}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, role: e.target.value })}
                      style={{ colorScheme: "dark" }}
                    >
                      <option value="" style={{ background: "#112240" }}>Select a role</option>
                      <option value="canvassing" style={{ background: "#112240" }}>Door-to-door canvassing</option>
                      <option value="social-media" style={{ background: "#112240" }}>Social media advocacy</option>
                      <option value="events" style={{ background: "#112240" }}>Event coordination</option>
                      <option value="logistics" style={{ background: "#112240" }}>Logistics & transport</option>
                      <option value="youth" style={{ background: "#112240" }}>Youth mobilization</option>
                      <option value="women" style={{ background: "#112240" }}>Women's outreach</option>
                      <option value="other" style={{ background: "#112240" }}>Other</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={volunteerState === "submitting"}
                    className="w-full py-3.5 rounded-lg font-bold text-white text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ background: "linear-gradient(135deg, #006837, #008a4a)", boxShadow: "0 8px 25px rgba(0,104,55,0.3)" }}
                  >
                    {volunteerState === "submitting" ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Submitting...
                      </span>
                    ) : "Join the Movement"}
                  </button>
                </form>
              )}
            </div>
          </SectionWrapper>

          {/* Donation + Social */}
          <div className="space-y-6">
            {/* Donation CTA */}
            <SectionWrapper delay={0.15}>
              <div
                className="relative p-8 rounded-2xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #004d28 0%, #112240 100%)",
                  border: "1px solid rgba(201,168,76,0.2)",
                }}
              >
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: "repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)",
                  backgroundSize: "16px 16px",
                }} />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(201,168,76,0.15)" }}>
                      <Heart size={20} className="text-[#C9A84C]" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>Support the Campaign</h3>
                      <p className="text-white/40 text-xs">Every contribution counts</p>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    Your donation funds rallies, outreach programs, and the infrastructure needed to
                    win in 2027. No amount is too small — every naira brings us closer to victory.
                  </p>
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {["₦5,000", "₦10,000", "₦50,000"].map((amount) => (
                      <button
                        key={amount}
                        className="py-2.5 rounded-lg text-sm font-semibold transition-all hover:scale-105"
                        style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)", color: "#C9A84C" }}
                      >
                        {amount}
                      </button>
                    ))}
                  </div>
                  <button
                    className="w-full py-3.5 rounded-lg font-bold text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                    style={{
                      background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
                      color: "#0a1628",
                      boxShadow: "0 8px 25px rgba(201,168,76,0.25)",
                    }}
                  >
                    Donate Now
                  </button>
                </div>
              </div>
            </SectionWrapper>

            {/* Social media */}
            <SectionWrapper delay={0.2}>
              <div
                className="p-8 rounded-2xl"
                style={{ background: "rgba(17,34,64,0.7)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Follow &amp; Share
                </h3>
                <p className="text-white/50 text-sm mb-6">
                  Amplify the message. Follow us on social media and share with your network.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map(({ Icon, label, href, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3.5 rounded-xl transition-all duration-200 hover:scale-105 group"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                      aria-label={`Follow on ${label}`}
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                        style={{ background: `${color}20` }}
                      >
                        <Icon size={18} color={color} />
                      </div>
                      <span className="text-white/70 text-sm font-medium group-hover:text-white transition-colors">{label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
