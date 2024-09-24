/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'brown':'#603F26',
        'beige':'#FFEAC5',
        'dbeige':'#FFDBB5',
        'brown-200':'#6C4E31',
      },
    },
  },
  plugins: [],
};
