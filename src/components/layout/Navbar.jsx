import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from '../ui/ThemeToggle';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

const navLinks = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleNavClick = (e, href) => {
    if (href.startsWith('/#')) {
      if (location.pathname !== '/') {
        return; // Normal route transition
      }
      e.preventDefault();
      const targetId = href.replace('/#', '');
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        aria-label="Primary Navigation"
        className={`pointer-events-auto flex items-center justify-between gap-6 px-5 py-2.5 rounded-full border transition-all duration-300 max-w-xl w-full sm:w-auto ${
          scrolled
            ? 'backdrop-blur-md bg-[var(--nav-blur)] border-[var(--border)] shadow-sm'
            : 'backdrop-blur-sm bg-[var(--nav-blur)] border-[var(--border)]'
        }`}
      >
        {/* Name / Monogram */}
        <Link
          to="/"
          className="flex items-center gap-2 group text-xs font-mono font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
        >
          <span className="w-6 h-6 rounded-full border border-[var(--border)] flex items-center justify-center font-mono text-[10px] bg-[var(--bg-secondary)]">
            NJ
          </span>
          <span className="tracking-tight">{personalInfo.name}</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden sm:flex items-center gap-5 text-xs text-[var(--text-muted)]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-[var(--text-primary)] transition-colors py-0.5"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right utilities: Theme Toggle & Resume */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <a
            href="/resume.pdf"
            download="Noble_Jose_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] px-2.5 py-1 rounded-full border border-transparent hover:border-[var(--border)] transition-colors"
          >
            <span>Resume</span>
            <ArrowUpRight size={11} className="opacity-60" />
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="sm:hidden p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-16 left-4 right-4 sm:hidden p-5 rounded-2xl border border-[var(--border)] bg-[var(--bg-primary)]/95 backdrop-blur-xl shadow-lg flex flex-col gap-3">
          <div className="flex flex-col gap-1 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  handleNavClick(e, link.href);
                  setMobileMenuOpen(false);
                }}
                className="px-3 py-2 rounded-lg text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between text-xs font-mono">
            <a
              href="/resume.pdf"
              download="Noble_Jose_Resume.pdf"
              className="text-[var(--text-muted)] hover:text-[var(--accent)] flex items-center gap-1"
            >
              Download Resume PDF <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
