/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "blue"
      },
      boxShadow: {
        "field-outer": "0px 0px 0px 4px rgba(8,145,178,0.1)",
        "field-inset": "inset 0 0px 0px 2px rgba(52,64,84,0.75)"
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "appearance": "opacity .75s forwards",
        "background-modal": "opacity .1s forwards",
        "open-modal": "scale .3s forwards"
      },
      keyframes: {
        opacity: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        scale: {
          "0%": { opacity: "0", transform: "scale(0.5)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        }
      }
    }
  },
  plugins: []
};
