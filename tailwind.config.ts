import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090B",
        "background-secondary": "#111113",
        surface: "#141416",
        border: "rgba(255, 255, 255, 0.08)",
        "text-primary": "#FFFFFF",
        "text-secondary": "#A1A1AA",
        "text-muted": "#71717A",
        accent: "#3B82F6",
        "accent-secondary": "#06B6D4",
        "accent-optional": "#8B5CF6",
      },
    },
  },
  plugins: [],
};

export default config;