/** Tailwind config for the static build (replaces the old CDN inline configs).
 *  Rebuild css/tailwind.css after adding new utility classes to any page:
 *    npx tailwindcss@3.4.17 -c tailwind.config.js -i tailwind.input.css -o css/tailwind.css --minify
 */
module.exports = {
  content: ['./*.html'],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      colors: {
        primary: 'hsl(47, 87%, 54%)',
        secondary: 'hsl(0, 0%, 9%)',
        accent: 'hsl(47, 87%, 64%)',
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'cursive'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
};
