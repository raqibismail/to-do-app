import { heroui } from "@heroui/theme";


/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        // light: {
        //   colors: {
        //     background: "#E0E1DD",
        //     foreground: "#0D1B2A",
        //   },
        // },
        // dark: {
        //   colors: {
        //     background: "#1B263B",
        //   },
        // },
      },
    }),
  ],
};

module.exports = config;
