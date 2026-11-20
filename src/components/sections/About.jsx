import { Download } from 'lucide-react';
import ScrollReveal, { ScrollRevealItem } from '../ui/ScrollReveal';
import { aboutMe, personalInfo } from '../../data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 px-6 border-t border-[var(--border)]">
      <div className="editorial-container">
        {/* Two-column layout: Large personal portrait on the left, vertically centred content on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Personal Portrait with 4:5 aspect ratio and 24px corner radius */}
          <ScrollReveal className="w-full">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[24px] bg-[var(--bg-secondary)] shadow-sm">
              <img
                src={aboutMe.portrait}
                alt={`${personalInfo.name} — Product Designer`}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          {/* Right Column: Vertically Centred Editorial Narrative with 100ms stagger */}
          <ScrollReveal container stagger={0.1} className="flex flex-col justify-center">
            {/* Section label: sentence case, inheriting exact typography and colour of Selected Work description */}
            <ScrollRevealItem className="text-base sm:text-lg text-[var(--text-muted)] font-normal leading-relaxed mb-4 sm:mb-6 block">
              {aboutMe.label}
            </ScrollRevealItem>

            {/* Main statement: monochromatic, bold, no violet emphasis */}
            <ScrollRevealItem
              as="h2"
              className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-bold tracking-tight text-[var(--text-primary)] leading-[1.25] mb-6 sm:mb-8"
            >
              {aboutMe.statement}
            </ScrollRevealItem>

            {/* Professional introduction */}
            <ScrollRevealItem
              as="p"
              className="text-base sm:text-lg text-[var(--text-muted)] font-normal leading-relaxed mb-8 sm:mb-10"
            >
              {aboutMe.introduction}
            </ScrollRevealItem>

            {/* Core capabilities: compact subtle lavender pill-shaped chips */}
            <ScrollRevealItem className="flex flex-wrap gap-2.5">
              {aboutMe.capabilities.map((capability) => (
                <span
                  key={capability}
                  className="inline-flex items-center px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-[#F3EFFF] dark:bg-[#1C1838] text-[#4B38A8] dark:text-[#C4B5FD] border border-[#E2DBFF] dark:border-[#352B6A] transition-colors"
                >
                  {capability}
                </span>
              ))}
            </ScrollRevealItem>

            {/* Résumé Download Button: 24px gap above, left-aligned with narrative */}
            <ScrollRevealItem className="mt-6">
              <a
                href="/resume.pdf"
                download="Noble_Jose_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border)] hover:border-[var(--accent)] text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] shadow-xs"
                aria-label="Download Noble Jose's résumé PDF"
              >
                <span>Download résumé</span>
                <Download size={15} className="transition-transform group-hover:translate-y-0.5" />
              </a>
            </ScrollRevealItem>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
