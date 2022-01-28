module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sora", "sans-serif"],
        serif: ["Lora", "serif"],
      },
      colors: {
        night: {
          darkest: "#141518",
          darker: "#1E1F25",
          dark: "#272933",
        },
        day: {
          lightest: "#ffffff",
          lighter: "#ffffff",
          light: "#fcfcfd",
        },
        primary: "#1A63F1",
        text: {
          dark: "#777E90",
          light: "#FCFCFD",
        },
        grey: {
          DEFAULT: "#5D6588",
          40: "#A5ADCF",
          60: "#5D6588",
          80: "#34384C",
        },
        inputBackground: "#2f324180", //rgba(47, 50, 65, 0.5)
      },
      width: {
        container: "72.5%",
      },
      borderRadius: {
        normal: "100px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
