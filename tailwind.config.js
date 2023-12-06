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
      padding: {
        "25" : "20.5px",
      },
      fontSize: {
      
      }
      ,
      colors: {
        "lead-black" : "#001928",
        "head-black" : "#0E2A4C",
        "head-blue" : "#07F",
        "hero-blue" : "#0077FF",
        "nav-blue" : "#ECF5FF",
        "footer-blue" : "#003B80",
        "home-gra" : "#012956",
        "home-gra-2" : "#2587F7",
        "test-gra" : "#0965CE",
        "test-gra-2" : "#01152C",
        "courses" : "#0E2A4C"
      },
      backgroundImage: {
        "desktop" : "url(./assets/desktop.png)",
        "mobile" : "url(/mobile.png)",
        "feedback" : "url(/feedback.png)"
      },
      margin: {
        "15" : "54.4px"
      },
      height: {
        "80": "80vh",
        "81" : "70vh",
        "82" : "90vh"
      },
      lineHeight: {
        "heading" : "1.385"
      }
    },
    },
  plugins: [
  ],
}