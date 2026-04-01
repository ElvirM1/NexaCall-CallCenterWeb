"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Send,
  MapPin,
  Mail,
  Phone,
  Clock,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

const contactInfo = [
  {
    icon: MapPin,
    label: "Office Location",
    value: "Rruga B",
    sub: "Prishtina, Kosovo",
    color: "text-brand-green",
    bg: "bg-brand-green/10",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@nexacall.com",
    sub: "We reply within 2 hours",
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    href: "mailto:info@nexacall.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+383 49 725 153",
    sub: "Mon–Fri, 8am – 8pm CET",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    href: "tel:+38349725153",
  },
  {
    icon: Clock,
    label: "Operations",
    value: "24/7/365",
    sub: "Support always available",
    color: "text-brand-green",
    bg: "bg-brand-green/10",
  },
];

const services = [
  "Appointment Setting",
  "Lead Generation",
  "Merchant Payment Solutions",
  "Inbound Customer Support",
  "BPO Solutions",
  "Other",
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formState, setFormState] = useState<FormState>("idle");
  const [agreed, setAgreed] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreed) return;
    setFormState("loading");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1800));
    setFormState("success");
    formRef.current?.reset();
    setAgreed(false);
  };

  return (
    <section
      id="contact"
      className="section-padding bg-dark-900 relative overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 grid-bg opacity-40"
        style={{ backgroundSize: "80px 80px" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(0,208,132,0.3) 50%, transparent 100%)",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="section-label mb-4 block justify-center">
            <span className="w-5 h-[1px] bg-brand-green" />
            Get In Touch
            <span className="w-5 h-[1px] bg-brand-green" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Fill Your{" "}
            <span className="text-gradient-green">Pipeline?</span>
          </h2>
          <p className="text-white/50">
            Tell us about your merchant services program and we'll get back to
            you within 2 business hours with a custom appointment setting plan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="glass-card gradient-border p-5 flex items-start gap-4 group"
              >
                <div
                  className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0`}
                >
                  <item.icon size={18} className={item.color} />
                </div>
                <div>
                  <p className="text-white/35 text-xs mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className={`font-medium text-white hover:${item.color} transition-colors`}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium text-white">{item.value}</p>
                  )}
                  <p className="text-white/35 text-xs mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}

            {/* Kosovo map placeholder */}
            <div className="glass-card gradient-border overflow-hidden flex-1 min-h-[200px] relative">
              <div className="absolute inset-0 bg-dark-700" />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 50% 50%, rgba(0,208,132,0.15) 0%, transparent 60%)",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="w-3 h-3 rounded-full bg-brand-green shadow-green-glow animate-pulse-green" />
                <div className="text-center">
                  <p className="text-white/70 font-medium text-sm">
                    Prishtina, Kosovo
                  </p>
                  <p className="text-white/30 text-xs mt-1">
                    42.6629° N, 21.1655° E
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=Pristina,Kosovo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-green text-xs hover:underline"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass-card gradient-border p-8 md:p-10">
              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-green/15 border border-brand-green/30 flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-brand-green" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Message Sent!
                  </h3>
                  <p className="text-white/50 max-w-sm">
                    Thank you for reaching out. Our team will contact you within
                    2 business hours with your custom campaign plan.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="btn-ghost text-sm mt-2"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-white/50 text-xs font-medium mb-2 uppercase tracking-wider">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="First Name"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-brand-green/50 focus:bg-white/[0.06] transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-white/50 text-xs font-medium mb-2 uppercase tracking-wider">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Last Name"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-brand-green/50 focus:bg-white/[0.06] transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-white/50 text-xs font-medium mb-2 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@company.com"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-brand-green/50 focus:bg-white/[0.06] transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-white/50 text-xs font-medium mb-2 uppercase tracking-wider">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-brand-green/50 focus:bg-white/[0.06] transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-white/50 text-xs font-medium mb-2 uppercase tracking-wider">
                      Service of Interest *
                    </label>
                    <select
                      required
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-green/50 focus:bg-white/[0.06] transition-all duration-200 appearance-none"
                      defaultValue=""
                    >
                      <option value="" disabled className="bg-dark-700">
                        Select a service...
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-dark-700">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/50 text-xs font-medium mb-2 uppercase tracking-wider">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your program and goals..."
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-brand-green/50 focus:bg-white/[0.06] transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Agreement */}
                  <div className="flex items-start gap-3">
                    <button
                      type="button"
                      onClick={() => setAgreed(!agreed)}
                      className={`mt-0.5 w-5 h-5 rounded-md border flex-shrink-0 flex items-center justify-center transition-all duration-200 ${
                        agreed
                          ? "bg-brand-green border-brand-green"
                          : "bg-transparent border-white/20 hover:border-brand-green/50"
                      }`}
                      aria-pressed={agreed}
                    >
                      {agreed && (
                        <svg
                          width="10"
                          height="8"
                          viewBox="0 0 10 8"
                          fill="none"
                        >
                          <path
                            d="M1 4L3.5 6.5L9 1"
                            stroke="#030712"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </button>
                    <p className="text-white/40 text-xs leading-relaxed">
                      I agree to the{" "}
                      <a href="#" className="text-brand-green hover:underline">
                        Terms and Conditions
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-brand-green hover:underline">
                        Privacy Policy
                      </a>
                      . NexaCall will process my data to respond to my inquiry.
                    </p>
                  </div>

                  {formState === "error" && (
                    <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                      <AlertCircle size={16} />
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={!agreed || formState === "loading"}
                    className="btn-primary w-full justify-center disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
                  >
                    {formState === "loading" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
