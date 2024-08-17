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
        blueski: '#63A9F8',
        darkBlueski: '#4b7db5'
      },
    },
  },
  plugins: [],
};
export default config;
