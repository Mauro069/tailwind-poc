/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@codescript/ui/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          default: "#f6f7f9",
          paper: "#ffffff",
        },
        backgroundDark: {
          default: "#0e1a28",
          paper: "#12171d",
        },
        colorText: {
          primary: "hsl(215, 15%, 12%)",
          secondary: "hsl(215, 15%, 22%)",
          tertiary: "hsl(215, 15%, 40%)",
          disabled: "rgba(0, 0, 0, 0.38)",
          icon: "rgba(0, 0, 0, 0.38)",
        },
        colorTextDark: {
          primary: "#fff",
          secondary: "hsl(215, 15%, 75%)",
          tertiary: "hsl(215, 15%, 65%)",
          disabled: "rgba(255, 255, 255, 0.5)",
          icon: "rgba(255, 255, 255, 0.5)",
        },
        primary: {
          light: "#e26b85",
          DEFAULT: "#c33c55",
          dark: "#ae3750",
          contrastText: "#ffffff",
        },
        secondary: {
          light: "#7888a4",
          DEFAULT: "#344055",
          dark: "#212c3d",
          contrastText: "#ffffff",
        },
        tertiary: {
          light: "#e4be3c",
          DEFAULT: "#ba9431",
          dark: "#967029",
          contrastText: "#000000",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
