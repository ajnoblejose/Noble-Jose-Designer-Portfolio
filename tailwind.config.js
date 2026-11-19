/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
      },
      colors: {
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'txt-primary': 'var(--text-primary)',
        'txt-muted': 'var(--text-muted)',
        'clr-accent': 'var(--accent)',
        'clr-border': 'var(--border)',
      },
      maxWidth: {
        content: '1100px',
      },
    },
  },
  plugins: [],
}
