/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        limeAccent: "var(--remote-accent-lime, #e3ff8f)",
        limeSoft: "#f3fee2",
        remoteDark: "var(--remote-text, #22242a)",
        remoteMuted: "var(--remote-muted, #415762)",
        remoteSubtle: "var(--remote-subtle, #b3bdbd)",
        remoteBorder: "var(--remote-border, #e5e6e6)",
        remoteSurface: "var(--remote-surface, #f2f3f3)",
        remoteBg: "var(--remote-bg, #f7f8f8)",
      },
      fontFamily: {
        sans: ['Onest', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
