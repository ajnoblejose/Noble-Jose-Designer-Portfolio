import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from '../ui/ThemeToggle';
import { Menu, X } from 'lucide-react';

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
  const navigate = useNavigate();
  const mobileMenuRef = useRef(null);

  // Active section spy: highlights work/about/experience/contact, but NEVER the hero
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    const sectionIds = ['work', 'about', 'experience', 'contact'];

    const handleScroll = () => {
      // If within the hero area (near top), do not highlight any link
      const heroEl = document.getElementById('hero');
      const heroBottom = heroEl ? heroEl.getBoundingClientRect().bottom : 300;

      if (window.scrollY < 200 || heroBottom > 220) {
        setActiveSection('');
        return;
      }

      // Check which section is currently centered/active in viewport
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

      // Fallback for near bottom of page (Contact section)
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

  // Wordmark click: returns user to top of the homepage
  const handleWordmarkClick = (e) => {
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('');
      window.history.pushState(null, '', '/');
    } else {
      // If on case study page, navigate home and scroll to top
      e.preventDefault();
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Smooth scroll handler for anchor navigation
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
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      {/* Centred floating pill-shaped navbar: 880px max-width, 64px height, 24px horizontal padding */}
      <nav
        role="navigation"
        aria-label="Main Navigation"
        className="pointer-events-auto w-full max-w-[880px] h-16 px-6 rounded-full border border-[var(--border)] bg-[var(--nav-blur)] backdrop-blur-md shadow-sm flex items-center justify-between transition-colors duration-200"
      >
        {/* Typographic Wordmark: 16px semibold, returns to top of homepage */}
        <Link
          to="/"
          onClick={handleWordmarkClick}
          className="text-[16px] font-semibold tracking-tight text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-md px-1 py-0.5 cursor-pointer"
          aria-label="Noble Jose — Return to top"
        >
          Noble Jose
        </Link>

        {/* Desktop Navigation Links: 14px medium, subtle active background pill only (no dot) */}
        <div className="hidden md:flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                aria-current={isActive ? 'page' : undefined}
                className={`px-3.5 py-1.5 rounded-full text-[14px] font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
                  isActive
                    ? 'text-[var(--text-primary)] bg-[var(--bg-secondary)]'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]/50'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Right Controls: Theme Toggle & Mobile Hamburger */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden p-2 rounded-full text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Collapsible Navigation Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          ref={mobileMenuRef}
          className="pointer-events-auto absolute top-20 left-4 right-4 max-w-[880px] mx-auto md:hidden p-4 rounded-3xl border border-[var(--border)] bg-[var(--bg-card)]/95 backdrop-blur-xl shadow-lg flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                aria-current={isActive ? 'page' : undefined}
                className={`px-4 py-3 rounded-2xl text-[14px] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
                  isActive
                    ? 'text-[var(--text-primary)] bg-[var(--bg-secondary)] font-semibold'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]/50'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
