"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  CalendarCheck,
  Target,
  CreditCard,
  Headphones,
  Briefcase,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    id: "01",
    icon: CalendarCheck,
    label: "Appointment Setting",
    description:
      "We cold-call, warm-call, and multi-touch your prospects to schedule qualified, confirmed appointments directly onto your sales team's calendar — for Merchant Services, ISO programs, and Payment Processors.",
    features: [
      "Qualified decision-maker calls",
      "Calendar integration (Calendly etc.)",
      "Confirmation & reminder calls",
    ],
    color: "brand-green",
    gradient: "from-brand-green/20 to-transparent",
    glow: "rgba(0, 208, 132, 0.15)",
    href: "#contact",
  },
  {
    id: "02",
    icon: Target,
    label: "Lead Generation",
    description:
      "Targeted outbound prospecting that identifies and qualifies high-intent leads in the merchant services and payment space — delivering a steady, predictable pipeline to your closers.",
    features: [
      "Industry-specific prospect lists",
      "Multi-stage qualification scripts",
      "Real-time lead delivery",
    ],
    color: "brand-teal",
    gradient: "from-brand-teal/20 to-transparent",
    glow: "rgba(0, 201, 184, 0.15)",
    href: "#contact",
  },
  {
    id: "03",
    icon: CreditCard,
    label: "Merchant Payment Solutions",
    description:
      "Deep-industry outreach for payment processors, ISOs, and Merchant Cash Advance providers. We understand the merchant lifecycle, objection patterns, and how to position your offer for maximum uptake.",
    features: [
      "MCA & ISO campaign expertise",
      "Merchant Services cold outreach",
      "Compliance-aware scripts",
    ],
    color: "brand-blue",
    gradient: "from-brand-blue/20 to-transparent",
    glow: "rgba(8, 145, 178, 0.15)",
    href: "#contact",
  },
  {
    id: "04",
    icon: Headphones,
    label: "Inbound Customer Support",
    description:
      "Round-the-clock inbound support that keeps your merchant clients satisfied and reduces churn. Our trained agents handle inquiries, escalations, and retention calls with professionalism.",
    features: [
      "24/7 live agent coverage",
      "Merchant retention calls",
      "Escalation handling",
    ],
    color: "brand-green",
    gradient: "from-brand-green/20 to-transparent",
    glow: "rgba(0, 208, 132, 0.15)",
    href: "#contact",
  },
  {
    id: "05",
    icon: Briefcase,
    label: "BPO Solutions",
    description:
      "Full-service back-office outsourcing designed to reduce your operational overhead while maintaining quality. From data entry to CRM management, we handle the processes that slow your growth.",
    features: [
      "CRM data management",
      "Back-office processing",
      "Workflow automation",
    ],
    color: "brand-teal",
    gradient: "from-brand-teal/20 to-transparent",
    glow: "rgba(0, 201, 184, 0.15)",
    href: "#contact",
  },
];

const colorMap: Record<string, string> = {
  "brand-green": "text-brand-green",
  "brand-teal": "text-brand-teal",
  "brand-blue": "text-brand-blue",
};

const bgMap: Record<string, string> = {
  "brand-green": "bg-brand-green/10 border-brand-green/20",
  "brand-teal": "bg-brand-teal/10 border-brand-teal/20",
  "brand-blue": "bg-brand-blue/10 border-brand-blue/20",
};

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleClick = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="glass-card gradient-border p-7 group cursor-pointer hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
      onClick={handleClick}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div
          className={`w-12 h-12 rounded-xl border ${bgMap[service.color]} flex items-center justify-center`}
        >
          <service.icon size={22} className={colorMap[service.color]} />
        </div>
        <span className="text-white/15 font-display font-bold text-3xl">
          {service.id}
        </span>
      </div>

      {/* Content */}
      <h3 className="font-display font-bold text-lg text-white mb-3">
        {service.label}
      </h3>
      <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">
        {service.description}
      </p>

      {/* Features */}
      <ul className="grid grid-cols-2 gap-y-2 gap-x-3 mb-6">
        {service.features.map((f) => (
          <li
            key={f}
            className="flex items-center gap-1.5 text-xs text-white/40"
          >
            <CheckCircle size={11} className={colorMap[service.color]} />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div
        className={`flex items-center gap-1.5 text-sm font-medium ${colorMap[service.color]} group-hover:gap-3 transition-all duration-200`}
      >
        Learn more
        <ArrowRight size={14} />
      </div>
    </motion.div>
  );
}

export default function Services() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="services"
      className="section-padding bg-dark-900 relative overflow-hidden"
    >
      {/* Background accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,208,132,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-label mb-4 block">
            <span className="w-5 h-[1px] bg-brand-green" />
            What We Offer
            <span className="w-5 h-[1px] bg-brand-green" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
            Specialized Services
            <br />
            <span className="text-gradient-green">
              Built for Merchant Growth
            </span>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            From cold outreach to confirmed appointments and full back-office
            support — NexaCall covers every revenue-generating touchpoint in the
            merchant services and payment industry.
          </p>
        </motion.div>

        {/* Services grid — 3 top row + 2 centered bottom row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`sm:col-span-1 lg:col-span-2${
                i === 3 ? " lg:col-start-2" : ""
              }`}
            >
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 glass-card gradient-border p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-display text-xl font-bold text-white mb-1">
              Not sure which solution fits your pipeline?
            </h3>
            <p className="text-white/50 text-sm">
              Our specialists will design a custom appointment setting or lead
              gen program around your exact offer and target market.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary flex-shrink-0"
          >
            Get a Free Consultation
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
