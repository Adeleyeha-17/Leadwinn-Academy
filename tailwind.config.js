/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        "lead-black" : "#001928",
        "head-black" : "#0E2A4C",
        "head-blue" : "#07F",
        "nav-blue" : "#ECF5FF",
        "footer-blue" : "#003B80"
      },
      backgroundImage: {
        "home" : "url(/wave.svg)"
      },
      margin: {
        "15" : "54.4px"
      }
    },
  },
  plugins: [],
}