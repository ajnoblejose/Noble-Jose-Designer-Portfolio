import { aboutMe, personalInfo } from '../../data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 px-6 border-t border-[var(--border)]">
      <div className="editorial-container">
        {/* Two-column layout: Large personal portrait on the left, vertically centred content on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Personal Portrait with 4:5 aspect ratio and 24px corner radius */}
          <div className="w-full">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[24px] bg-[var(--bg-secondary)] shadow-sm">
              <img
                src={aboutMe.portrait}
                alt={`${personalInfo.name} — Product Designer`}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Vertically Centred Editorial Narrative */}
          <div className="flex flex-col justify-center">
            {/* Section label: sentence case, inheriting exact typography and colour of Selected Work description */}
            <span className="text-base sm:text-lg text-[var(--text-muted)] font-normal leading-relaxed mb-4 sm:mb-6 block">
              {aboutMe.label}
            </span>

            {/* Main statement: monochromatic, bold, no violet emphasis */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-bold tracking-tight text-[var(--text-primary)] leading-[1.25] mb-6 sm:mb-8">
              {aboutMe.statement}
            </h2>

            {/* Professional introduction */}
            <p className="text-base sm:text-lg text-[var(--text-muted)] font-normal leading-relaxed mb-8 sm:mb-10">
              {aboutMe.introduction}
            </p>

            {/* Core capabilities: compact subtle lavender pill-shaped chips */}
            <div className="flex flex-wrap gap-2.5">
              {aboutMe.capabilities.map((capability) => (
                <span
                  key={capability}
                  className="inline-flex items-center px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-[#F3EFFF] dark:bg-[#1C1838] text-[#4B38A8] dark:text-[#C4B5FD] border border-[#E2DBFF] dark:border-[#352B6A] transition-colors"
                >
                  {capability}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
