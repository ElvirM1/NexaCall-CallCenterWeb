"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ClipboardList,
  UserCheck,
  Rocket,
  BarChart2,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Campaign Discovery",
    description:
      "We learn your offer, target merchant profile, ideal decision-maker persona, and KPIs. Then we build a custom calling script and outreach cadence designed for maximum appointment conversion.",
    duration: "Day 1–2",
    color: "text-brand-green",
    bg: "bg-brand-green/10",
    border: "border-brand-green/20",
  },
  {
    step: "02",
    icon: UserCheck,
    title: "Agent Training & Script QA",
    description:
      "We hand-pick agents with merchant services experience and run intensive product training, live script rehearsals, and objection-handling drills until your campaign is pitch-perfect.",
    duration: "Day 2–5",
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    border: "border-brand-teal/20",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Go-Live & First Appointments",
    description:
      "Agents start dialing. Your first confirmed appointments land in the calendar within the opening days. Real-time QA supervision and daily feedback loops keep conversion rates climbing.",
    duration: "Day 5+",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/20",
  },
  {
    step: "04",
    icon: BarChart2,
    title: "Optimize & Scale",
    description:
      "Weekly performance reviews, A/B tested scripts, and data-driven dialing strategies continuously improve conversion rates. Scale agent headcount as your pipeline grows.",
    duration: "Ongoing",
    color: "text-brand-green",
    bg: "bg-brand-green/10",
    border: "border-brand-green/20",
  },
];

export default function Process() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="bpo"
      className="section-padding bg-dark-900 relative overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center bottom, rgba(0,208,132,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-label mb-4 block justify-center">
            <span className="w-5 h-[1px] bg-brand-green" />
            How We Work
            <span className="w-5 h-[1px] bg-brand-green" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
            From Brief to
            <br />
            <span className="text-gradient-green">
              Booked Appointments in 5 Days
            </span>
          </h2>
          <p className="text-white/50 text-lg">
            Our proven 4-step launch process gets qualified merchant
            appointments landing in your calendar before the end of week one.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-0 right-0 h-[1px] bg-gradient-to-r from-brand-green/30 via-brand-teal/30 to-brand-blue/20 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, i) => {
              const [ref, inView] = useInView({
                triggerOnce: true,
                threshold: 0.15,
              });
              return (
                <motion.div
                  key={step.step}
                  ref={ref}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex flex-col"
                >
                  {/* Icon + step number */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`relative w-14 h-14 rounded-2xl ${step.bg} border ${step.border} flex items-center justify-center`}
                    >
                      <step.icon size={22} className={step.color} />
                      <span
                        className={`absolute -top-2 -right-2 text-[10px] font-bold ${step.color} bg-dark-900 border ${step.border} rounded-full w-5 h-5 flex items-center justify-center`}
                      >
                        {step.step.replace("0", "")}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <ArrowRight
                        size={14}
                        className="text-white/10 hidden lg:block ml-auto"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="glass-card p-6 border border-white/[0.05] hover:border-brand-green/20 transition-all duration-300 flex-1">
                    <div
                      className={`text-xs font-medium ${step.color} mb-3 bg-white/[0.03] rounded-full px-2.5 py-1 inline-block`}
                    >
                      {step.duration}
                    </div>
                    <h3 className="font-display font-bold text-white text-base mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white/45 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-white/35 text-sm mb-4">
            Ready to start? Your first appointments can be in the calendar
            within 5 business days.
          </p>
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary"
          >
            Book Your Free Campaign Strategy Call
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
