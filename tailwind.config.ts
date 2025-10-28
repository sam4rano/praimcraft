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
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Praimcraft Modern Brand Colors - Professional & Vibrant
        primary: {
          50: "#eff6ff",   // Very light blue
          100: "#dbeafe",  // Light blue
          200: "#bfdbfe",  // Soft blue
          300: "#93c5fd",  // Medium light blue
          400: "#60a5fa",  // Sky blue
          500: "#3b82f6",  // Main brand blue - Modern, trustworthy
          600: "#2563eb",  // Rich blue
          700: "#1d4ed8",  // Deep blue
          800: "#1e40af",  // Dark blue
          900: "#1e3a8a",  // Navy blue
        },
        accent: {
          50: "#fef2f2",   // Very light rose
          100: "#fff1f2",  // Light pink
          200: "#ffe4e6",  // Soft pink
          300: "#fda4af",  // Medium pink
          400: "#fb7185",  // Coral pink
          500: "#f43f5e",  // Vibrant rose - Eye-catching, energetic
          600: "#e11d48",  // Deep rose
          700: "#be123c",  // Rich red
          800: "#9f1239",  // Dark red
          900: "#881337",  // Deep burgundy
        },
        secondary: {
          50: "#f0fdf4",   // Very light green
          100: "#dcfce7",  // Light green
          200: "#bbf7d0",  // Soft green
          300: "#86efac",  // Medium green
          400: "#4ade80",  // Bright green
          500: "#22c55e",  // Success green - Fresh, positive
          600: "#16a34a",  // Rich green
          700: "#15803d",  // Deep green
          800: "#166534",  // Dark green
          900: "#14532d",  // Forest green
        },
        warning: {
          50: "#fffbeb",   // Very light amber
          100: "#fef3c7",  // Light amber
          200: "#fde68a",  // Soft yellow
          300: "#fcd34d",  // Medium yellow
          400: "#fbbf24",  // Bright amber
          500: "#f59e0b",  // Warning amber - Attention-grabbing
          600: "#d97706",  // Rich amber
          700: "#b45309",  // Deep amber
          800: "#92400e",  // Dark amber
          900: "#78350f",  // Bronze
        },
        neutral: {
          50: "#fafafa",   // Almost white
          100: "#f5f5f5",  // Very light gray
          200: "#e5e5e5",  // Light gray
          300: "#d4d4d4",  // Soft gray
          400: "#a3a3a3",  // Medium gray
          500: "#737373",  // Gray
          600: "#525252",  // Dark gray
          700: "#404040",  // Darker gray
          800: "#262626",  // Very dark gray
          900: "#171717",  // Almost black
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        heading: ["Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        "xs": ["0.75rem", { lineHeight: "1rem" }],
        "sm": ["0.875rem", { lineHeight: "1.25rem" }],
        "base": ["1rem", { lineHeight: "1.5rem" }],
        "lg": ["1.125rem", { lineHeight: "1.75rem" }],
        "xl": ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      boxShadow: {
        "soft": "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        "medium": "0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "strong": "0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 2px 10px -2px rgba(0, 0, 0, 0.05)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "bounce-gentle": "bounceGentle 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
