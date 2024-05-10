
const purgecss = require('@fullhuman/postcss-purgecss')({
    content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  
  });
  
  module.exports = {
    plugins: [
      'tailwindcss',
      'autoprefixer',
      ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
    ],
  };
  