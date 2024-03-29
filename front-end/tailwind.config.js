/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      primary: {
        600: 'rgb(37, 99, 235)',
        700: 'rgb(29, 78, 216)',
      },
      colors: {
        primary: {
          600: 'rgb(37, 99, 235)',
          700: 'rgb(29, 78, 216)',
        },
      },
    },
  },
  plugins: [],
};
