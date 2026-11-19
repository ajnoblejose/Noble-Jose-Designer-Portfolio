import { personalInfo } from '../../data/portfolio';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--border)] py-12 px-6 bg-[var(--bg-primary)]">
      <div className="editorial-container">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs font-mono text-[var(--text-muted)]">
          <div className="flex items-center gap-3">
            <span className="text-[var(--text-primary)] font-medium">
              {personalInfo.name}
            </span>
            <span className="text-[var(--text-subtle)]">·</span>
            <span>{personalInfo.role}</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="/resume.pdf"
              download="Noble_Jose_Resume.pdf"
              className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-1"
            >
              <span>Resume PDF</span>
              <ArrowUpRight size={11} className="opacity-50" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp size={11} />
            </button>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] font-mono text-[var(--text-subtle)]">
          <p>© {new Date().getFullYear()} Noble Jose. Trivandrum, Kerala, India.</p>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-[var(--text-muted)] transition-colors"
          >
            {personalInfo.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
