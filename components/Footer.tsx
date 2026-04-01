"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const footerLinks = {
  Services: [
    { label: "Appointment Setting", href: "#services" },
    { label: "Lead Generation", href: "#services" },
    { label: "Merchant Payment Solutions", href: "#services" },
    { label: "Inbound Support", href: "#contact" },
  ],
  Company: [
    { label: "Why NexaCall", href: "#why-us" },
    { label: "How It Works", href: "#bpo" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  const router = useRouter();
  const scrollTo = (href: string) => {
    if (!href.startsWith("#")) {
      router.push(href);
      return;
    }
    if (typeof window !== "undefined" && window.location.pathname !== "/") {
      router.push("/" + href);
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-800 border-t border-white/[0.06] relative overflow-hidden">
      {/* Top glow line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(0,208,132,0.4) 50%, transparent 100%)",
        }}
      />

      {/* CTA Banner */}
      <div className="border-b border-white/[0.05]">
        <div className="container-custom py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-1">
                Ready to fill your{" "}
                <span className="text-gradient-green">
                  appointment pipeline?
                </span>
              </h3>
              <p className="text-white/40 text-sm">
                Book a free strategy call — no commitment, just clarity.
              </p>
            </div>
            <button
              onClick={() => scrollTo("#contact")}
              className="btn-primary flex-shrink-0 group"
            >
              Get Started
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-custom py-9">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <button
              onClick={() => scrollTo("#home")}
              className="flex items-center gap-3 mb-4 group"
            >
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 bg-brand-green rounded-lg rotate-45" />
                <div className="absolute inset-[3px] bg-dark-800 rounded-md rotate-45" />
                <span className="absolute inset-0 flex items-center justify-center text-brand-green font-display font-bold text-sm">
                  N
                </span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                Nexa<span className="text-gradient-green">Call</span>
              </span>
            </button>
            <p className="text-white/40 text-sm leading-relaxed mb-5 max-w-xs">
              Prishtina-based appointment setting and lead generation for
              merchant services, payment processors, and MCA providers.
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="tel:+38349725153"
                className="flex items-center gap-2 text-white/45 hover:text-brand-green text-sm transition-colors duration-200"
              >
                <Phone size={13} className="text-brand-green flex-shrink-0" />
                +383 49 725 153
              </a>
              <a
                href="mailto:info@nexacall.com"
                className="flex items-center gap-2 text-white/45 hover:text-brand-green text-sm transition-colors duration-200"
              >
                <Mail size={13} className="text-brand-green flex-shrink-0" />
                info@nexacall.com
              </a>
              <div className="flex items-start gap-2 text-white/45 text-sm">
                <MapPin
                  size={13}
                  className="text-brand-green flex-shrink-0 mt-0.5"
                />
                Rruga B, Prishtina, Kosovo
              </div>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-display font-semibold text-white text-sm mb-4">
                {section}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-white/40 hover:text-white text-sm transition-colors duration-200 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.05]">
        <div className="container-custom py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} NexaCall. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-white/25 hover:text-white/50 text-xs transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/25 hover:text-white/50 text-xs transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
