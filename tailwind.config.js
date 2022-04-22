module.exports = {
  content: ["./pages/*.{ts,tsx}", "./components/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      Courgette: ["Courgette"],
    },
    extend: {
      colors: {
        orange: {
          DEFAULT: "#E8630A",
        },
        yellow: {
          DEFAULT: "#FCD900",
        },
        bblue: {
          DEFAULT: "#035397",
        },
        dblue: {
          DEFAULT: "#001E6C",
        },
      },
    },
  },
  plugins: [],
};
