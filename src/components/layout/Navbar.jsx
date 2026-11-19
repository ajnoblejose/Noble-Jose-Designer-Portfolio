import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from '../ui/ThemeToggle';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

const navItems = [
  { id: 'work', label: 'Work', href: '/#work' },
  { id: 'about', label: 'About', href: '/#about' },
  { id: 'experience', label: 'Experience', href: '/#experience' },
  { id: 'contact', label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Active section scroll spy
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    const sectionIds = ['work', 'about', 'experience', 'contact'];

    const handleScroll = () => {
      // If near top (hero section), no nav link is active
      const heroEl = document.getElementById('hero');
      const heroBottom = heroEl ? heroEl.getBoundingClientRect().bottom : 300;

      if (window.scrollY < 200 || heroBottom > 150) {
        setActiveSection('');
        return;
      }

      const viewportMid = window.innerHeight * 0.35;
      let currentSection = '';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= viewportMid && rect.bottom >= viewportMid) {
            currentSection = id;
            break;
          }
        }
      }

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100
      ) {
        currentSection = 'contact';
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Return to top on logo click
  const handleLogoClick = (e) => {
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('');
      window.history.pushState(null, '', '/');
    }
  };

  // Smooth scroll handler for anchor links
  const handleNavClick = (e, item) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(item.id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(item.id);
        window.history.pushState(null, '', `#${item.id}`);
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-[var(--border)] bg-[var(--nav-blur)] backdrop-blur-[16px] transition-colors duration-200">
      <nav
        role="navigation"
        aria-label="Main Navigation"
        className="editorial-container h-16 flex items-center justify-between"
      >
        {/* Left: Small circular profile photo and Noble Jose */}
        <Link
          to="/"
          onClick={handleLogoClick}
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-full pr-2 py-1"
          aria-label="Noble Jose — Return to top"
        >
          <img
            src="/noble-avatar.png"
            alt="Noble Jose"
            className="w-8 h-8 rounded-full object-cover object-top border border-[var(--border)] transition-transform duration-200 group-hover:scale-105"
          />
          <span className="text-sm font-semibold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
            {personalInfo.name}
          </span>
        </Link>

        {/* Centre: Work, About, Experience, Contact */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                aria-current={isActive ? 'page' : undefined}
                className={`transition-colors duration-150 py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] rounded ${
                  isActive
                    ? 'text-[var(--text-primary)] font-semibold'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Right: Available for work indicator & minimal theme toggle */}
        <div className="flex items-center gap-4">
          {/* Available for work badge */}
          <div className="hidden sm:inline-flex items-center gap-2 text-xs font-medium text-[var(--text-muted)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[var(--text-primary)]">Available for work</span>
          </div>

          <div className="h-4 w-px bg-[var(--border)] hidden sm:block" />

          {/* Minimal Theme Toggle */}
          <ThemeToggle />

          {/* Mobile hamburger menu */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Collapsible Navigation Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden border-b border-[var(--border)] bg-[var(--bg-card)]/95 backdrop-blur-[16px] px-6 py-4 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-150"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                aria-current={isActive ? 'page' : undefined}
                className={`py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[var(--text-primary)] font-semibold'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                {item.label}
              </a>
            );
          })}

          <div className="pt-3 mt-1 border-t border-[var(--border)] flex items-center justify-between text-xs text-[var(--text-muted)]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[var(--text-primary)] font-medium">Available for work</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
