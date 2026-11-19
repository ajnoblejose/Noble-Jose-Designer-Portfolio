import { useState } from 'react';
import { personalInfo } from '../../data/portfolio';
import { ArrowUpRight, Copy, Check, Download, Mail, Phone, MapPin } from 'lucide-react';
import Button from '../ui/Button';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 px-6 border-t border-[var(--border)]">
      <div className="editorial-container">
        <div className="max-w-2xl">
          {/* Section index */}
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] mb-6">
            <span>(05)</span>
            <span className="text-[var(--text-subtle)]">—</span>
            <span>Contact & Inquiries</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[var(--text-primary)] leading-tight mb-6">
            Let's work together.
          </h2>

          <p className="text-base text-[var(--text-muted)] leading-relaxed mb-10 font-normal">
            I am currently open to senior UI/UX design opportunities, design system architecture, and product strategy discussions. Reach out directly via email or phone.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-12">
            <Button
              variant="primary"
              size="md"
              href={`mailto:${personalInfo.email}`}
            >
              <Mail size={13} />
              <span>Send an Email</span>
            </Button>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-mono border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--text-muted)] transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check size={12} className="text-[var(--accent)]" />
                  <span className="text-[var(--accent)]">Copied to clipboard</span>
                </>
              ) : (
                <>
                  <Copy size={12} className="opacity-60" />
                  <span>{personalInfo.email}</span>
                </>
              )}
            </button>

            <Button
              variant="secondary"
              size="md"
              href="/resume.pdf"
              download="Noble_Jose_Resume.pdf"
            >
              <Download size={13} />
              <span>Resume PDF</span>
            </Button>
          </div>

          {/* Direct Details & Social Links */}
          <div className="pt-8 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-6 text-xs font-mono text-[var(--text-muted)]">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5">
                <Phone size={12} className="text-[var(--accent)]" />
                <span>{personalInfo.phone}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={12} className="text-[var(--accent)]" />
                <span>{personalInfo.location}</span>
              </span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ArrowUpRight size={11} className="opacity-50" />
              </a>

              <a
                href={personalInfo.links.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-1"
              >
                <span>Dribbble</span>
                <ArrowUpRight size={11} className="opacity-50" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
