"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle, Send } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

type FormState = "idle" | "submitting" | "success" | "error";

const contactInfo = [
  {
    icon: MapPin,
    label: "Campaign Office",
    value: "Lafi/Obi Federal Constituency Campaign HQ\nObi LGA, Kogi State, Nigeria",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 800 000 0000\n+234 800 000 0001",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@isaackigbu2027.ng\ncampaign@isaackigbu2027.ng",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Monday – Friday: 8am – 6pm\nSaturday: 9am – 3pm",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setFormState("submitting");
    await new Promise((r) => setTimeout(r, 1500));
    setFormState("success");
  };

  const inputBase = "w-full px-4 py-3 rounded-lg text-white text-sm outline-none transition-all duration-200 bg-white/5 border";
  const inputClass = (field: string) =>
    `${inputBase} ${errors[field] ? "border-red-500/60" : "border-white/10 focus:border-[#C9A84C]/60"}`;

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #112240 0%, #0a1628 100%)" }}
      aria-label="Contact section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionWrapper className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Reach Out
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Contact <span className="text-gold-gradient">the Campaign</span>
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Have a question, partnership proposal, or want to connect? We&rsquo;d love to hear from you.
          </p>
        </SectionWrapper>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <SectionWrapper delay={0.1} className="lg:col-span-2">
            <div className="space-y-5">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex gap-4 p-5 rounded-xl"
                  style={{ background: "rgba(17,34,64,0.6)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(0,104,55,0.2)" }}
                  >
                    <Icon size={18} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-[#C9A84C] text-xs font-semibold tracking-wider uppercase mb-1">{label}</p>
                    {value.split("\n").map((line, i) => (
                      <p key={i} className="text-white/70 text-sm">{line}</p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div
                className="rounded-xl overflow-hidden"
                style={{ border: "1px solid rgba(255,255,255,0.07)", height: "200px" }}
              >
                <div
                  className="w-full h-full flex flex-col items-center justify-center gap-3"
                  style={{ background: "rgba(17,34,64,0.6)" }}
                >
                  <MapPin size={32} className="text-[#C9A84C] opacity-60" />
                  <div className="text-center">
                    <p className="text-white/60 text-sm font-medium">Lafi/Obi Federal Constituency</p>
                    <p className="text-white/30 text-xs mt-1">Kogi State, Nigeria</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Obi+LGA+Kogi+State+Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all hover:scale-105"
                    style={{ background: "rgba(0,104,55,0.3)", color: "#C9A84C", border: "1px solid rgba(0,104,55,0.4)" }}
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </SectionWrapper>

          {/* Contact form */}
          <SectionWrapper delay={0.15} className="lg:col-span-3">
            <div
              className="p-8 rounded-2xl"
              style={{ background: "rgba(17,34,64,0.7)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <h3 className="text-white font-bold text-xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Send a Message
              </h3>

              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle size={52} className="text-[#006837] mx-auto mb-4" />
                  <h4 className="text-white font-bold text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Message Received!
                  </h4>
                  <p className="text-white/60 text-sm max-w-sm mx-auto">
                    Thank you for reaching out. A member of our campaign team will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => { setFormState("idle"); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                    className="mt-6 px-6 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:scale-105"
                    style={{ background: "rgba(0,104,55,0.3)", border: "1px solid rgba(0,104,55,0.4)" }}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/60 text-xs font-medium mb-1.5" htmlFor="contact-name">Full Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="Your full name"
                        className={inputClass("name")}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={11} />{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-white/60 text-xs font-medium mb-1.5" htmlFor="contact-email">Email *</label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="your@email.com"
                        className={inputClass("email")}
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={11} />{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/60 text-xs font-medium mb-1.5" htmlFor="contact-phone">Phone</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="+234 800 000 0000"
                        className={inputClass("phone")}
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 text-xs font-medium mb-1.5" htmlFor="contact-subject">Subject</label>
                      <input
                        id="contact-subject"
                        type="text"
                        placeholder="What is this about?"
                        className={inputClass("subject")}
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/60 text-xs font-medium mb-1.5" htmlFor="contact-message">Message *</label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder="Your message..."
                      className={`${inputClass("message")} resize-none`}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={11} />{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full py-3.5 rounded-lg font-bold text-white text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={{ background: "linear-gradient(135deg, #006837, #008a4a)", boxShadow: "0 8px 25px rgba(0,104,55,0.3)" }}
                  >
                    {formState === "submitting" ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
}
