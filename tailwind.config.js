const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // darkMode: 'class',
  theme: {
    borderRadius: {
      none: "0",
      sm: ".4rem",
      DEFAULT: ".6rem",
      lg: ".8rem",
      full: "9999px",
    },
    // extend: {
    //   fontFamily: {
    //     sans: ['Proxima Nova', ...defaultTheme.fontFamily.sans],
    //   },
    // },
  },
  plugins: [require("@tailwindcss/typography")],
};
