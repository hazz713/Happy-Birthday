import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#120A2A",
        deep: "#24113D",
        gold: "#FFD87A",
        violet: "#5B2E91",
        lavender: "#9C6ADE",
        softPink: "#FF9FD6",
        rosePink: "#F875AA",
        softWhite: "#FFF8FC"
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        bloom: "0 0 80px rgba(255, 159, 214, 0.24)"
      }
    }
  },
  plugins: []
} satisfies Config;
