import { ArrowDown, ArrowUpRight } from 'lucide-react';
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
    <section id="hero" className="pt-32 sm:pt-40 md:pt-44 pb-20 sm:pb-28 px-6">
      <div className="editorial-container">
        
        {/* Top: Small circular profile photograph + identity */}
        <div className="flex items-center gap-3.5 mb-10 sm:mb-14">
          <img
            src="/noble-avatar.png"
            alt="Noble Jose"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover object-top border border-[var(--border)] shadow-xs"
          />
          <div>
            <div className="text-sm sm:text-base font-semibold text-[var(--text-primary)] leading-tight">
              {personalInfo.name}
            </div>
            <div className="text-xs sm:text-sm text-[var(--text-muted)] mt-0.5 font-normal">
              Product Designer · {personalInfo.location}
            </div>
          </div>
        </div>

        {/* Large, bold, left-aligned Inter headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[84px] font-bold tracking-tight text-[var(--text-primary)] leading-[1.08] mb-14 sm:mb-20">
          Making the complex{' '}
          <span className="text-[#5938F5] dark:text-[#785AFF]">simple</span>.
          <br />
          Making the simple{' '}
          <span className="text-[#5938F5] dark:text-[#785AFF]">meaningful</span>.
        </h1>

        {/* Bottom split: Description at bottom left, Actions at bottom right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pt-4">
          
          {/* Bottom Left: Supporting description */}
          <div className="lg:col-span-7">
            <p className="text-base sm:text-lg md:text-xl text-[var(--text-muted)] font-normal leading-relaxed max-w-xl">
              {personalInfo.bio}
            </p>
          </div>

          {/* Bottom Right: "View my work" and "Get in touch" buttons */}
          <div className="lg:col-span-5 flex flex-wrap items-center gap-3.5 sm:gap-4 lg:justify-end">
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('work')}
              className="bg-[#5938F5] hover:bg-[#4828E0] text-white shadow-sm"
            >
              <span>View my work</span>
              <ArrowDown size={14} />
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              <span>Get in touch</span>
              <ArrowUpRight size={14} className="opacity-60" />
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
}
