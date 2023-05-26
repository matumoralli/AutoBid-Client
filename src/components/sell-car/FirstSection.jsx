import React from 'react';
import SubmitButton from '@/components/sell-car/SubmitButton';
import { TbMessages } from "react-icons/tb";
import { AiOutlineCalendar,AiOutlineCheckCircle } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";

export default function FirstSection() {
  return (
    <>
      <div className='flex justify-center'>
        <div className="text-justify mb-5 ">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 border-b-8 inline-block border-red-500">Vende con AutoBid!</h1>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">Un lugar especial, para tu auto especial.</h2>
        </div>
      </div>
      <div className="sm:mx-auto sm:mb-2 flex-col w-full md:w-[95%] lg:w-[90%]">
        <div className="p-2">
          <div className="bg-red-50 rounded flex p-4 h-full items-center">
            <span className="font-medium flex items-center">
              <i className='mr-2'><TbMessages className="text-2xl text-black mx-1"/></i>Soporte en vivo desde el listado hasta luego de la subasta.
            </span>
          </div>
        </div>
        <div className="p-2">
          <div className="bg-red-50  rounded flex p-4 h-full items-center">
            <span className="font-medium flex items-center">
              <i className='mr-2'><AiOutlineCalendar className="text-2xl text-black mx-1"/></i>Vende tu auto en 7 días.
            </span>
          </div>
        </div>
        <div className="p-2">
          <div className="bg-red-50  rounded flex p-4 h-full items-center">
            <span className="font-medium flex items-center">
              <i className='mr-2'><AiOutlineCheckCircle className="text-2xl text-black mx-1"/></i>Accede a nuestra gran comunidad de aficionados a los autos.
            </span>
          </div>
        </div>
        <div className="p-2">
          <div className="bg-red-50 rounded flex p-4 h-full items-center">
            <span className="font-medium flex items-center">
              <i className='mr-2'><BsCurrencyDollar className="text-2xl text-black mx-1"/></i>Vende gratis y recibí el 100% del valor de venta.
            </span>
          </div>
        </div>
      </div>
      <div className='flex-wrap border-b'>
        <h3 className="text-2xl sm:text-4xl font-bold text-center text-gray-900 mb-4">Aplica en minutos y te responderemos rápidamente.</h3>
        <SubmitButton/> 
      </div>
    </>
  )
};
