/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#FFB400",
        "secondary": "#FFB400",
        "heading": "#2B2B2B",
        "paragraph": "#767676",
        "base-100": "#FFFFFF",
        "base-200": "#E4E6EB",
        "info": "#ffffff",
        "success": "#00ffff",
        "warning": "#ffffff",
        "error": "#ffffff",
      }
    }
  },
  plugins: [],
};
