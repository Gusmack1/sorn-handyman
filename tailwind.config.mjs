/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        // Brand tokens (logo-aligned)
        brand: {
          navy: '#0f1e3d', // matches Sorn horizontal logo wordmark
        },
        // Primary — Navy (house + hammer)
        navy: {
          50: '#EEF2F6',
          100: '#D6DEE7',
          200: '#AEBCCC',
          300: '#7F93AA',
          400: '#54708B',
          500: '#33536F',
          600: '#1F3E58',
          700: '#143249',
          800: '#0F2A3F',
          900: '#0A1E2E',
          950: '#06131F',
        },
        // Tool Steel
        steel: {
          50: '#F2F3F5',
          100: '#E2E5E9',
          200: '#C8CDD3',
          300: '#A9B0B9',
          400: '#8A939E',
          500: '#6D7681',
          600: '#55606C',
          700: '#404953',
          800: '#2D343C',
          900: '#1A1F25',
        },
        // Amber CTA
        amber: {
          50: '#FFF7E6',
          100: '#FEECC4',
          200: '#FCD88A',
          300: '#F7BF58',
          400: '#F2A03D',
          500: '#E2871A',
          600: '#B96A0E',
          700: '#8F500A',
          800: '#663906',
          900: '#3E2303',
        },
        // Warm cream page
        cream: {
          50: '#FBF8F2',
          100: '#F5EFE3',
          200: '#EADFC9',
          300: '#D8C9AC',
          400: '#BFAE8A',
        },
        ink: '#10151C',
        // Semantic
        success: {
          DEFAULT: '#1F8F5B',
          600: '#1E7A3E',
        },
        warn: {
          DEFAULT: '#D97706',
          600: '#A35A00',
        },
        error: {
          DEFAULT: '#B42318',
          600: '#B3261E',
        },
        info: {
          DEFAULT: '#2E6FB7',
          600: '#1F5E8A',
        },
      },
      fontFamily: {
        sans: [
          'Inter Tight',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        display: [
          'Bricolage Grotesque',
          'Inter Tight',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '700' }],
        display: ['3.75rem', { lineHeight: '1.08', letterSpacing: '-0.02em', fontWeight: '700' }],
        h1: ['2.75rem', { lineHeight: '1.12', letterSpacing: '-0.015em', fontWeight: '700' }],
        h2: ['2.125rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        h3: ['1.625rem', { lineHeight: '1.25', letterSpacing: '-0.005em', fontWeight: '600' }],
        h4: ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.65' }],
        micro: ['0.75rem', { lineHeight: '1.125rem', letterSpacing: '0.04em', fontWeight: '600' }],
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '20px',
        '2xl': '28px',
      },
      boxShadow: {
        'elev-1': '0 1px 2px 0 rgba(15,42,63,0.06), 0 1px 1px 0 rgba(15,42,63,0.04)',
        'elev-2': '0 4px 12px -2px rgba(15,42,63,0.08), 0 2px 4px -1px rgba(15,42,63,0.05)',
        'elev-3': '0 12px 28px -8px rgba(15,42,63,0.14), 0 4px 8px -2px rgba(15,42,63,0.06)',
        'elev-4': '0 28px 56px -16px rgba(15,42,63,0.22), 0 8px 16px -4px rgba(15,42,63,0.08)',
      },
      maxWidth: {
        site: '88rem',
        prose: '65ch',
        '8xl': '88rem',
      },
      transitionTimingFunction: {
        trade: 'cubic-bezier(0.2, 0, 0, 1)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float-y': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'hero-pan': {
          '0%, 100%': { transform: 'scale(1.05) translate3d(0, 0, 0)' },
          '50%': { transform: 'scale(1.05) translate3d(-1.2%, -0.8%, 0)' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 520ms cubic-bezier(0.34, 1.56, 0.64, 1) both',
        float: 'float-y 6s ease-in-out infinite',
        'hero-pan': 'hero-pan 24s ease-in-out infinite',
        'bounce-soft': 'bounce-soft 2.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
