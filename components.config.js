const plugin = require('tailwindcss/plugin');

const utilities = {
  '.scrollbar-hide': {
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
};

const customization = plugin(function ({ addUtilities }) {
  addUtilities(utilities);
});

module.exports = customization;
