"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Upload, CheckCircle, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const POSITIONS = [
  "Appointment Setting Specialist",
  "Lead Generation Agent",
  "Inbound Customer Support Agent",
  "Merchant Services QA Analyst",
  "Other / Open Application",
];

const EXPERIENCE_LEVELS = [
  "No experience - willing to learn",
  "1-2 years",
  "3-5 years",
  "5+ years",
];

const LANGUAGES = [
  "English",
  "Albanian",
  "German",
  "French",
  "Italian",
  "Other",
];

interface FormState {
  position: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  experience: string;
  languages: string[];
  motivation: string;
  cv: File | null;
}

export default function CareersPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>({
    position: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
    languages: [],
    motivation: "",
    cv: null,
  });
  const [cvName, setCvName] = useState("");
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});

  const toggleLanguage = (lang: string) => {
    setForm((f) => ({
      ...f,
      languages: f.languages.includes(lang)
        ? f.languages.filter((l) => l !== lang)
        : [...f.languages, lang],
    }));
  };

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.position) e.position = "Please select a position.";
    if (!form.firstName.trim()) e.firstName = "Required.";
    if (!form.lastName.trim()) e.lastName = "Required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email.";
    if (!form.experience) e.experience = "Please select your experience level.";
    if (form.languages.length === 0)
      e.languages = "Select at least one language.";
    if (!form.cv) e.cv = "Please attach your CV.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const inp =
    "w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-brand-green/50 focus:bg-white/[0.06] transition-all duration-200";
  const lbl =
    "block text-white/50 text-xs font-medium mb-2 uppercase tracking-wider";

  return (
    <>
      <Navbar />
      <main className="bg-dark-900 min-h-screen">
        {/* Hero */}
        <section className="relative pt-36 pb-20 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,208,132,0.09) 0%, transparent 70%)",
            }}
          />
          <div className="absolute inset-0 grid-bg opacity-30" />

          <div className="container-custom relative z-10 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label mb-5 block">
                <span className="w-5 h-[1px] bg-brand-green" />
                We&apos;re Hiring
                <span className="w-5 h-[1px] bg-brand-green" />
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Build Your Career in
                <br />
                <span className="text-gradient-green">Merchant Services</span>
              </h1>
              <p className="text-white/50 text-lg leading-relaxed max-w-2xl mb-8">
                NexaCall is a performance-driven appointment setting operation
                built for the merchant services industry. We hire people who
                take their work seriously, communicate in fluent English, and
                want to grow with a company that rewards results.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  "Fluent English required",
                  "US business hours",
                  "Performance bonuses",
                  "Prishtina office",
                  "Fast career growth",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1.5 text-xs font-medium text-white/50 bg-white/[0.04] border border-white/[0.08] rounded-full px-3 py-1.5"
                  >
                    <CheckCircle size={10} className="text-brand-green" />
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() =>
                  formRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className="btn-primary"
              >
                Apply Now <ArrowRight size={16} />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Form */}
        <section
          ref={formRef}
          className="section-padding"
          style={{
            background:
              "linear-gradient(180deg, #030712 0%, #0a0f1e 60%, #030712 100%)",
          }}
        >
          <div className="container-custom max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <span className="section-label mb-4 block justify-center">
                <span className="w-5 h-[1px] bg-brand-green" />
                Application Form
                <span className="w-5 h-[1px] bg-brand-green" />
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
                Tell Us About Yourself
              </h2>
              <p className="text-white/40 text-sm">
                We review every application personally and reply within 3
                business days.
              </p>
            </motion.div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card gradient-border p-10 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-brand-green/15 border border-brand-green/25 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={28} className="text-brand-green" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  Application Received!
                </h3>
                <p className="text-white/50 text-sm max-w-sm mx-auto mb-6">
                  Thank you for applying. Our team will review your application
                  and get in touch within 3 business days.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-brand-green text-sm font-medium hover:underline"
                >
                  Back to Homepage <ArrowRight size={13} />
                </Link>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                noValidate
                className="glass-card gradient-border p-8 md:p-10 flex flex-col gap-5"
              >
                {/* Position */}
                <div>
                  <label className={lbl}>
                    Position <span className="text-brand-green">*</span>
                  </label>
                  <select
                    value={form.position}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, position: e.target.value }))
                    }
                    className={inp + " appearance-none"}
                  >
                    <option value="" disabled className="bg-dark-800">
                      Select a position...
                    </option>
                    {POSITIONS.map((p) => (
                      <option key={p} value={p} className="bg-dark-800">
                        {p}
                      </option>
                    ))}
                  </select>
                  {errors.position && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.position}
                    </p>
                  )}
                </div>

                {/* First name */}
                <div>
                  <label className={lbl}>
                    First Name <span className="text-brand-green">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.firstName}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, firstName: e.target.value }))
                    }
                    placeholder="First Name"
                    className={inp}
                  />
                  {errors.firstName && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                {/* Last name */}
                <div>
                  <label className={lbl}>
                    Last Name <span className="text-brand-green">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.lastName}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, lastName: e.target.value }))
                    }
                    placeholder="Last Name"
                    className={inp}
                  />
                  {errors.lastName && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className={lbl}>
                    Email <span className="text-brand-green">*</span>
                  </label>
                  <div className="relative">
                    <Mail
                      size={14}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
                    />
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      placeholder="your@email.com"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl pl-9 pr-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-brand-green/50 focus:bg-white/[0.06] transition-all duration-200"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className={lbl}>Phone</label>
                  <div className="relative">
                    <Phone
                      size={14}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
                    />
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, phone: e.target.value }))
                      }
                      placeholder="Phone Number"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl pl-9 pr-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-brand-green/50 focus:bg-white/[0.06] transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <label className={lbl}>
                    Experience Level <span className="text-brand-green">*</span>
                  </label>
                  <select
                    value={form.experience}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, experience: e.target.value }))
                    }
                    className={inp + " appearance-none"}
                  >
                    <option value="" disabled className="bg-dark-800">
                      Select experience level...
                    </option>
                    {EXPERIENCE_LEVELS.map((l) => (
                      <option key={l} value={l} className="bg-dark-800">
                        {l}
                      </option>
                    ))}
                  </select>
                  {errors.experience && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.experience}
                    </p>
                  )}
                </div>

                {/* Languages */}
                <div>
                  <label className={lbl}>
                    Languages Spoken <span className="text-brand-green">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {LANGUAGES.map((lang) => {
                      const active = form.languages.includes(lang);
                      return (
                        <button
                          key={lang}
                          type="button"
                          onClick={() => toggleLanguage(lang)}
                          className={`px-3.5 py-2 rounded-xl text-sm border transition-all duration-200 ${
                            active
                              ? "bg-brand-green/15 border-brand-green/40 text-brand-green font-medium"
                              : "bg-white/[0.04] border-white/[0.08] text-white/45 hover:text-white hover:border-white/20"
                          }`}
                        >
                          {lang}
                        </button>
                      );
                    })}
                  </div>
                  {errors.languages && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.languages}
                    </p>
                  )}
                </div>

                {/* Motivation */}
                <div>
                  <label className={lbl}>
                    Why do you want to join NexaCall?
                  </label>
                  <textarea
                    rows={4}
                    value={form.motivation}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, motivation: e.target.value }))
                    }
                    placeholder="Share your background and what motivates you to join NexaCall."
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-brand-green/50 focus:bg-white/[0.06] transition-all duration-200 resize-none"
                  />
                </div>

                {/* CV Upload */}
                <div>
                  <label className={lbl}>
                    Upload CV <span className="text-brand-green">*</span>
                  </label>
                  <label className="flex items-center justify-center gap-3 border-2 border-dashed border-white/[0.10] rounded-xl p-6 cursor-pointer hover:border-brand-green/30 hover:bg-brand-green/[0.03] transition-all duration-200 group">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="sr-only"
                      onChange={(e) => {
                        const file = e.target.files?.[0] ?? null;
                        setForm((f) => ({ ...f, cv: file }));
                        setCvName(file?.name ?? "");
                      }}
                    />
                    <Upload
                      size={18}
                      className={`flex-shrink-0 transition-colors duration-200 ${
                        cvName
                          ? "text-brand-green"
                          : "text-white/25 group-hover:text-brand-green/60"
                      }`}
                    />
                    <span
                      className={`text-sm transition-colors duration-200 ${
                        cvName ? "text-brand-green" : "text-white/30"
                      }`}
                    >
                      {cvName || "Click to upload PDF, DOC, or DOCX"}
                    </span>
                  </label>
                  {errors.cv && (
                    <p className="text-red-400 text-xs mt-1">{errors.cv}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-primary w-full justify-center mt-2"
                >
                  Submit Application <ArrowRight size={16} />
                </button>
                <p className="text-white/25 text-xs text-center">
                  We treat every application confidentially and respond within 3
                  business days.
                </p>
              </motion.form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
