//import { CreditCardIcon } from "@heroicons/react/24/solid";
import { Button, Card, Input, Option, Select } from "@material-tailwind/react";
import { useState } from "react";

function Reservation() {
  const [reserved, setReserver] = useState(false);

  const reservedDone = (e) => {
    e.preventDefault();
    setReserver(!reserved);
  };

  return (
    <div className="w-full h-[200vh] pt-[15vh] bg-cover bg-gradient-to-r from-blue-400 flex flex-col items-center ">
      <form
        onSubmit={reservedDone}
        className="md:w-[60%] w-[90%] md:h-[128vh] h-auto bg-gray-100 bg-opacity-90 rounded-md "
      >
        <div className="">
          <h2 className="text-center text-[2em] p-4 font-extrabold text-gray-700 bg-blue-300 bg-opacity-80">
            𝚂𝚘𝚕𝚒𝚌𝚒𝚝𝚞𝚍 𝚍𝚎 𝚛𝚎𝚜𝚎𝚛𝚟𝚊
          </h2>
        </div>
        <div className="mt-10 p-7 ">
          <div className="mt-5">
            <Input variant="standar" label="Nombre completo del solicitante" required />
          </div>
          <div className="mt-5">
            <Input variant="standar" label="E-mail de contacto" required />
          </div>
          <div className="mt-5">
            <Input variant="standar" label="Teléfono de contacto" required/>
          </div>
          <div className="flex w-full mt-5">
            <div className=" flex flex-col md:w-[50%] mr-2">
              <label htmlFor="llegada" className="pl-1 text-sm text-blue-gray-500 mb-1">
                Fecha de llegada
              </label>
              <input
                className="w-full p-3 bg-gray-100 bg-opacity-90 border-[1px] border-gray-300 rounded-lg outline-none
             text-gray-600 text-sm"
                type="date"
                name=""
                id="llegada"
              
              />
            </div>
            <div className=" flex flex-col md:w-[50%] ml-2">
              <label htmlFor="salida" className="pl-1 text-sm text-blue-gray-500 mb-1">
                Fecha de salida
              </label>
              <input
                className="w-full p-3 bg-gray-100 bg-opacity-90 border-[1px] border-gray-300 rounded-lg outline-none
             text-gray-600 text-sm"
                type="date"
                name=""
                id="salida" 
              />
            </div>
          </div>
{/* 
          <div className="mt-5">
            <Input
              icon={<CreditCardIcon className="h-5 w-5 text-blue-gray-300" />}
              variant="standar"
              label="Fecha de llegada"
            />
          </div> */}

         
          <div className="mt-5">
            <Input variant="standar" label="Número de acompañantes" />
          </div>
          <div className="my-7 ">
            <Select variant="static" label="Tipo de habitación" aria-required>
              <Option>Lujo</Option>
              <Option>Estándar</Option>
              <Option>Básica</Option>
              <Option>Otra</Option>
            </Select>
          </div>

          <div className="mt-5">
            <Input variant="standar" label="Algo adicional" />
          </div>
          
          <div className="mt-7 mb-10">
            <Select variant="static" label="Solicitar servicio adicional" >
              <Option>Masaje</Option>
              <Option>Aromaterapia</Option>
              <Option>Otra</Option>
            </Select>
          </div>
          <div className="mt-5">
            
          </div>

          <Button type="submit" className="p-4" fullWidth>
            Reservar
          </Button>
        </div>
      </form>

      {reserved ? (
        <Card className="w-[60%] h-[30vh] mt-20 bg-gray-100 bg-opacity-70 text-[1.5em] glex items-center justify-center">
          Reserva realizada. Consulte los detalles de su reserva.
        </Card>
      ) : (
        ""
      )}
    </div>
  );
}

export default Reservation;
