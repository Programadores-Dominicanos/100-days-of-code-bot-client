import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    '../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    darkMode: "class",
    extend: {
      screens: {
        screens: {
          sm: "640px",
          // => @media (min-width: 640px) { ... }

          md: "850px",
          // => @media (min-width: 850px) { ... }

          lg: "1024px",
          // => @media (min-width: 1024px) { ... }

          xl: "1280px",
          // => @media (min-width: 1280px) { ... }

          "2xl": "1536px",
          // => @media (min-width: 1536px) { ... }
        },
      },
    },
  },
  darkMode: "media",
  plugins: [nextui({
    themes: {
      
    }
  })],
};
