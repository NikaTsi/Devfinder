/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    screens: {
      md : "768px",
      lg : "1440px",
    },
    fontFamily: {
      mono : ["Space Mono", "monospace"],
    },
    boxShadow: {
      inpt: "0px 16px 30px -10px rgba(70, 96, 187, 0.20)",
    },
    extend: {},
  },
  plugins: [],
}

