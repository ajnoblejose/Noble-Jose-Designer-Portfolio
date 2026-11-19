import { clsx } from 'clsx';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  download,
  className = '',
  target,
  rel,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] cursor-pointer select-none';

  const variants = {
    primary:
      'bg-[var(--accent)] text-white hover:opacity-95 active:scale-[0.99] shadow-xs',
    secondary:
      'border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--text-muted)] bg-transparent active:scale-[0.99]',
    ghost:
      'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] active:scale-[0.99]',
  };

  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-sm sm:text-base',
  };

  const computedClass = clsx(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={computedClass}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={computedClass} {...props}>
      {children}
    </button>
  );
}
