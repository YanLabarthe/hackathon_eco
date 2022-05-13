module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      "pack-train":
        "url('https://cdn.pixabay.com/photo/2022/04/11/18/18/earth-day-7126390_1280.png')",
    },
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },

      animation: {
        "waving-hand": "wave 2s linear infinite",
      },

      colors: {
        "custom-yellow": "#f9bd63",
      },
      padding: {
        "1/3": "33,33333%",
        "2/3": "66,66666%",
      },
    },
  },
  plugins: [],
};
