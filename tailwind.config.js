/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      themes: [
        {
          light: {
            "primary": "#ff00ff",
            "secondary": "#ffffff",
            "accent": "#ffffff",
            "neutral": "#ffffff",
            "base-100": "#ffffff",
            "info": "#ffffff",
            "success": "#00ffff",
            "warning": "#ffffff",
            "error": "#ffffff",
          },
          dark: {
            "primary": "#0080ff",
            "secondary": "#007696",
            "accent": "#cd3f00",
            "neutral": "#280b14",
            "base-100": "#242c47",
            "info": "#0067f5",
            "success": "#64e400",
            "warning": "#dca800",
            "error": "#d32d48",
          },
        },
      ],

    },
  },
  plugins: [],
};
