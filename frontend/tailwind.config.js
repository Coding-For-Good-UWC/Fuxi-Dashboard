const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    // make sure it's pointing to the ROOT node_module
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        primaryText: "var(--primaryText)",
        voteUp: "var(--voteUp)",
        voteDown: "var(--voteDown)",
        tertiary: "var(--tertiary)",
        genreCantonese: "var(--genreCantonese)",
        genreChinese: "var(--genreChinese)",
        genreChristian: "var(--genreChristian)",
        genreEnglish: "var(--genreEnglish)",
        genreHainanese: "var(--genreHainanese)",
        genreHindi: "var(--genreHindi)",
        genreHokkien: "var(--genreHokkien)",
        genreMalay: "var(--genreMalay)",
        genreMandarin: "var(--genreMandarin)",
        genreTV: "var(--genreTV)",
        genreTamil: "var(--genreTamil)",
        deepTurquoise: "var(--deepTurquoise)",
        gray: "var(--gray)",
        lightBlue: "var(--lightBlue)"
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

