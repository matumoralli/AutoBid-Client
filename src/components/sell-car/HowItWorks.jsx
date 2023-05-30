import React from "react";
import { TbMessages } from "react-icons/tb";
import { AiOutlineCalendar, AiOutlineProfile, AiOutlineCamera, AiOutlineSolution  } from "react-icons/ai";
import { BsCheck2Square } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa";

export default function HowItWorks() {
  return (
    <>
      <h3 className="text-2xl sm:text-4xl font-bold text-center text-gray-900 mt-20">
        Cómo Funciona
      </h3>
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
                <i className=" text-4xl text-black">
                  <AiOutlineProfile />
                </i>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <p className="leading-relaxed">
                  Carga la información sobre tu vehículo
                </p>
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
                <i className=" text-4xl text-black">
                  <BsCheck2Square />
                </i>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <p className="leading-relaxed">
                  Revisamos tu vehículo y te avisamos si fue aceptado
                </p>
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
                <i className=" text-4xl text-black">
                  <AiOutlineCamera />
                </i>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <p className="leading-relaxed">
                  Si fue aceptado, te pediremos mas información y fotos
                </p>
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
                <i className=" text-4xl text-black">
                  <TbMessages />
                </i>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <p className="leading-relaxed">
                  Creamos una publicación que describa tu vehículo, y esperamos
                  tu aprobacion
                </p>
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
                <i className="text-4xl text-black">
                  <AiOutlineCalendar />
                </i>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <p className="leading-relaxed">
                  Te pedimos una fecha que refieras para la subasta
                </p>
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
                <i className="text-4xl text-black">
                  <AiOutlineSolution />
                </i>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <p className="leading-relaxed">
                  Tu publicación estará disponible por 1 semana
                </p>
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
                <i className="text-4xl text-black">
                  <FaRegHandshake />
                </i>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <p className="leading-relaxed">
                  Cuando la subasta termine, te conectamos con el ganador, así
                  pueden terminar la transacción
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
