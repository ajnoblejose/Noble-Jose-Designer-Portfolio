export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8 sm:py-10 px-6 bg-[var(--bg-primary)] transition-colors duration-200">
      <div className="editorial-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--text-muted)] font-normal">
          {/* Left-aligned text */}
          <p className="text-center sm:text-left">
            © 2026 Noble Jose. Designed with Antigravity.
          </p>

          {/* Right-aligned plain non-interactive text without links */}
          <div className="flex items-center gap-2.5 cursor-default select-none">
            <span>Dribbble</span>
            <span className="text-[var(--text-subtle)] font-normal">·</span>
            <span>Behance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
