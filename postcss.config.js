/* eslint-env node */

var tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-import'),
    tailwindcss('./tailwind.config.js'),
  ],
};
