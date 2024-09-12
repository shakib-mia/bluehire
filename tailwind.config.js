/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#0E0140",
      secondary: "#F49E00",
      gray: "#F5F5F5",
      dark: {
        header: "#0F0F0F",
        paragraph: "#232323",
      },
      white: "#FFFFFF",
      transparent: "#00000000",
    },

    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        "space-grotesk": ["Space Grotesk", "sans-serif"],
      },

      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "100%",
          md: "768px",
          lg: "1000px",
          xl: "1200px",
        },
      },
    },
  },
  plugins: [],
};
