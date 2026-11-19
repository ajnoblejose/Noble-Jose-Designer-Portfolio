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
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Inter', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        handwriting: ['Caveat', 'cursive'],
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
