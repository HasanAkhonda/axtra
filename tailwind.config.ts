import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kanit', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'slide-in-left': 'slideInLeft 1s ease-out',
        'slide-in-right': 'slideInRight 1s ease-out',
        'fade-in': 'fadeIn 1.5s ease-out',
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    }, // ✅ This closing brace was missing
  },
  plugins: [],
};

export default config;
