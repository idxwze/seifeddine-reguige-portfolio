import type { Config } from "tailwindcss";

const config: Config = {
  // No darkMode — Organic system is light-only
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Organic semantic tokens */
        "org-bg":      "var(--color-bg)",
        "org-surface": "var(--color-surface)",
        "org-text":    "var(--color-text)",
        "org-accent":  "var(--color-accent)",
        "org-accent2": "var(--color-accent-2)",
        "org-divider": "var(--color-divider)",

        /* Neutral ramp */
        "org-neutral": {
          100: "var(--color-neutral-100)",
          200: "var(--color-neutral-200)",
          300: "var(--color-neutral-300)",
          400: "var(--color-neutral-400)",
          500: "var(--color-neutral-500)",
          600: "var(--color-neutral-600)",
          700: "var(--color-neutral-700)",
          800: "var(--color-neutral-800)",
          900: "var(--color-neutral-900)",
        },

        /* Terracotta accent ramp */
        "org-a": {
          100: "var(--color-accent-100)",
          200: "var(--color-accent-200)",
          300: "var(--color-accent-300)",
          400: "var(--color-accent-400)",
          500: "var(--color-accent-500)",
          600: "var(--color-accent-600)",
          700: "var(--color-accent-700)",
          800: "var(--color-accent-800)",
          900: "var(--color-accent-900)",
        },

        /* Sage accent-2 ramp */
        "org-a2": {
          100: "var(--color-accent-2-100)",
          200: "var(--color-accent-2-200)",
          300: "var(--color-accent-2-300)",
          400: "var(--color-accent-2-400)",
          500: "var(--color-accent-2-500)",
          600: "var(--color-accent-2-600)",
          700: "var(--color-accent-2-700)",
          800: "var(--color-accent-2-800)",
          900: "var(--color-accent-2-900)",
        },
      },

      fontFamily: {
        caprasimo: ["var(--font-caprasimo)", "system-ui", "sans-serif"],
        figtree:   ["var(--font-figtree)",   "system-ui", "sans-serif"],
        sans:      ["var(--font-figtree)",   "system-ui", "sans-serif"],
      },

      maxWidth: {
        page: "1240px",
      },

      borderRadius: {
        "org-sm": "var(--radius-sm)",
        "org-md": "var(--radius-md)",
        "org-lg": "var(--radius-lg)",
      },

      boxShadow: {
        "org-sm": "var(--shadow-sm)",
        "org-md": "var(--shadow-md)",
        "org-lg": "var(--shadow-lg)",
      },

      keyframes: {
        floatY: {
          "0%":   { transform: "translateY(0)" },
          "100%": { transform: "translateY(-18px)" },
        },
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to:   { transform: "rotate(360deg)" },
        },
      },

      animation: {
        "float-y-7":  "floatY 7s ease-in-out infinite alternate",
        "float-y-9":  "floatY 9s ease-in-out infinite alternate-reverse",
        "spin-slow-22": "spinSlow 22s linear infinite",
        "spin-slow-30": "spinSlow 30s linear infinite reverse",
        "spin-slow-6":  "spinSlow 6s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
