/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...defaultTheme.colors,
        theme: "#052064",
        allbutton : "#01A6DA"
      },
      borderRadius: {
        'none': '0',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'full': '9999px',
      },
      // backgroundImage: {
      //   'hero-pattern': "url('../src/assets/col1.png')",
      //   'footer-texture': "url('/img/footer-texture.png')",
      // }
    },
  },
  plugins: [
    require('daisyui'),
  ],


}

