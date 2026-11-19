import { ArrowDown, Download, ArrowUpRight } from 'lucide-react';
import Button from '../ui/Button';
import { personalInfo } from '../../data/portfolio';

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-36 sm:pt-44 pb-20 sm:pb-28 px-6">
      <div className="editorial-container">
        <div className="max-w-3xl">
          {/* Subtle status & location indicator */}
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] mb-8">
            <span>(01)</span>
            <span className="text-[var(--text-subtle)]">—</span>
            <span>{personalInfo.location}</span>
            <span className="text-[var(--text-subtle)]">·</span>
            <span className="text-[var(--text-primary)]">{personalInfo.availability}</span>
          </div>

          {/* Editorial Display Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[var(--text-primary)] leading-[1.12] mb-8">
            Digital product designer crafting scalable systems and{' '}
            <span className="italic font-normal text-[var(--accent)]">
              thoughtful
            </span>{' '}
            interfaces.
          </h1>

          {/* Subheadline copy */}
          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed font-normal mb-12 max-w-2xl">
            {personalInfo.bio}
          </p>

          {/* Minimalist actions */}
          <div className="flex flex-wrap items-center gap-4">
            <Button
              variant="primary"
              size="md"
              onClick={() => scrollToSection('work')}
            >
              <span>Selected Work</span>
              <ArrowDown size={13} />
            </Button>

            <Button
              variant="secondary"
              size="md"
              href="/resume.pdf"
              download="Noble_Jose_Resume.pdf"
            >
              <span>Download Resume</span>
              <Download size={13} />
            </Button>

            <a
              href={`mailto:${personalInfo.email}`}
              className="text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors px-3 py-2 flex items-center gap-1"
            >
              <span>{personalInfo.email}</span>
              <ArrowUpRight size={12} className="opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
