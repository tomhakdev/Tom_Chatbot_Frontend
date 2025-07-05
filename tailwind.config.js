/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // New sleek blue/gray/white theme
        'primary': '#1e40af', // Rich blue
        'primary-light': '#3b82f6', // Lighter blue
        'primary-dark': '#1e3a8a', // Darker blue
        'secondary': '#64748b', // Cool gray
        'accent': '#06b6d4', // Cyan accent
        
        // Chat specific colors
        'chat-bg': '#f8fafc', // Very light gray/white
        'chat-secondary': '#ffffff', // Pure white
        'chat-sidebar': '#f1f5f9', // Light gray for sidebar
        'chat-hover': '#e2e8f0', // Light gray hover
        'chat-border': '#e2e8f0', // Light gray borders
        'chat-text': '#1e293b', // Dark gray text
        'chat-text-secondary': '#64748b', // Medium gray text
        'chat-blue': '#3b82f6', // Blue for user messages
        'chat-tom': '#1e40af', // Rich blue for Tom's messages
      },
      animation: {
        'typing': 'typing 1.5s ease-in-out infinite',
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        typing: {
          '0%, 60%, 100%': {
            transform: 'translateY(0px)',
            opacity: '0.4',
          },
          '30%': {
            transform: 'translateY(-8px)',
            opacity: '1',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        bounceSubtle: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-2px)',
          },
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'message': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}