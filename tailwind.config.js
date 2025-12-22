
module.exports = {
  theme: {
    extend: {
      keyframes: {
        rainbow: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        rainbow: 'rainbow 3s linear infinite',
      },
    },
  },
};
