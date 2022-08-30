module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./exampleSite/layouts/**/*.html",
    "./exampleSite/content/**/*.{html,md}",
  ],
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
