/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Noto Serif"],
      mono: ["ui-monospace", "Roboto mono"],
    },
    extend: {},
  },
  plugins: [],
};
