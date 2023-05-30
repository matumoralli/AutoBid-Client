import React from 'react'

export default function OurAuctions() {
  return (
    <>
      <h3 className="text-2xl sm:text-4xl font-bold text-center text-gray-900 my-10">Nuestras Subastas</h3>
      <div className='flex text-base p-6 bg-red-50 rounded-lg flex-col md:flex-row leading-5 w-full'>
        <div className=' flex-grow w-full mx-2'>
          <strong>Subasta con Mínimo</strong>
          <p className='text-justify'>
            Estas subastas tienen un precio mínimo secreto, por el cual estás dispuesto a vender tu vehículo. Si el mínimo no es alcanzado, el auto no se vende. Este precio lo elige el vendedor, mientras carga la información.
          </p>
        </div>
        <div className='border-l border-gray-300 divide-y mx-1'/>
        <div className='flex-grow w-full mx-2'>
          <strong>Subasta sin Mínimo</strong>
          <p className='text-justify'>
            En estas subastas el vehículo se vende al usuario con la oferta más grande, sin importar cuál sea el precio alcanzado. Estas subastas suelen generar más interés y más ofertas.
          </p>
        </div>
      </div>
    </>
  )
}
