import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#6C63FF", dark: "#4B44CC" },
        teacher: "#FF6B6B",
        student: "#4ECDC4",
        sidebar: "#1E1B4B",
      },
      fontFamily: {
        nunito: ["var(--font-nunito)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 16px rgba(108,99,255,0.08)",
        "card-lg": "0 8px 32px rgba(108,99,255,0.15)",
      },
      borderRadius: {
        card: "16px",
        "card-sm": "10px",
      },
    },
  },
  plugins: [],
};

export default config;
