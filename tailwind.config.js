/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  plugins: [require('@tailwindcss/typography')],
  theme: {
    // uncomment if you want a custom font
    // extend: {
    //   fontFamily: {
    //     sans: ['"Poppins"', 'sans-serif']
    //   }
    // }
  }
};
