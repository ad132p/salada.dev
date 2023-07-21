import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mygreen: "#3f826d",
        myice: "#e1e6e1",
        myterracota: "#e2725b"
      }
    },
  },
  plugins: [],
} satisfies Config;
