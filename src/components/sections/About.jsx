import { personalInfo, skills } from '../../data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 px-6 border-t border-[var(--border)]">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] mb-12">
          <span>(03)</span>
          <span className="text-[var(--text-subtle)]">—</span>
          <span>About Noble Jose</span>
        </div>

        {/* Editorial Layout: Large statement + narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          <div className="lg:col-span-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[var(--text-primary)] leading-tight">
              Designing at the intersection of systems architecture, user empathy, and craft.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-base text-[var(--text-muted)] leading-relaxed font-normal">
            <p>
              I am a <strong className="font-medium text-[var(--text-primary)]">Senior UI/UX Designer</strong> currently based in {personalInfo.location}. My work centers on translating complex workflows into calm, accessible, and scalable digital interfaces.
            </p>
            <p>
              Having studied Computer Applications (MCA) and Electronics at Cochin University of Science and Technology (CUSAT), I approach interface design with an engineer's appreciation for technical constraints and a designer's eye for typographical nuance.
            </p>
            <p>
              At LogicPlum, I owned end-to-end product design across enterprise AI suites — conducting user research, designing responsive design systems, and bridging the gap between product requirements and frontend handoff.
            </p>
          </div>
        </div>

        {/* Clear Distinction: Product Design vs Technical Foundation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 pt-12 border-t border-[var(--border)]">
          <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)]/50">
            <span className="text-xs font-mono text-[var(--accent)] uppercase tracking-wider block mb-2">
              Core Focus
            </span>
            <h3 className="text-lg font-medium text-[var(--text-primary)] mb-3">
              Product & Interaction Design
            </h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Leading user research, designing journey maps, defining responsive web & mobile interfaces, building token-based Figma design systems, and crafting AI-assisted workflows.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)]/50">
            <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider block mb-2">
              Background
            </span>
            <h3 className="text-lg font-medium text-[var(--text-primary)] mb-3">
              Technical & Systems Foundation
            </h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Grounded in computer applications (MCA), electronics, and Linux system administration — providing strong communication with engineering teams and understanding of component lifecycles.
            </p>
          </div>
        </div>

        {/* Skills Inventory directly from resume */}
        <div className="pt-12 border-t border-[var(--border)]">
          <h3 className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-8">
            Skills & Tools
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="space-y-3">
                <h4 className="text-xs font-mono font-medium text-[var(--text-primary)]">
                  {category}
                </h4>
                <ul className="space-y-1.5 text-xs text-[var(--text-muted)] font-mono">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[var(--text-subtle)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
