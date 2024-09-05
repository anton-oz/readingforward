import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#25bff9',
        primary_dark: '#255ff9',
        blueski: '#4b7db5',
        darkBlueski: '#306096'
      },
    },
  },
  plugins: [],
};
export default config;
