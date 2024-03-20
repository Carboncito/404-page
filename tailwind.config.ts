import type {Config} from 'tailwindcss';

const THEME_COLORS = {
  transparent: 'transparent',
  'color-white': 'rgb(var(--color-white))',
  'color-black': {
    100: 'rgb(var(--color-black-1))',
    200: 'rgb(var(--color-black-2))',
    900: 'rgb(var(--color-black))',
  },
  'color-blue': 'rgb(var(--color-blue))',
  'color-grey': 'rgb(var(--color-grey))',
  'color-pink': 'rgb(var(--color-pink))',
  'color-teal': 'rgb(var(--color-teal))',
};

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: THEME_COLORS,
    },
    colors: THEME_COLORS
  },
  plugins: [],
};
export default config;
