/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: {
          50: '#f0efff',
          100: '#e3e1ff',
          200: '#c8c4ff',
          300: '#a69fff',
          400: '#8479ff',
          500: '#6c63ff',
          600: '#584eff',
          700: '#4638e6',
          800: '#382cc2',
          900: '#2d259a',
          950: '#1a1464',
        },
        dark: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          850: '#111827',
          900: '#0b0f19',
          950: '#05070c',
        },
        accent: {
          cyan: '#00d4ff',
          pink: '#f472b6',
          purple: '#6c63ff',
          blue: '#3b82f6',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-down': 'slideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(108, 99, 255, 0.2)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 212, 255, 0.4)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-dark': 'radial-gradient(at 10% 20%, rgba(108, 99, 255, 0.15) 0px, transparent 50%), radial-gradient(at 90% 10%, rgba(0, 212, 255, 0.15) 0px, transparent 50%), radial-gradient(at 50% 80%, rgba(244, 114, 182, 0.1) 0px, transparent 50%)',
        'mesh-light': 'radial-gradient(at 10% 20%, rgba(108, 99, 255, 0.1) 0px, transparent 50%), radial-gradient(at 90% 10%, rgba(0, 212, 255, 0.1) 0px, transparent 50%), radial-gradient(at 50% 80%, rgba(244, 114, 182, 0.08) 0px, transparent 50%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-sm': '0 4px 16px 0 rgba(0, 0, 0, 0.2)',
        'neon-purple': '0 0 25px rgba(108, 99, 255, 0.45)',
        'neon-cyan': '0 0 25px rgba(0, 212, 255, 0.45)',
        'neon-pink': '0 0 25px rgba(244, 114, 182, 0.45)',
      }
    },
  },
  plugins: [],
}
