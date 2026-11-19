import { designExperience, technicalExperience, education } from '../../data/portfolio';
import { Download } from 'lucide-react';
import Button from '../ui/Button';

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 px-6 border-t border-[var(--border)]">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] mb-3">
              <span>(04)</span>
              <span className="text-[var(--text-subtle)]">—</span>
              <span>Experience & Background</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)]">
              Work history and credentials
            </h2>
          </div>

          <Button
            variant="secondary"
            size="md"
            href="/resume.pdf"
            download="Noble_Jose_Resume.pdf"
          >
            <span>Download Resume PDF</span>
            <Download size={13} />
          </Button>
        </div>

        {/* Part 1: Product Design Experience */}
        <div className="mb-20">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-8">
            <span>Product Design Experience</span>
            <span className="h-px flex-1 bg-[var(--border)]" />
          </div>

          <div className="space-y-12">
            {designExperience.map((job) => (
              <div
                key={job.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 pb-12 border-b border-[var(--border)] last:border-b-0 last:pb-0"
              >
                {/* Meta column (4 cols) */}
                <div className="md:col-span-4 space-y-1">
                  <h3 className="text-lg font-medium text-[var(--text-primary)]">
                    {job.role}
                  </h3>
                  <div className="text-sm font-mono text-[var(--accent)]">
                    {job.company}
                  </div>
                  <div className="text-xs font-mono text-[var(--text-muted)] pt-1">
                    {job.period} · {job.location}
                  </div>
                </div>

                {/* Bullets column (8 cols) */}
                <div className="md:col-span-8 space-y-3">
                  <ul className="space-y-2.5">
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-sm text-[var(--text-muted)] leading-relaxed flex items-start gap-2.5"
                      >
                        <span className="w-1 h-1 rounded-full bg-[var(--text-subtle)] mt-2 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4">
                    {job.tools.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded border border-[var(--border)] text-[var(--text-subtle)] bg-[var(--bg-secondary)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Technical & Engineering Foundation */}
        <div className="mb-20 pt-12 border-t border-[var(--border)]">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[var(--text-subtle)] mb-8">
            <span>Technical & Systems Foundation</span>
            <span className="h-px flex-1 bg-[var(--border)]" />
          </div>

          <div className="space-y-12">
            {technicalExperience.map((job) => (
              <div
                key={job.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8"
              >
                <div className="md:col-span-4 space-y-1">
                  <h3 className="text-lg font-medium text-[var(--text-primary)]">
                    {job.role}
                  </h3>
                  <div className="text-sm font-mono text-[var(--text-muted)]">
                    {job.company}
                  </div>
                  <div className="text-xs font-mono text-[var(--text-muted)] pt-1">
                    {job.period} · {job.location}
                  </div>
                </div>

                <div className="md:col-span-8 space-y-3">
                  <ul className="space-y-2.5">
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-sm text-[var(--text-muted)] leading-relaxed flex items-start gap-2.5"
                      >
                        <span className="w-1 h-1 rounded-full bg-[var(--text-subtle)] mt-2 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 3: Education */}
        <div className="pt-12 border-t border-[var(--border)]">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[var(--text-subtle)] mb-8">
            <span>Education</span>
            <span className="h-px flex-1 bg-[var(--border)]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)]/40"
              >
                <div className="text-xs font-mono text-[var(--text-muted)] mb-2">
                  {edu.period}
                </div>
                <h4 className="text-sm font-medium text-[var(--text-primary)] mb-1">
                  {edu.degree}
                </h4>
                <div className="text-xs font-mono text-[var(--accent)]">
                  {edu.institution}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
