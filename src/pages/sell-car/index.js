import React from 'react'
import { TbMessages } from "react-icons/tb";
import { AiOutlineCalendar, AiOutlineProfile, AiOutlineCheckCircle, AiOutlineCamera, AiOutlineSolution  } from "react-icons/ai";
import { BsCurrencyDollar, BsCheck2Square } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa";


export default function SellCar() {
  return (
    <div className="p-4 mt-10 max-w-[1440px] mx-auto">
      <section className="text-gray-600">
        <div className="container px-0 py-24 mx-auto max-w-3xl">
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
            <button className="flex mx-auto my-10 text-black font-medium bg-red-500 border-0 py-3 px-16 focus:outline-none hover:bg-red-600 hover:text-white rounded text-xl">
              ¡Aplica para vender!
            </button>
          </div>
          <h3 className="text-2xl sm:text-4xl font-bold text-center text-gray-900 my-10">Nuestras Subastas</h3>
          <div className='flex text-base p-6 bg-red-50 rounded-lg flex-col md:flex-row leading-5 w-full'>
            <div className=' flex-grow w-full mx-2'>
              <strong>Subasta con Mínimo</strong>
              <p className='text-justify'>
                Estas subastas tienen un precio mínimo secreto, por el cual estás dispuesto a vender tu vehículo. Si el mínimo no es alcanzado, el auto no se vende. Este precio lo elige el vendedor, mientras carga la información.
              </p>
            </div>
            <div className='border-l border-gray-300 divide-y mx-1'></div>
            <div className='flex-grow w-full mx-2'>
              <strong>Subasta sin Mínimo</strong>
              <p className='text-justify'>
                En estas subastas el vehículo se vende al usuario con la oferta más grande, sin importar cuál sea el precio alcanzado. Estas subastas suelen generar más interés y más ofertas.
              </p>
            </div>
          </div>
          <h3 className="text-2xl sm:text-4xl font-bold text-center text-gray-900 mt-20">Cómo Funciona</h3>
          <section className="text-gray-600">
            <div className="container px-2 py-8 mx-auto flex flex-wrap flex-col max-w-xs md:max-w-xl lg:max-w-2xl">
              <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-10 font-medium text-sm">
                  1
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-20 h-20 bg-red-100 rounded-full inline-flex items-center justify-center">
                    <i className=' text-4xl text-black'><AiOutlineProfile/></i>
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <p className="leading-relaxed">Carga la información sobre tu vehículo</p>
                  </div>
                </div>
              </div>
              <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-10 font-medium text-sm">
                  2
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-20 h-20 bg-red-100 rounded-full inline-flex items-center justify-center">
                    <i className=' text-4xl text-black'><BsCheck2Square/></i>
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <p className="leading-relaxed">Revisamos tu vehículo y te avisamos si fue aceptado</p>
                  </div>
                </div>
              </div>
              <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z- font-medium text-sm">
                  3
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-20 h-20 bg-red-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                    <i className=' text-4xl text-black'><AiOutlineCamera/></i>
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <p className="leading-relaxed">Si fue aceptado, te pediremos mas información y fotos</p>
                  </div>
                </div>
              </div>
              <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z- font-medium text-sm">
                  4
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-20 h-20 bg-red-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                    <i className=' text-4xl text-black'><TbMessages/></i>
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <p className="leading-relaxed">Creamos una publicación que describa tu vehículo, y esperamos tu aprobacion</p>
                  </div>
                </div>
              </div>
              <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z- font-medium text-sm">
                  5
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-20 h-20 bg-red-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <i className='text-4xl text-black'><AiOutlineCalendar/></i>
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <p className="leading-relaxed">Te pedimos una fecha que refieras para la subasta</p>
                  </div>
                </div>
              </div>
              <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z- font-medium text-sm">
                  6
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-20 h-20 bg-red-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                    <i className='text-4xl text-black'><AiOutlineSolution/></i>
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <p className="leading-relaxed">Tu publicación estará disponible por 1 semana</p>
                  </div>
                </div>
              </div>
              <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z- font-medium text-sm">
                  7
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-20 h-20 bg-red-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                    <i className='text-4xl text-black'><FaRegHandshake/></i>
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <p className="leading-relaxed">Cuando la subasta termine, te conectamos con el ganador, así pueden terminar la transacción</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <button className="flex mx-auto my-5 text-black font-medium bg-red-500 border-0 py-3 px-14 focus:outline-none hover:bg-red-600 hover:text-white rounded text-xl">
            ¡Aplica para vender ahora!
          </button>
        </div>
      </section>
    </div>
  )
}
