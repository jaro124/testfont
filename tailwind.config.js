module.exports = {
  theme: {
    darkMode: "class",
    content: [
      `./src/pages/**/*.{js,jsx,ts,tsx}`,
      `./src/components/**/*.{js,jsx,ts,tsx}`,
    ],
    theme: {
      extend: {
        fontFamily: {
        anton: ["Anton", "sans-serif"],
      },
      },
    },
    plugins: [],


  },
}
