/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      colors: {
        "primaryGray": "#666666"
      },
      fontFamily: {
        "primaryFont": ["garamond"]
      }
    },
  },
  plugins: [],
}
