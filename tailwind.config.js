/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./ src/**/ *.html", "./src/**/*.vue", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        "polar-0": "#2e3440",
        "polar-1": "#3b4242",
        "polar-2": "#434c5e",
        "polar-3": "#4c566a",
        "snow-0": "#d8dee9",
        "snow-1": "#E5E9F0",
        "snow-2": "#ECEFF4",
        "frost-0": "#9fbcbb",
        "frost-1": "#88c0d0",
        "frost-2": "#81a1c1",
        "frost-3": "#5e81ac",
        "aurora-0": "#bf616a",
        "aurora-1": "#d08770",
        "aurora-2": "#ebcb8b",
        "aurora-3": "#a3be8c",
        "aurora-4": "#b48ead"
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"]
      }
    }
  },
  variants: {
    cursor: ["responsive", "hover", "focus", "disabled"],
    opacity: ["disabled"]
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        ".place-center": {
          "place-items": "center"
        }
      };

      addUtilities(newUtilities);
    })
  ]
};
