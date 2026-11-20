import { Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 px-6 border-t border-[var(--border)]">
      <div className="editorial-container">
        <ScrollReveal className="w-full">
          {/* Minimal Dark Contact Container: #111111, 32px corner radius, 64px desktop / 24px mobile padding */}
          <div className="rounded-[32px] bg-[#111111] text-white p-6 sm:p-12 md:p-16 border border-[#262626] shadow-2xl relative overflow-hidden">
            {/* Section label: inherits typography from About Me label */}
            <span className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed mb-4 sm:mb-6 block">
              Contact
            </span>

            {/* Main heading: Let's build something meaningful together. */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight text-white leading-[1.1] mb-8 sm:mb-10 max-w-4xl">
              Let&apos;s build something{' '}
              <span className="text-[#785AFF]">meaningful</span> together.
            </h2>

            {/* Email address: Prominently displayed and clickable with subtle underline hover */}
            <div className="mb-10 sm:mb-12">
              <a
                href="mailto:ajninck@gmail.com"
                className="text-xl sm:text-2xl md:text-3xl font-medium text-white/90 hover:text-white transition-colors duration-300 underline-offset-8 decoration-white/30 hover:decoration-white hover:underline inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#785AFF] rounded"
                aria-label="Send email to ajninck@gmail.com"
              >
                ajninck@gmail.com
              </a>
            </div>

            {/* Social CTA buttons: Side by side with 12px gap */}
            <div className="flex flex-wrap items-center gap-3">
              {/* LinkedIn: Primary violet-filled pill button with glow on hover */}
              <a
                href="https://www.linkedin.com/in/ajnoblejose/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#5938F5] text-white text-sm font-medium transition-all duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(89,56,245,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white motion-reduce:hover:translate-y-0"
                aria-label="View LinkedIn profile (opens in new tab)"
              >
                <Linkedin size={16} className="text-white" />
                <span>LinkedIn</span>
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
                />
              </a>

              {/* Instagram: Secondary outlined pill button */}
              <a
                href="https://www.instagram.com/jnr.landloper/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-white/20 text-white bg-transparent text-sm font-medium transition-all duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:bg-white/10 hover:border-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="View Instagram profile (opens in new tab)"
              >
                <Instagram size={16} className="text-white" />
                <span>Instagram</span>
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
                />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
