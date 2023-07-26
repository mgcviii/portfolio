/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,vue,js,ts,jsx,tsx,css}",
    "./src/index.html",
    "./src/ballin.html",
    "./src/cc.html",
    "./src/gameboks.html",
    "./src/smaks.html",
    "./src/danishgallery.html",
    "./src/main.js",
    "./src/style.css",
  ],
  theme: {
    colors: {
      white: "#F5F5F5",
      beige: "#D1BF9B",
      mocha: "#948C7F",
      graphite: "#31302C",
      creater_brown: "#47443D",
      lime_green: "#E2EE72",
      platinum_grey: "#A8A99B",
      fog: "#D5D6D0",
      cc: "#D7E4F2",
    },
    extend: {
      fontFamily: {
        otr: ["otr", "sans-serif"],
        argentum: ["Argentum Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
