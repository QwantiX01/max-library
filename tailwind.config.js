/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Noto Serif"],
      mono: ["ui-monospace", "Roboto mono"],
    },
    extend: {
      colors: {
        "mint-very-light": "#FBFFF2",
        "mint-pale": "#F1F8E8",
        "mint-light": "#D8EFD3",
        mint: "#95D2B3",
        "mint-dark": "#55AD9B",
      },
    },
  },
  plugins: [],
};
