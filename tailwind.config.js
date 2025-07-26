/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 다크모드 설정 (클래스 기반)
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
