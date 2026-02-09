/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
      extend: {
          colors: {
              "primary": "#8b5cf6", 
              "secondary": "#06b6d4",
              "accent": "#f472b6",
              "surface": {
                light: "#fdfdff",
                dark: "#050508"
              },
              "text-main": {
                light: "#1e293b",
                dark: "#f8fafc"
              },
              "text-muted": {
                light: "#64748b",
                dark: "#94a3b8"
              }
          },
          fontFamily: {
              "display": ["Space Grotesk", "sans-serif"],
              "body": ["Noto Sans", "sans-serif"],
              "mono": ["Space Mono", "monospace"]
          },
          boxShadow: {
              'ethereal': '0 25px 50px -12px rgba(139, 92, 246, 0.15)',
              'glow': '0 0 30px rgba(139, 92, 246, 0.3)'
          }
      },
  },
  plugins: [],
}