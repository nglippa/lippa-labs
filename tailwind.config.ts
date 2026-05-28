import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 24px 90px rgb(79 70 229 / 0.18)",
        soft: "0 18px 54px rgb(15 23 42 / 0.10)",
        card: "0 16px 44px rgb(15 23 42 / 0.08)",
        lab: "0 24px 80px rgb(0 0 0 / 0.36), inset 0 1px 0 rgb(255 255 255 / 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
