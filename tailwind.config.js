/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xl: "1280px",
        lg: "1024px",
        md: "768px",
        sm: "430px",
        ms: "390px",
        xs: "375px",
      },

      colors: {
        primary: "#161616",
        textPrimary: "#dcff3f",
        accent: "#2563EB",
        textSecondary: "#c3cad0",
        cardColor: "#e0ff59",
      },
      fontFamily: {
        tipoNormal: ["tipoNormal", "sans-serif"],
        tipoBold: ["tipoBold", "serif"],
        robotoMono: ['"Roboto Mono"', "monospace"],
      },
      animation: {
        "slider-smooth": "slider-smooth 28s ease-in-out infinite",
      },
      keyframes: {
        "slider-smooth": {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-25%)" },
          "50%": { transform: "translateX(-50%)" },
          "75%": { transform: "translateX(-75%)" },
          "100%": { transform: "translateX(0)" }, // Regresa al inicio
        },
      },
    },
  },
  plugins: [],
};
