import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx,mdx}", // Hooks folder
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}", // Lib folder
    "./src/services/**/*.{js,ts,jsx,tsx,mdx}", // Services folder
    "./src/types/**/*.{js,ts,jsx,tsx,mdx}", // Types folder
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      screens: {
        // Custom breakpoints for this project
        sm: "480px", // Small devices (phones)
        md: "768px", // Tablets (portrait)
        lg: "1024px", // Tablets (landscape), small desktops
        xl: "1280px", // Large desktops
        "2xl": "1536px", // Larger desktops, big screens
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
