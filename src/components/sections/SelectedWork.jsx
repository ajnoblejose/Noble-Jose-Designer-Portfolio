import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../data/portfolio';

// Clean, architectural UI placeholder graphics representing each real project
function ProjectPreviewGraphic({ projectId, accent }) {
  if (projectId === 'logicplum-design-system') {
    return (
      <div className="w-full h-full p-8 flex flex-col justify-between font-mono select-none">
        {/* Top design system tokens header */}
        <div className="flex items-center justify-between text-[11px] text-[var(--text-subtle)] border-b border-[var(--border)] pb-3">
          <span>DESIGN_SYSTEM / CORE_V2</span>
          <span>FIGMA_TOKENS</span>
        </div>

        {/* Minimalist UI Component Swatches & Controls */}
        <div className="space-y-4 my-auto">
          {/* Component mock row */}
          <div className="flex items-center gap-3">
            <div className="px-3 py-1.5 rounded-md border border-[var(--border)] text-xs text-[var(--text-primary)] bg-[var(--bg-primary)]">
              Primary Button
            </div>
            <div className="px-3 py-1.5 rounded-md border border-[var(--border)] text-xs text-[var(--text-muted)]">
              Secondary
            </div>
            <div className="w-8 h-4 rounded-full border border-[var(--border)] bg-[var(--accent)]/20 relative">
              <div className="w-3 h-3 rounded-full bg-[var(--accent)] absolute right-0.5 top-0.5" />
            </div>
          </div>

          {/* Color token scale row */}
          <div className="grid grid-cols-6 gap-2 pt-2">
            <div className="h-4 rounded bg-[var(--border)]" />
            <div className="h-4 rounded bg-[var(--text-subtle)]/30" />
            <div className="h-4 rounded bg-[var(--text-muted)]/40" />
            <div className="h-4 rounded bg-[var(--accent)]/30" />
            <div className="h-4 rounded bg-[var(--accent)]/60" />
            <div className="h-4 rounded bg-[var(--accent)]" />
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="flex items-center justify-between text-[10px] text-[var(--text-subtle)] pt-3 border-t border-[var(--border)]">
          <span>200+ COMPONENTS</span>
          <span>WCAG 2.1 AA</span>
        </div>
      </div>
    );
  }

  if (projectId === 'ai-product-experience') {
    return (
      <div className="w-full h-full p-8 flex flex-col justify-between font-mono select-none">
        {/* Step Wizard Header */}
        <div className="flex items-center justify-between text-[11px] text-[var(--text-subtle)] border-b border-[var(--border)] pb-3">
          <span>WORKFLOW_WIZARD</span>
          <span>STEP 02 OF 04</span>
        </div>

        {/* Node & Flow Mockup */}
        <div className="my-auto space-y-3">
          <div className="p-3.5 rounded-lg border border-[var(--border)] bg-[var(--bg-primary)]">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-[var(--text-primary)]">Model Configuration</span>
              <span className="text-[10px] text-[var(--accent)]">ACTIVE</span>
            </div>
            <div className="h-1.5 w-3/4 rounded bg-[var(--border)] mt-2" />
          </div>

          <div className="p-3.5 rounded-lg border border-dashed border-[var(--border)] opacity-60">
            <div className="text-xs text-[var(--text-muted)]">Data Pipeline Validation</div>
          </div>
        </div>

        {/* Bottom meta */}
        <div className="flex items-center justify-between text-[10px] text-[var(--text-subtle)] pt-3 border-t border-[var(--border)]">
          <span>PROGRESSIVE DISCLOSURE</span>
          <span>HUMAN-IN-THE-LOOP</span>
        </div>
      </div>
    );
  }

  // Brand Identity Graphic
  return (
    <div className="w-full h-full p-8 flex flex-col justify-between font-mono select-none">
      <div className="flex items-center justify-between text-[11px] text-[var(--text-subtle)] border-b border-[var(--border)] pb-3">
        <span>IDENTITY_SYSTEM</span>
        <span>SPECIMEN_01</span>
      </div>

      <div className="my-auto text-center space-y-2">
        <div className="text-2xl font-serif tracking-widest text-[var(--text-primary)]">
          VERVE & FORM
        </div>
        <div className="text-[10px] tracking-widest uppercase text-[var(--text-subtle)]">
          TYPOGRAPHY · LOGOMARK · PACKAGING
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-[var(--text-subtle)] pt-3 border-t border-[var(--border)]">
        <span>VECTOR ASSETS</span>
        <span>BRAND GUIDELINES</span>
      </div>
    </div>
  );
}

export default function SelectedWork() {
  return (
    <section id="work" className="py-20 sm:py-28 px-6 border-t border-[var(--border)]">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] mb-3">
              <span>(02)</span>
              <span className="text-[var(--text-subtle)]">—</span>
              <span>Selected Work</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)]">
              Case studies and product artifacts
            </h2>
          </div>
          <p className="text-xs font-mono text-[var(--text-muted)]">
            {projects.length} Selected Projects
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-12 sm:space-y-16">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group border border-[var(--border)] rounded-2xl overflow-hidden bg-[var(--bg-card)] transition-all duration-300 hover:border-[var(--text-muted)]"
            >
              <Link to={`/work/${project.id}`} className="block">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Clean UI Wireframe / Image Placeholder (7 cols) */}
                  <div className="lg:col-span-7 bg-[var(--bg-secondary)] border-b lg:border-b-0 lg:border-r border-[var(--border)] h-64 sm:h-80 relative overflow-hidden">
                    <ProjectPreviewGraphic
                      projectId={project.id}
                      accent={project.accent}
                    />
                  </div>

                  {/* Project Details (5 cols) */}
                  <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
                    <div>
                      {/* Meta header */}
                      <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] mb-4">
                        <span>{project.category}</span>
                        <span>{project.year}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-3">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6 font-normal">
                        {project.subtitle}
                      </p>

                      {/* Tools tags */}
                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-[11px] font-mono px-2.5 py-1 rounded border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text-muted)]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer read link */}
                    <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs font-mono text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                      <span>Read Case Study</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
