import React from 'react'
import Link from 'next/link'

export default function Support() {
  return (
    <div className="p-4 mt-[94px] max-w-[1440px] mx-auto text-gray-600">
      <div className="container px-0 py-24 mx-auto max-w-3xl">
        <div className="text-justify mb-5 ">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 underline">Soporte</h1>
        </div>
        <h2 className='text-2xl font-bold text-black mb-2'>Contactanos</h2>
        <p className='text-lg'>
          Para ponerte en contacto con el equipo de AutoBid, escribinos al siguiente correo electrónico: 
        </p>
        <br />
        <p className='text-lg text-red-500 underline'>
          soporte@autobid.com
        </p>
        <h2 className='text-2xl font-bold text-black mt-6 mb-2'>Soporte General</h2>
        <p className='text-lg'>
          Para despejar dudas, te recomendamos leer las preguntas más frecuentas que les surgen a nuestros usuarios en la sección{" "}
          <Link href="/about#faqHref" className='underline text-red-500'>Preguntas Frecuentes</Link> 
        </p>
      </div>
    </div>
  )
}
