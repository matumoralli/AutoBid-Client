import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function VehicleInfoForm() {
  const [showTextArea, setShowTextArea] = useState(false);
  
  return (
    <>
      <div 
        className="relative border border-gray-100 space-y-3 mx-auto rounded-md bg-white p-6 shadow-md lg:p-10 my-4"
      >
        <h1 className="mb-4 text-xl font-bold lg:text-2xl">
          Información del Vehículo
        </h1>
        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className="">Dominio</label>
            <input
              type="text"
              className="mt-2 h-10 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          <div>
            <label className="">Año</label>
            <div className="relative w-56 mt-2 bg-gray-100 rounded-lg">
              <input
                className="peer hidden"
                type="checkbox"
                name="select-1"
                id="select-1"
              />
              <label
                htmlFor="select-1"
                className="flex w-full cursor-pointer rounded-lg select-none border p-2 px-3 text-sm text-gray-700 ring-red-300 peer-checked:ring"
              >
                Elegir Año
              </label>
              <MdKeyboardArrowDown className="pointer-events-none absolute right-5 top-3 h-4 text-gray-600 transition peer-checked:rotate-180" />
              <ul className="max-h-0 select-none flex-col  overflow-y-scroll rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3">
                {Array.from({ length: 75 }, (_, index) => {
                  const year = 2024 - index;
                  return (
                    <li
                      key={year}
                      className="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white"
                    >
                      {year}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className="">Marca</label>
            <input
              type="text"
              className="mt-2 h-10 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          <div>
            <label className="">Modelo</label>
            <input
              type="text"
              className="mt-2 h-10 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className="">Kilometraje</label>
            <input
              type="text"
              className="mt-2 h-10 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          <div>
            <label className="">Transmisión</label>
            <div className="relative w-56 mt-2 bg-gray-100 rounded-lg">
              <input
                className="peer hidden"
                type="checkbox"
                name="select-2"
                id="select-2"
              />
              <label
                for="select-2"
                className="flex w-full cursor-pointer rounded-lg select-none border p-2 px-3 text-sm text-gray-700 ring-red-300 peer-checked:ring"
              >
                Elegir Transmisión
              </label>
              <MdKeyboardArrowDown className="pointer-events-none absolute right-5 top-3 h-4 text-gray-600 transition peer-checked:rotate-180" />
              <ul className="max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3">
                <li className="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white">
                  Automatica
                </li>
                <li className="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white">
                  Manual
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <label className="">Notas / Datos importantes</label>
            <textarea
              type="text"
              className="mt-2 w-full rounded-md bg-gray-100 px-3 py-2 resize-none"
            />
        </div>
        <div>
          <label className="">¿Fue modificado el vehículo?</label>
            <div className='flex flex-row gap-3 mt-2'>
              <button type="button" className='border rounded-md px-3 py-2 bg-gray-100'>Stock</button>
              <button type="button" className='border rounded-md px-3 py-2 bg-gray-100'>Modificado</button>
            </div>
        </div>
        <div>
          <label className="">¿Alguna falla mecánica o cosmética que debamos saber?</label>
          <div className='flex flex-row gap-3 mt-2'>
            <button 
              type="button" 
              onClick={() => setShowTextArea(true)} 
              className='border rounded-md px-3 py-2 bg-gray-100'
            >
              Si
            </button>
            <button 
              type="button" 
              onClick={() => setShowTextArea(false)} 
              className='border rounded-md px-3 py-2 bg-gray-100'
            >
              No
            </button>
          </div>
          <textarea
            type="text"
            className={`mt-2 w-full rounded-md bg-gray-100 px-3 py-2 resize-none ${showTextArea ? '' : 'hidden'}`}
          />
        </div>
        <div className="">
          <label className="">¿Dónde se encuentra el vehículo?</label>
          <div className="grid gap-3 md:grid-cols-2 mt-2">
            <div> 
              <label className="">Provincia</label>
              <input type="text" className="mt-2 h-10 w-full rounded-md bg-gray-100 px-3" />
            </div>
            <div>
              <label className="">Localidad</label>
              <input type="text" className="mt-2 h-10 w-full rounded-md bg-gray-100 px-3" />
            </div>
            <div>
              <label className="">Código Postal</label>
              <input type="text" className="mt-2 h-10 w-full rounded-md bg-gray-100 px-3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
