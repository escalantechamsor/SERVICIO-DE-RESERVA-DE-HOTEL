
import { Carousel } from "@material-tailwind/react";
import fork from "../img/fork.jpg";
import cama from "../img/cama.jpg";
import salon from "../img/salon.jpg";
import servicio from "../img/servicio.jpg";
import piscinasol from "../img/piscinasol.jpg";
import vistahotel from "../img/vistahotel.jpg";


function Catalog() {
  return (
    <div className="w-full h-[110vh] bg-cover bg-gray-100 bg-fixed  pt-[8vh] bg-salon  ">
     
      <div className=" w-full h-[100%] grid grid-cols-12 grid-rows-6 gap-4 p-5 ">
     
        <div
          className="col-start-1 row-start-1 bg-blue-gray-50 bg-opacity-50 row-span-6 col-span-2 flex flex-col items-center
         justify-center text-gray-800 text-[2.2em] font-extrabold "
        >
          <span> 𝓟 </span>
          <span>𝓐</span>
          <span> 𝓡 </span>
          <span> 𝓐 </span>
          <span> 𝓓 </span>
          <span> 𝓘 </span>
          <span> 𝓢 </span>
          <span> 𝓔 </span>
        </div>
        <div className="col-start-3 row-start-1 col-span-8 row-span-6 ">
        <Carousel className="w-full h-[100%] bg-fixed" autoplay={true} transition={{duration: 5, type:"tween"}} loop={true} >
        <img src={fork} alt="image 1" className="h-full w-full object-cover" />
        <img src={cama} alt="image 2" className="h-full w-full object-cover" />
        <img src={salon} alt="image 3" className="h-full w-full object-cover" />
        <img src={servicio} alt="image 1" className="h-full w-full object-cover" />
        <img src={piscinasol} alt="image 2" className="h-full w-full object-cover" />
        <img src={vistahotel} alt="image 3" className="h-full w-full object-cover" />
      </Carousel>

        </div>
        <div
          className="col-start-11 row-start-1 bg-blue-gray-50 bg-opacity-50 row-span-6 col-span-2 flex flex-col items-center
         justify-center text-gray-800 text-[2.2em] font-extrabold"
        >
          <span> 𝓡 </span>
          <span>𝓔</span>
          <span> 𝓢 </span>
          <span> 𝓞 </span>
          <span> 𝓡 </span>
          <span> 𝓣 </span>
        </div>
       
      </div>
    </div>
  );
}

export default Catalog;

/* 
<div className="bg-gray-800 bg-opacity-20 w-full h-[180vh] grid grid-cols-12 grid-rows-6 gap-4 p-3">
   <div className="lg:col-span-3 md:col-span-6 col-span-12 row-span-3 bg-cover bg-bottom md:bg-mujermenu bg-mujermenudesk bg-no-repeat flex justify-center items-center">RESTAURANT </div>
   <div className="lg:col-span-3 md:col-span-6 col-span-12 row-span-3 bg-hotelroom bg-cover bg-left flex justify-center items-center">ROOMS </div>
   <div className="lg:col-span-3 md:col-span-6 col-span-12 row-span-3 bg-patio bg-cover bg-right-bottom flex justify-center items-center">EXTERIORS</div>
   <div className="lg:col-span-3 md:col-span-6 col-span-12 row-span-3 bg-luces bg-cover  flex justify-center items-center">SPA </div>
   <div className="lg:col-span-3 md:col-span-6 col-span-12 row-span-3 bg-red-500 flex justify-center items-center">RESTAURANT </div>
   <div className="lg:col-span-3 md:col-span-6 col-span-12 row-span-3 bg-red-500 flex justify-center items-center">ROOMS </div>
   <div className="lg:col-span-3 md:col-span-6 col-span-12 row-span-3 bg-red-500 flex justify-center items-center">EXTERIORS</div>
   <div className="lg:col-span-3 md:col-span-6 col-span-12 row-span-3 bg-red-500 flex justify-center items-center">SPA </div>
   </div>

*/
