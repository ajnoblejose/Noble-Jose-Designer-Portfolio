import ScrollReveal, { ScrollRevealItem } from '../ui/ScrollReveal';
import { professionalJourney } from '../../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 px-6 border-t border-[var(--border)]">
      <div className="editorial-container">
        {/* Section Header: Matching typography with previous sections */}
        <ScrollReveal className="max-w-2xl mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-tight">
            My professional{' '}
            <span className="text-[#5938F5] dark:text-[#785AFF]">journey</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--text-muted)] font-normal leading-relaxed">
            {professionalJourney.description}
          </p>
        </ScrollReveal>

        {/* Experience List: Clean 3-column rows (25% / 50% / 25%) separated by subtle 1px dividers */}
        <ScrollReveal container stagger={0.1} className="border-t border-[var(--border)]">
          {professionalJourney.experiences.map((exp) => (
            <ScrollRevealItem
              key={exp.id}
              className="border-b border-[var(--border)]"
            >
              <div
                className="group relative min-h-[96px] py-6 sm:py-0 px-4 -mx-4 sm:px-6 sm:-mx-6 rounded-2xl flex flex-col sm:grid sm:grid-cols-12 sm:items-center gap-2 sm:gap-4 transition-all duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:bg-[#F3EFFF]/60 dark:hover:bg-[#1C1838]/60 cursor-default"
              >
                {/* 1. Employment Period: 25% (col-span-3) */}
                <div className="sm:col-span-3 text-sm sm:text-base text-[var(--text-muted)] font-normal">
                  {exp.period}
                </div>

                {/* 2. Designation: 50% (col-span-6) — Moves 4px right and turns violet on hover */}
                <div className="sm:col-span-6">
                  <span className="inline-block text-lg sm:text-xl font-medium tracking-tight text-[var(--text-primary)] transition-all duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#5938F5] dark:group-hover:text-[#785AFF] group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0">
                    {exp.role}
                  </span>
                </div>

                {/* 3. Company: 25% (col-span-3) — Right-aligned on desktop */}
                <div className="sm:col-span-3 sm:text-right text-sm sm:text-base text-[var(--text-muted)] font-normal">
                  {exp.company}
                </div>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
