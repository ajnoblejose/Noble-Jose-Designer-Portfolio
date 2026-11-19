export default function Tag({ children, variant = 'default', className = '' }) {
  const styles = {
    default: 'bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border)]',
    accent: 'bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/25',
    active: 'bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border border-emerald-500/25',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium transition-colors ${styles[variant] || styles.default} ${className}`}
    >
      {children}
    </span>
  );
}
