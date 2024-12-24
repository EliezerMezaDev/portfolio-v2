/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        purple: {
          50: "#f5f4fe",
          100: "#ecebfc",
          200: "#dbd9fb",
          300: "#c1bbf7",
          400: "#a294f1",
          500: "#8269e9",
          600: "#7049de",
          700: "#6037ca",
          800: "#4f2da7",
          900: "#43278b",
          950: "#28175e",
        },
        lite: {
          50: "#f7f7fb",
          100: "#f1eff8",
          200: "#e5e2f2",
          300: "#d2cbe7",
          400: "#c4badf",
          500: "#9e8ac8",
          600: "#8b70b7",
          700: "#7a5da4",
          800: "#664e89",
          900: "#554171",
          950: "#372a4b",
        },
      },
    },
  },
  plugins: [],
};
