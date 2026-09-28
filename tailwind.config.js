/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        limeAccent: "#e3ff8f",
        limeSoft: "#f3fee2",
        remoteDark: "#22242a",
        remoteMuted: "#415762",
        remoteSubtle: "#b3bdbd",
        remoteBorder: "#e5e6e6",
        remoteSurface: "#f2f3f3",
        remoteBg: "#f7f8f8",
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
