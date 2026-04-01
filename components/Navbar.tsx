"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const navLinks = [
  { label: "Home", href: "#home" },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Appointment Setting", href: "#services" },
      { label: "Lead Generation", href: "#services" },
      { label: "Merchant Payment Solutions", href: "#services" },
      { label: "Inbound Customer Support", href: "#services" },
      { label: "BPO Solutions", href: "#services" },
    ],
  },
  { label: "About", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (!href.startsWith("#")) {
      router.push(href);
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-dark-900/95 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <button
              onClick={() => {
                if (
                  typeof window !== "undefined" &&
                  window.location.pathname !== "/"
                ) {
                  router.push("/");
                } else {
                  handleNavClick("#home");
                }
              }}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 bg-brand-green rounded-lg rotate-45 group-hover:rotate-[135deg] transition-transform duration-500" />
                <div className="absolute inset-[3px] bg-dark-900 rounded-md rotate-45" />
                <span className="absolute inset-0 flex items-center justify-center text-brand-green font-display font-bold text-sm">
                  N
                </span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                Nexa<span className="text-gradient-green">Call</span>
              </span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() =>
                    link.children && setActiveDropdown(link.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center gap-1 text-white/65 hover:text-white text-sm font-medium px-3.5 py-2 rounded-lg hover:bg-white/[0.05] transition-all duration-200"
                  >
                    {link.label}
                    {link.children && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          activeDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.children && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-56 bg-dark-700/98 backdrop-blur-xl border border-white/[0.08] rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.7)] overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <button
                            key={child.label}
                            onClick={() => handleNavClick(child.href)}
                            className="w-full text-left px-4 py-2.5 text-sm text-white/65 hover:text-white hover:bg-brand-green/10 transition-all duration-150 border-b border-white/[0.04] last:border-0 flex items-center gap-2 group/item"
                          >
                            {child.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+38349725153"
                className="flex items-center gap-2 text-brand-green text-sm font-medium hover:text-white transition-colors duration-200"
              >
                <Phone size={15} />
                +383 49 725 153
              </a>
              <Link
                href="/careers"
                className="text-sm font-medium px-4 py-2.5 rounded-xl border border-brand-green/30 text-brand-green hover:bg-brand-green/10 transition-all duration-200"
              >
                Join Us
              </Link>
              <button
                onClick={() => handleNavClick("#contact")}
                className="btn-primary text-sm py-2.5 px-5"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 text-white/70 hover:text-white hover:border-brand-green/30 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-40 bg-dark-800/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col h-full pt-24 px-6 pb-8">
              <nav className="flex flex-col gap-1 flex-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left text-xl font-display font-medium text-white/80 hover:text-white py-4 border-b border-white/[0.06] hover:text-gradient-green transition-colors duration-200"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>
              <div className="flex flex-col gap-3 pt-6">
                <a
                  href="tel:+38349725153"
                  className="flex items-center justify-center gap-2 text-brand-green font-medium py-3 border border-brand-green/30 rounded-xl"
                >
                  <Phone size={16} />
                  +383 49 725 153
                </a>
                <Link
                  href="/careers"
                  onClick={() => setMobileOpen(false)}
                  className="text-center font-medium py-3 rounded-xl border border-brand-green/30 text-brand-green hover:bg-brand-green/10 transition-all duration-200"
                >
                  Join Us
                </Link>
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="btn-primary justify-center"
                >
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
