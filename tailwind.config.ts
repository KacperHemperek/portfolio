import type { Config } from 'tailwindcss';

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
      colors: {
        background: 'rgb(var(--bg-color) / <alpha-value>)',
        primary: 'rgb(var(--primary-color) / <alpha-value>)',
        'background-muted': 'rgb(var(--bg-muted-color) / <alpha-value>)',
      },
      fontFamily: {
        roboto: 'var(--roboto-mono)',
      },
    },
  },
  plugins: [],
};
export default config;
