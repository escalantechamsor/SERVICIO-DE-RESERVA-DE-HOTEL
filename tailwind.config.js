

/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";


export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        woman: "url('src/img/woman.jpg')",
        luces: "url('src/img/luces.jpg')",
        bath: "url('src/img/bath.jpg')",
        desayuno: "url('src/img/desayuno.jpg')",
        fork: "url('src/img/fork.jpg')",
        copa: "url('src/img/copa.jpg')",
        mujermenu: "url('src/img/mujermenu.jpg')",
        mujermenudesk: "url('src/img/mujermenudesk.jpg')",
        cama: "url('src/img/cama.jpg')",
        patio: "url('src/img/patio.jpg')",
        vistahotel: "url('src/img/vistahotel.jpg')",
        hotelroom: "url('src/img/hotelroom.jpg')",
        servicio: "url('src/img/servicio.jpg')",
        frontalhotel: "url('src/img/frontalhotel.jpg')",
        piscinasol: "url('src/img/piscinasol.jpg')",
        salon: "url('src/img/salon.jpg')",
        piscinahotel: "url('src/img/piscinahotel.jpg')",
        palmera: "url('src/img/palmera.jpg')",









      }
    },
  },
  plugins: [],
})