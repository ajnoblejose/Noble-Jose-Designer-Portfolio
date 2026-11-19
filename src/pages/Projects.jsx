import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { projects, personalInfo } from '../data/portfolio';

export default function Projects() {
  return (
    <main className="pt-32 sm:pt-40 pb-20 sm:pb-28 px-6">
      <div className="editorial-container">
        {/* Navigation Breadcrumb */}
        <div className="mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to overview</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-tight">
            All{' '}
            <span className="text-[#5938F5] dark:text-[#785AFF]">projects</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[var(--text-muted)] font-normal leading-relaxed">
            A comprehensive archive of product design work, enterprise AI platforms, mobile applications, and digital systems created by {personalInfo.name}.
          </p>
        </div>

        {/* Projects Grid: 2-column layout matching Selected Work */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12">
          {projects.map((project) => (
            <article key={project.id}>
              <Link
                to={`/work/${project.id}`}
                className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[24px]"
                aria-label={`View case study for ${project.title}`}
              >
                {/* 4:3 Aspect Ratio Cover */}
                <div className="aspect-[4/3] w-full overflow-hidden rounded-[24px] bg-[var(--bg-secondary)] relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                {/* Metadata */}
                <div className="mt-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-[24px] font-semibold leading-snug tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors flex items-center gap-2">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 text-[var(--accent)]" />
                    </h3>
                    {project.year ? (
                      <span className="text-sm text-[var(--text-muted)] font-normal flex-shrink-0">
                        {project.year}
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-2 text-[16px] font-normal text-[var(--text-muted)]">
                    {project.category}
                  </p>
                  
                  {project.subtitle ? (
                    <p className="mt-1 text-sm text-[var(--text-subtle)] font-normal">
                      {project.subtitle}
                    </p>
                  ) : null}
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
