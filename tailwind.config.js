/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },

      fontSize: {
        base: '8rem', // 16px
        lg: '1.125rem', // 18px
      },
      lineHeight: {
        normal: '1.5', // 150%
        relaxed: '1.625', // 162.5%
      },
    },
  },
  plugins: [],
}
