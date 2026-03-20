import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--md-sys-color-background)",
        foreground: "var(--md-sys-color-on-background)",

        primary: {
          DEFAULT: "var(--md-sys-color-primary)",
          container: "var(--md-sys-color-primary-container)",
          fixed: "var(--md-sys-color-primary-fixed)",
          "fixed-dim": "var(--md-sys-color-primary-fixed-dim)",
        },
        "on-primary": {
          DEFAULT: "var(--md-sys-color-on-primary)",
          container: "var(--md-sys-color-on-primary-container)",
          fixed: "var(--md-sys-color-on-primary-fixed)",
          "fixed-variant": "var(--md-sys-color-on-primary-fixed-variant)",
        },

        secondary: {
          DEFAULT: "var(--md-sys-color-secondary)",
          container: "var(--md-sys-color-secondary-container)",
          fixed: "var(--md-sys-color-secondary-fixed)",
          "fixed-dim": "var(--md-sys-color-secondary-fixed-dim)",
        },
        "on-secondary": {
          DEFAULT: "var(--md-sys-color-on-secondary)",
          container: "var(--md-sys-color-on-secondary-container)",
          fixed: "var(--md-sys-color-on-secondary-fixed)",
          "fixed-variant": "var(--md-sys-color-on-secondary-fixed-variant)",
        },

        tertiary: {
          DEFAULT: "var(--md-sys-color-tertiary)",
          container: "var(--md-sys-color-tertiary-container)",
          fixed: "var(--md-sys-color-tertiary-fixed)",
          "fixed-dim": "var(--md-sys-color-tertiary-fixed-dim)",
        },
        "on-tertiary": {
          DEFAULT: "var(--md-sys-color-on-tertiary)",
          container: "var(--md-sys-color-on-tertiary-container)",
          fixed: "var(--md-sys-color-on-tertiary-fixed)",
          "fixed-variant": "var(--md-sys-color-on-tertiary-fixed-variant)",
        },

        error: {
          DEFAULT: "var(--md-sys-color-error)",
          container: "var(--md-sys-color-error-container)",
        },
        "on-error": {
          DEFAULT: "var(--md-sys-color-on-error)",
          container: "var(--md-sys-color-on-error-container)",
        },

        surface: {
          DEFAULT: "var(--md-sys-color-surface)",
          dim: "var(--md-sys-color-surface-dim)",
          bright: "var(--md-sys-color-surface-bright)",
          variant: "var(--md-sys-color-surface-variant)",
          tint: "var(--md-sys-color-surface-tint)",
          "container-lowest": "var(--md-sys-color-surface-container-lowest)",
          "container-low": "var(--md-sys-color-surface-container-low)",
          container: "var(--md-sys-color-surface-container)",
          "container-high": "var(--md-sys-color-surface-container-high)",
          "container-highest": "var(--md-sys-color-surface-container-highest)",
        },
        "on-surface": {
          DEFAULT: "var(--md-sys-color-on-surface)",
          variant: "var(--md-sys-color-on-surface-variant)",
        },

        outline: {
          DEFAULT: "var(--md-sys-color-outline)",
          variant: "var(--md-sys-color-outline-variant)",
        },

        "md-shadow": "var(--md-sys-color-shadow)",
        "md-scrim": "var(--md-sys-color-scrim)",

        "inverse-surface": "var(--md-sys-color-inverse-surface)",
        "inverse-on-surface": "var(--md-sys-color-inverse-on-surface)",
        "inverse-primary": "var(--md-sys-color-inverse-primary)",
      },
      boxShadow: {
        md: "0 10px 30px -15px var(--md-sys-color-shadow)",
      },
      fontFamily: {
        sans: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
