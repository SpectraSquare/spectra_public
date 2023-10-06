/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        cardHeight: "87vh",
      },
      fontFamily: {
        serif: ['"Italiana"'],
      },
    },
  },
  plugins: [],
};

