/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#F5F5F5",
      beige: "#D1BF9B",
      mocha: "#948C7F",
      graphite: "#31302C",
      creater_brown: "#47443D",
    },
    extend: {
      fontFamily: {
        otr: ["otr", "sans-serif"],
        argentum: ["Argentum Sans", "sans-serif"]
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
