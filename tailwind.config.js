module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        0: "0",
        "1/2": "50%",
        "1/3": "",
        "1/4": "25%",
        "1/5": "33.333333%",
        "2/3": "66.666667%",
        "3/4": "75%",
        full: "100%",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
