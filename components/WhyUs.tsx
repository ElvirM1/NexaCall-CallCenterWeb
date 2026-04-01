"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Shield,
  Zap,
  Users,
  Award,
  Clock,
  DollarSign,
  Target,
  HeartHandshake,
} from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Merchant Services DNA",
    description:
      "Our entire team is trained specifically in merchant services, payment processing, ISO programs, and MCA — we speak the industry language fluently from day one.",
    color: "text-brand-green",
    bg: "bg-brand-green/10",
    border: "border-brand-green/15",
  },
  {
    icon: Zap,
    title: "Live in 5 Business Days",
    description:
      "Sign the contract Monday, have trained agents dialing by Friday. Our rapid onboarding model gets your pipeline filling faster than any competitor.",
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    border: "border-brand-teal/15",
  },
  {
    icon: Award,
    title: "Proven 30%+ Conversion",
    description:
      "Our appointment setting teams average a 30–35% contact-to-appointment conversion rate across merchant services campaigns — consistently outperforming industry benchmarks.",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/15",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective Kosovo Base",
    description:
      "Operating from Prishtina gives you Western-quality English-speaking agents at a fraction of US or Western European outsourcing costs, maximizing your ROI per appointment.",
    color: "text-brand-green",
    bg: "bg-brand-green/10",
    border: "border-brand-green/15",
  },
  {
    icon: Clock,
    title: "US Business Hours Coverage",
    description:
      "Our agents work US Eastern and Pacific time zones to reach your merchant prospects during peak decision-making hours — maximizing connect rates and qualified conversations.",
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    border: "border-brand-teal/15",
  },
  {
    icon: Users,
    title: "Dedicated Campaign Teams",
    description:
      "You get a named team exclusively on your program — same agents every day, building familiarity with your offer, your brand voice, and your ideal merchant profile.",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/15",
  },
  {
    icon: Shield,
    title: "Compliant Call Practices",
    description:
      "All outreach follows TCPA, DNC, and relevant industry compliance standards. Your brand reputation and legal standing are protected in every campaign we run.",
    color: "text-brand-green",
    bg: "bg-brand-green/10",
    border: "border-brand-green/15",
  },
  {
    icon: HeartHandshake,
    title: "Performance-Focused Culture",
    description:
      "We measure our success by your closed deals, not call volume. KPIs, live dashboards, and weekly performance reviews keep us accountable to your revenue goals.",
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    border: "border-brand-teal/15",
  },
];

const trustLogos = [
  "Merchant Services ISOs",
  "Payment Processors",
  "MCA Providers",
  "FinTech Platforms",
  "POS Solution Companies",
  "Independent Sales Orgs",
];

function ReasonCard({
  reason,
  index,
}: {
  reason: (typeof reasons)[0];
  index: number;
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const glowRgb =
    reason.color === "text-brand-green"
      ? "0,208,132"
      : reason.color === "text-brand-teal"
        ? "0,201,184"
        : "8,145,178";
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: (index % 4) * 0.07 }}
      className="relative flex items-start gap-5 p-7 rounded-2xl border border-white/[0.07] hover:border-white/[0.14] transition-all duration-300 group overflow-hidden"
      style={{
        background: `linear-gradient(135deg, rgba(${glowRgb},0.05) 0%, rgba(3,7,18,0.9) 100%)`,
      }}
    >
      {/* Left accent bar */}
      <div
        className="absolute left-0 top-8 bottom-8 w-[3px] rounded-r-full opacity-40 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(180deg, rgba(${glowRgb},0.9) 0%, rgba(${glowRgb},0.1) 100%)`,
        }}
      />
      {/* Icon */}
      <div
        className={`flex-shrink-0 w-12 h-12 rounded-xl ${reason.bg} border ${reason.border} flex items-center justify-center mt-0.5 group-hover:scale-105 transition-transform duration-300`}
      >
        <reason.icon size={21} className={reason.color} />
      </div>
      {/* Content */}
      <div className="flex-1">
        <span className="text-white/[0.05] font-display font-black text-5xl absolute top-3 right-5 select-none leading-none pointer-events-none">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="font-display font-semibold text-white text-[15px] mb-2 leading-snug">
          {reason.title}
        </h3>
        <p className="text-white/45 text-sm leading-relaxed">
          {reason.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function WhyUs() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="why-us"
      className="section-padding relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #030712 0%, #0a0f1e 50%, #030712 100%)",
      }}
    >
      {/* Background blobs */}
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(0,201,184,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(0,208,132,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="section-label mb-4 block">
            <span className="w-5 h-[1px] bg-brand-green" />
            Why NexaCall
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            The Appointment Setting Edge
            <br />
            <span className="text-gradient-green">
              Merchant Services Deserve
            </span>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            Choosing the right outbound partner for your merchant services
            program is a make-or-break decision. Here's exactly why NexaCall
            fills more pipelines and closes more deals than the competition.
          </p>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {reasons.map((reason, i) => (
            <ReasonCard key={reason.title} reason={reason} index={i} />
          ))}
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 border border-white/[0.06]"
        >
          <p className="text-center text-white/30 text-xs tracking-widest uppercase mb-5">
            Trusted by companies across the payment ecosystem
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {trustLogos.map((logo, i) => (
              <motion.span
                key={logo}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-white/20 hover:text-white/50 text-sm font-medium transition-colors duration-200 cursor-default"
              >
                {logo}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
