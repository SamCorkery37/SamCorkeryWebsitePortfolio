import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true, // centers the container by default
      padding: '8rem', // optional: adds horizontal padding for spacing on smaller screens
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        titillium: ['"Titillium Web Light"', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
