"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Envelope,
  User,
  Building,
  ChatCircle,
  PaperPlaneTilt,
  DiscordLogo,
  TelegramLogo,
  Globe,
  TwitterLogo,
  GithubLogo,
  LinkedinLogo,
  CheckCircle,
  X,
} from "@phosphor-icons/react";

interface FormData {
  name: string;
  email: string;
  project: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    project: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-md w-full text-center">
            <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-green-400" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
            <p className="text-[var(--color-text-secondary)] mb-8">
              Thank you for reaching out. Our team will get back to you within 24-48 hours.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: "",
                  email: "",
                  project: "",
                  subject: "",
                  message: "",
                });
              }}
              className="px-6 py-3 border border-[var(--color-border)] rounded-xl font-semibold hover:border-[var(--color-border-hover)] transition-colors"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="flex-1 pt-16">
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden hero-bg">
        <div className="glow-orb glow-orb-1" />
        <div className="glow-orb glow-orb-4" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-bg-surface)] border border-[var(--color-border)] mb-6">
            <ChatCircle size={16} className="text-[var(--color-primary)]" />
            <span className="text-sm text-[var(--color-text-secondary)]">Contact Us</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in <span className="text-[var(--color-primary)]">Touch</span>
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl">
            Have a project in mind or want to collaborate? We'd love to hear from you. Fill out the form below and we'll respond within 24-48 hours.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-6 flex-1">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="p-8 bg-[var(--color-bg-surface)] rounded-2xl border border-[var(--color-border)]">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <User size={16} className="inline mr-2" />
                      Name <span className="text-[var(--color-primary)]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`w-full px-4 py-3 bg-[var(--color-bg-primary)] border rounded-xl outline-none transition-colors ${
                        errors.name
                          ? "border-red-500 focus:border-red-500"
                          : "border-[var(--color-border)] focus:border-[var(--color-primary)]"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                        <X size={14} /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Envelope size={16} className="inline mr-2" />
                      Email <span className="text-[var(--color-primary)]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`w-full px-4 py-3 bg-[var(--color-bg-primary)] border rounded-xl outline-none transition-colors ${
                        errors.email
                          ? "border-red-500 focus:border-red-500"
                          : "border-[var(--color-border)] focus:border-[var(--color-primary)]"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                        <X size={14} /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Project */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Building size={16} className="inline mr-2" />
                      Project Name
                    </label>
                    <input
                      type="text"
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      placeholder="Your project or company name (optional)"
                      className="w-full px-4 py-3 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-xl outline-none transition-colors focus:border-[var(--color-primary)]"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <ChatCircle size={16} className="inline mr-2" />
                      Subject <span className="text-[var(--color-primary)]">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className={`w-full px-4 py-3 bg-[var(--color-bg-primary)] border rounded-xl outline-none transition-colors ${
                        errors.subject
                          ? "border-red-500 focus:border-red-500"
                          : "border-[var(--color-border)] focus:border-[var(--color-primary)]"
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                        <X size={14} /> {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message <span className="text-[var(--color-primary)]">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Tell us about your project, partnership idea, or question..."
                      className={`w-full px-4 py-3 bg-[var(--color-bg-primary)] border rounded-xl outline-none transition-colors resize-none ${
                        errors.message
                          ? "border-red-500 focus:border-red-500"
                          : "border-[var(--color-border)] focus:border-[var(--color-primary)]"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                        <X size={14} /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-[var(--color-primary)] text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[var(--color-primary-light)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <PaperPlaneTilt size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="p-6 bg-[var(--color-bg-surface)] rounded-2xl border border-[var(--color-border)]">
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:contact@tron.network"
                    className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    <Envelope size={20} />
                    <span>contact@tron.network</span>
                  </a>
                  <a
                    href="https://discord.gg/tron"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[#5865F2] transition-colors"
                  >
                    <DiscordLogo size={20} />
                    <span>Join Discord</span>
                  </a>
                  <a
                    href="https://t.me/tronfoundation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[#229ED9] transition-colors"
                  >
                    <TelegramLogo size={20} />
                    <span>@tronfoundation</span>
                  </a>
                </div>
              </div>

              <div className="p-6 bg-[var(--color-bg-surface)] rounded-2xl border border-[var(--color-border)]">
                <h3 className="text-lg font-semibold mb-4">Response Time</h3>
                <div className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-400" />
                    <span>General inquiries: 24-48 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-400" />
                    <span>Business partnerships: 1-3 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-400" />
                    <span>Developer support: Same day</span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-[var(--color-bg-surface)] rounded-2xl border border-[var(--color-border)]">
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex items-center gap-4">
                  <a
                    href="https://twitter.com/TronFoundation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-tertiary)] hover:text-[var(--color-primary)] hover:border-[var(--color-border-hover)] transition-all"
                  >
                    <TwitterLogo size={20} />
                  </a>
                  <a
                    href="https://discord.gg/tron"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-tertiary)] hover:text-[#5865F2] hover:border-[#5865F2]/30 transition-all"
                  >
                    <DiscordLogo size={20} />
                  </a>
                  <a
                    href="https://t.me/tronfoundation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-tertiary)] hover:text-[#229ED9] hover:border-[#229ED9]/30 transition-all"
                  >
                    <TelegramLogo size={20} />
                  </a>
                  <a
                    href="https://github.com/tronprotocol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-tertiary)] hover:text-white hover:border-[var(--color-border-hover)] transition-all"
                  >
                    <GithubLogo size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/tron-foundation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-tertiary)] hover:text-[#0A66C2] hover:border-[#0A66C2]/30 transition-all"
                  >
                    <LinkedinLogo size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6 bg-[var(--color-bg-surface)] rounded-2xl border border-[var(--color-border)]">
                <h3 className="text-lg font-semibold mb-3">For Press Inquiries</h3>
                <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                  For media requests, interview opportunities, or press kit access:
                </p>
                <a
                  href="mailto:press@tron.network"
                  className="text-sm text-[var(--color-primary)] hover:underline"
                >
                  press@tron.network
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
      </main>
      <Footer />
    </>
  );
}