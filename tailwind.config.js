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
      light: {
        colors: {
          primary: '#C4C4EC',
          secondary: '#7828C8',
          success: '#17C964',
          warning: '#F5A524',
          danger: '#F31260',
          info: '#0072F5',
          background: '#FFFFFF',
          foreground: '#11181C',
          // You can add more color definitions here
        }
      },
      dark: {
        colors: {
          primary: '#3694FF',
          secondary: '#9750DD',
          success: '#4ADE80',
          warning: '#F5A524',
          danger: '#F31260',
          info: '#3B82F6',
          background: '#000000',
          foreground: '#ECEDEE',
          // You can add more color definitions here
        }
      }

    }
  })],
};
