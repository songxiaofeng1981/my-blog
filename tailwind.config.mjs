/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#f0f5ff',
          100: '#dce8ff',
          200: '#b9d0ff',
          600: '#1e4db7',
          700: '#1a3f9e',
          800: '#163285',
          900: '#0f2260',
          950: '#0a1640',
        },
        gold: {
          50:  '#fffbeb',
          100: '#fef3c7',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
        },
        ink: {
          900: '#111827',
          800: '#1f2937',
          700: '#374151',
          500: '#6b7280',
          400: '#9ca3af',
          200: '#e5e7eb',
          100: '#f3f4f6',
          50:  '#f9fafb',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body':        theme('colors.ink[800]'),
            '--tw-prose-headings':    theme('colors.brand[900]'),
            '--tw-prose-lead':        theme('colors.ink[700]'),
            '--tw-prose-links':       theme('colors.brand[700]'),
            '--tw-prose-bold':        theme('colors.ink[900]'),
            '--tw-prose-counters':    theme('colors.ink[500]'),
            '--tw-prose-bullets':     theme('colors.gold[600]'),
            '--tw-prose-hr':          theme('colors.ink[200]'),
            '--tw-prose-quotes':      theme('colors.ink[900]'),
            '--tw-prose-quote-borders': theme('colors.gold[500]'),
            '--tw-prose-code':        theme('colors.brand[800]'),
            '--tw-prose-pre-code':    theme('colors.ink[800]'),
            '--tw-prose-pre-bg':      theme('colors.ink[100]'),
            '--tw-prose-th-borders':  theme('colors.ink[300]'),
            '--tw-prose-td-borders':  theme('colors.ink[200]'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
