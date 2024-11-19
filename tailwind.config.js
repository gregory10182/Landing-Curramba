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
        primary: "#F5E5C0",
        secondary: "#4E342E",
        tertiary: "#6B8E23",
      },
      textColor: {
        primary: "#4E342E",
        secondary: "#FFF9F2",
        tertiary: "#6B8E23",
      },
    },
  },
  plugins: [],
};
