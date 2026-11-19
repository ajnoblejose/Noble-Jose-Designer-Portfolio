import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../data/portfolio';

export default function SelectedWork() {
  return (
    <section id="work" className="py-20 sm:py-28 px-6">
      <div className="editorial-container">
        {/* Section Header: Left has Heading + Description, Right has "View all projects" pill button */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-tight">
              Selected{' '}
              <span className="text-[#5938F5] dark:text-[#785AFF]">work</span>
            </h2>
            {/* Supporting description directly below heading, 16px gap */}
            <p className="mt-4 text-base sm:text-lg text-[var(--text-muted)] font-normal leading-relaxed max-w-xl">
              A selection of projects turning complex challenges into intuitive and meaningful digital experiences.
            </p>
          </div>

          {/* Minimal outlined pill button aligned to the right of the main heading */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border)] hover:border-[var(--accent)] text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-all duration-200 self-start md:self-start md:mt-2 group flex-shrink-0"
            aria-label="View all projects"
          >
            <span>View all projects</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* 2x2 Project Grid: 24px column gap, 48px row gap, 1-col on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12">
          {projects.map((project) => (
            <article key={project.id}>
              <Link
                to={`/work/${project.id}`}
                className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[24px]"
                aria-label={`View case study for ${project.title}`}
              >
                {/* 4:3 Cover Image: 24px corner radius */}
                <div className="aspect-[4/3] w-full overflow-hidden rounded-[24px] bg-[var(--bg-secondary)] relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                {/* Metadata: 16px thumbnail-to-title, 8px title-to-category */}
                <div className="mt-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-[24px] font-semibold leading-snug tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                      {project.title}
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
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
