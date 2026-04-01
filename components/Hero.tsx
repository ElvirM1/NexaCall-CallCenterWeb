"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone, Play, CheckCircle2 } from "lucide-react";

const badges = [
  "Merchant Services Specialists",
  "Payment Industry Experts",
  "Kosovo-Based Team",
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const handleContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleServices = () => {
    const el = document.querySelector("#services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-dark-900"
    >
      {/* Background layers */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Grid */}
        <div className="absolute inset-0 grid-bg opacity-100" />

        {/* Green glow orb */}
        <div
          className="glow-orb w-[600px] h-[600px] bg-brand-green/20 -top-32 -left-64"
          style={{ filter: "blur(120px)" }}
        />
        {/* Teal glow orb */}
        <div
          className="glow-orb w-[500px] h-[500px] bg-brand-teal/15 top-1/3 right-0"
          style={{ filter: "blur(100px)" }}
        />
        {/* Blue deep glow */}
        <div
          className="glow-orb w-[400px] h-[400px] bg-brand-blue/10 bottom-0 left-1/3"
          style={{ filter: "blur(80px)" }}
        />

        {/* Concentric rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px]">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-full border border-brand-green/5"
              style={{
                transform: `scale(${0.3 + i * 0.25})`,
                opacity: 1 - i * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 container-custom w-full pt-32 pb-20"
      >
        <div className="max-w-5xl mx-auto">
          {/* Top badge row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-3 mb-8"
          >
            <span className="section-label">
              <span className="w-5 h-[1px] bg-brand-green" />
              Prishtina's #1 Appointment Setting Team
            </span>
            <div className="flex items-center gap-2">
              {badges.map((b) => (
                <span
                  key={b}
                  className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-medium text-white/50 bg-white/[0.04] border border-white/[0.08] rounded-full px-3 py-1"
                >
                  <CheckCircle2 size={10} className="text-brand-green" />
                  {b}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-8"
          >
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight">
              <span className="text-white">We Book the</span>
              <br />
              <span className="text-gradient-green">Meetings.</span>
              <br />
              <span className="text-white">You Close the</span>
              <br />
              <span className="text-gradient-green">Deals.</span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg md:text-xl text-white/55 max-w-2xl leading-relaxed mb-10"
          >
            NexaCall is a Prishtina-based outbound call center specializing in
            high-conversion appointment setting and lead generation for Merchant
            Services, Payment Providers, and Merchant Cash Advance — plus
            dedicated inbound customer support that keeps your clients happy
            24/7.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap items-center gap-4 mb-0"
          >
            <button
              onClick={handleContact}
              className="btn-primary group text-base"
            >
              Book a Strategy Call
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button
              onClick={handleServices}
              className="btn-ghost text-base group"
            >
              <Play
                size={14}
                className="text-brand-green group-hover:scale-110 transition-transform"
              />
              Explore Services
            </button>
            <a
              href="tel:+38349725153"
              className="hidden sm:flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors duration-200"
            >
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                <Phone size={14} />
              </div>
              +383 49 725 153
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/25 text-[10px] tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-brand-green/50 to-transparent" />
      </motion.div>
    </section>
  );
}
