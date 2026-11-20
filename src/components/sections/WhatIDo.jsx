import {
  Compass,
  Users,
  Layout,
  Component,
  MousePointerClick,
  Sparkles,
} from 'lucide-react';
import ScrollReveal, { ScrollRevealItem } from '../ui/ScrollReveal';
import { whatIDo } from '../../data/portfolio';

const iconMap = {
  Compass,
  Users,
  Layout,
  Component,
  MousePointerClick,
  Sparkles,
};

export default function WhatIDo() {
  return (
    <section id="services" className="py-20 sm:py-28 px-6 border-t border-[var(--border)]">
      <div className="editorial-container">
        {/* Section Header: Matching typography with Selected Work */}
        <ScrollReveal className="max-w-2xl mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-tight">
            What I do{' '}
            <span className="text-[#5938F5] dark:text-[#785AFF]">best</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--text-muted)] font-normal leading-relaxed">
            {whatIDo.description}
          </p>
        </ScrollReveal>

        {/* Capability Cards Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <ScrollReveal
          container
          stagger={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {whatIDo.capabilities.map((item) => {
            const Icon = iconMap[item.icon] || Sparkles;

            return (
              <ScrollRevealItem key={item.id} className="h-full">
                <div
                  className="group relative h-full flex flex-col justify-between p-7 rounded-[24px] bg-[var(--bg-card)] border border-[var(--border)] transition-all duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[#5938F5]/40 dark:hover:border-[#785AFF]/45 hover:shadow-[0_16px_36px_rgba(89,56,245,0.08)] dark:hover:shadow-[0_16px_36px_rgba(120,90,255,0.12)] motion-reduce:hover:translate-y-0"
                >
                  <div>
                    {/* Icon Container: Soft lavender to primary violet on hover */}
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-[#F3EFFF] dark:bg-[#1C1838] border border-[#E2DBFF] dark:border-[#352B6A] transition-all duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:bg-[#5938F5] dark:group-hover:bg-[#785AFF] group-hover:border-[#5938F5] dark:group-hover:border-[#785AFF]">
                      <Icon
                        size={22}
                        strokeWidth={1.75}
                        className="text-[#5938F5] dark:text-[#785AFF] transition-all duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:text-white dark:group-hover:text-white group-hover:scale-[1.08] motion-reduce:group-hover:scale-100"
                      />
                    </div>

                    {/* Card Title */}
                    <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-[var(--text-primary)] mb-2.5">
                      {item.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-sm sm:text-base text-[var(--text-muted)] font-normal leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollRevealItem>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
