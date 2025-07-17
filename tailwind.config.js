/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-linear":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #101011 85%)",
        "footer-gradient":
          "linear-gradient(0deg,rgba(16, 16, 17, 0) 30%, rgba(17, 16, 16, 1) 90%)",
      },
      colors: {
        dark: "#101011",
        "dark-light": "#191919",
        light: "#FAFFFC",
        "text-accent": "#D3AD7F",
        accent: "#BA8039",
        "accent-hover": "#A66F2F",
        gray: "#BDBDBD",
        "text-gray": "#9B9B9B",
        arabic: "#77A9B0",
        robusta: "#3A383D",
        input: "#2D2D2D",
        placeholder: "#838382",
        alert: "#FF4949",
      },
      opacity: {
        35: "0.35",
      },
      fontSize: {
        "6.5xl": "4rem",
      },
      dropShadow: {
        "coffee-card": "box-shadow: 10px 10px 20px 0px #00000040",
      },
    },
  },
  plugins: [],
};
