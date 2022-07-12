module.exports = {
  attributify: true,
  plugins: [
    require("windicss/plugin/line-clamp"),
    require("windicss/plugin/forms"),
    require("windicss/plugin/typography"),
    require("windicss/plugin/aspect-ratio"),
  ],
  content: [],
  theme: {
    fontFamily: {
      handel: ["Handel", "sans-serif"],
    },
    extend: {
      fontSize: {
        tiny: ".4rem",
      },
      colors: {
        ruby: "#ff2222",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "white",
            a: {
              color: "white",
            },
            strong: {
              color: "white",
            },
          },
        },
      },
    },
  },
  variants: {},
};
