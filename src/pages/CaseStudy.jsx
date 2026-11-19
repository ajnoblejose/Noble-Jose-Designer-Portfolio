import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, User, Calendar, Clock, Wrench } from 'lucide-react';
import { projects } from '../data/portfolio';
import Button from '../components/ui/Button';

export default function CaseStudy() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);
  const currentIndex = projects.findIndex((p) => p.id === id);

  const nextProject =
    currentIndex !== -1 ? projects[(currentIndex + 1) % projects.length] : null;
  const prevProject =
    currentIndex !== -1
      ? projects[(currentIndex - 1 + projects.length) % projects.length]
      : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="text-center p-8 rounded-2xl border border-[var(--border)] max-w-sm">
          <p className="font-mono text-sm text-[var(--text-muted)] mb-4">
            Case study not found.
          </p>
          <Button variant="primary" onClick={() => navigate('/')}>
            Back to Homepage
          </Button>
        </div>
      </div>
    );
  }

  return (
    <article className="pt-28 pb-24 px-6">
      <div className="editorial-container">
        {/* Navigation Breadcrumb */}
        <div className="mb-12">
          <Link
            to="/#work"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            <ArrowLeft size={12} />
            <span>All Selected Work</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <header className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] mb-4">
            <span>{project.category}</span>
            <span>·</span>
            <span>{project.year}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[var(--text-primary)] leading-[1.14] mb-6">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed font-normal">
            {project.subtitle}
          </p>
        </header>

        {/* Project Metadata Table */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-[var(--border)] mb-16 text-xs font-mono">
          <div>
            <span className="text-[var(--text-subtle)] block mb-1">CLIENT</span>
            <span className="text-[var(--text-primary)] font-medium">{project.client}</span>
          </div>

          <div>
            <span className="text-[var(--text-subtle)] block mb-1">ROLE</span>
            <span className="text-[var(--text-primary)] font-medium">{project.role}</span>
          </div>

          <div>
            <span className="text-[var(--text-subtle)] block mb-1">TIMELINE</span>
            <span className="text-[var(--text-primary)] font-medium">{project.duration}</span>
          </div>

          <div>
            <span className="text-[var(--text-subtle)] block mb-1">TOOLS</span>
            <span className="text-[var(--text-primary)] font-medium">
              {project.tools.slice(0, 2).join(', ')}
            </span>
          </div>
        </div>

        {/* Clean Architectural UI Mockup Frame */}
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] h-72 sm:h-96 mb-16 flex flex-col justify-between p-6 sm:p-8 font-mono select-none">
          <div className="flex items-center justify-between text-xs text-[var(--text-subtle)] border-b border-[var(--border)] pb-3">
            <span>ARTIFACT_VIEW / {project.id.toUpperCase()}</span>
            <span>SYSTEM_SPECIFICATION</span>
          </div>

          <div className="my-auto text-center space-y-2">
            <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider">
              {project.category} · {project.client}
            </div>
            <div className="text-xl sm:text-2xl font-medium text-[var(--text-primary)] font-sans">
              {project.title}
            </div>
            <div className="text-xs text-[var(--text-subtle)] max-w-md mx-auto">
              Production design artifact & component specification
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-[var(--text-subtle)] pt-3 border-t border-[var(--border)]">
            <span>STATUS: SHIPPED</span>
            <span>LEAD DESIGNER: NOBLE JOSE</span>
          </div>
        </div>

        {/* Editorial Body Copy (Centered single-column layout) */}
        <div className="max-w-2xl mx-auto space-y-14 text-base text-[var(--text-muted)] leading-relaxed font-normal">
          {/* Overview */}
          <section className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-medium">
              01 / Context & Scope
            </h2>
            <h3 className="text-xl font-medium text-[var(--text-primary)]">
              Overview of the engagement
            </h3>
            <p>{project.overview}</p>
          </section>

          {/* Problem */}
          <section className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-medium">
              02 / The Problem
            </h2>
            <h3 className="text-xl font-medium text-[var(--text-primary)]">
              Identifying friction points
            </h3>
            <p>{project.problem}</p>
          </section>

          {/* Process */}
          <section className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-medium">
              03 / Design Process
            </h2>
            <h3 className="text-xl font-medium text-[var(--text-primary)]">
              Research, taxonomy and iteration
            </h3>
            <p>{project.process}</p>
          </section>

          {/* Solution */}
          <section className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-medium">
              04 / The Solution
            </h2>
            <h3 className="text-xl font-medium text-[var(--text-primary)]">
              Architectural implementation
            </h3>
            <p>{project.solution}</p>
          </section>

          {/* Outcome */}
          <section className="space-y-4 p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)]/50">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--text-primary)] font-medium">
              05 / Outcome & Impact
            </h2>
            <p className="text-sm font-medium text-[var(--text-primary)]">
              {project.outcome}
            </p>
          </section>
        </div>

        {/* Project Pagination Navigation */}
        <div className="max-w-2xl mx-auto mt-20 pt-10 border-t border-[var(--border)] grid grid-cols-1 sm:grid-cols-2 gap-6">
          {prevProject && (
            <Link
              to={`/work/${prevProject.id}`}
              className="group p-5 rounded-xl border border-[var(--border)] hover:border-[var(--text-muted)] transition-all flex items-center gap-3"
            >
              <ArrowLeft size={14} className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:-translate-x-0.5 transition-transform" />
              <div>
                <span className="text-[11px] font-mono text-[var(--text-subtle)] block">
                  Previous Project
                </span>
                <span className="text-sm font-medium text-[var(--text-primary)]">
                  {prevProject.title}
                </span>
              </div>
            </Link>
          )}

          {nextProject && (
            <Link
              to={`/work/${nextProject.id}`}
              className="group p-5 rounded-xl border border-[var(--border)] hover:border-[var(--text-muted)] transition-all flex items-center justify-between gap-3 text-right sm:col-start-2"
            >
              <div>
                <span className="text-[11px] font-mono text-[var(--text-subtle)] block">
                  Next Project
                </span>
                <span className="text-sm font-medium text-[var(--text-primary)]">
                  {nextProject.title}
                </span>
              </div>
              <ArrowRight size={14} className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-0.5 transition-transform" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
