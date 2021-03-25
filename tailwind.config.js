module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "orange-bitcoin": "#F7931A",
        "orange-soft": "#FFE9D5",
        "blue-secondary": "#1A9AF7",
        "blue-soft": "#E7F5FF",
        "black-warm": "#201E1C",
        "black-warm-100": "#282623",
        "gray-50": "#BABABA",
        "white-off": "#FAF8F7",
      },
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
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
