import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#FFFBF8",
          soft: "#FFF5EE",
        },
        accent: {
          DEFAULT: "#B8860B",
          light: "#D4A843",
          subtle: "#F5ECD7",
        },
        dark: {
          DEFAULT: "#1C1917",
          soft: "#44403C",
        },
        muted: "#78716C",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s ease-out both",
        "fade-in": "fade-in 1s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
