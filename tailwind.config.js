/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#b70a22",
        second: "#e4ccc0",
        dark: "#3d3d3d",
        black: "#212429",
        trdcolor: "#452a45"
      },
      backgroundImage: {
        'heroimgone': "url('https://res.cloudinary.com/dr6a80sph/image/upload/v1746948512/church_-_Made_with_PosterMyWall_3_wdfxam.jpg')",
        'heroimgtwo': "url('https://res.cloudinary.com/dr6a80sph/image/upload/v1705992451/hhero_c1gym9.jpg')",
        'heroimgthree': "url('https://res.cloudinary.com/dr6a80sph/image/upload/v1705992451/heroo_do7twv.jpg')",
        'suhero': "url('https://res.cloudinary.com/dr6a80sph/image/upload/v1746949070/New_Year_Church_Theme_-_Made_with_PosterMyWall_venfva.jpg')",
        herotwo: "url('assets/herotwoes.jpg')"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
}

