import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#D766FF",
      },
      boxShadow: {
        custom: "0 0 4px rgba(0,0,0,0.25)",
      },
      height: {
        "88vh": "88vh",
        "100vh": "100vh",
      },
    },
  },
  plugins: [],
} satisfies Config;
