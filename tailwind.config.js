/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#06080D',
          900: '#0B0F17',
          850: '#101726',
          800: '#151F33',
          700: '#1E293B',
          600: '#334155',
        },
        accent: {
          cyan: '#06B6D4',
          emerald: '#10B981',
          amber: '#F59E0B',
          violet: '#8B5CF6',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}
