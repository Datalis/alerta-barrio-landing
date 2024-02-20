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
        'theme-red': '#FF4656',
        'theme-gray-light': '#D5D5D5',
        'theme-gray-medium': '#B7B7B7',
        'theme-gray-dark': '#6B6B6B',
      },
    },
  },
  plugins: [],
};
export default config;
