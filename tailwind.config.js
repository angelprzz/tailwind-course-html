module.exports = {
  // purge: {
  //   enabled: true,
  //   content: ['./...'],
  // }
  content: ["./index.html"],
  // options: {
  //   // Pass directly to PurgeCSS options
  // }
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0fa9e6",
          light: "#3fbaeb",
          dark: "#0c87b8",
        },
      },
      fontFamily: {
        headline: "Poppins, sans-serif",
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
