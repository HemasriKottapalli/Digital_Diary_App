/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors:{
          'custom-pink' : '#ff4e50',
          'custom-yellow' : '#f9d423',
          'light-bg': {
            1: '#FFF9F0',
            2:'#F5F8FA',
            3: '#F8F7FC'
          },
          'text-color':'#4A4A4A',
          'muted-blue':'#445C76 ',
          'dark-coral': '#FF8264',
          'peach': '#FC9D9A'
      }
    }
  },
  plugins: [],
}


