import React from 'react'

export default function UserInfoForm() {
  
  return (
    <div className="relative border border-gray-100 space-y-3 mx-auto rounded-md bg-white p-6 shadow-md lg:p-10 my-6">
      <h1 className="mb-4 text-xl font-bold lg:text-2xl">Tu Información</h1>
      <div>
        <label className="">¿Vendedor particular o concesionario?</label>
          <div className='flex flex-row gap-3 mt-2'>
            <button type='button' className='border rounded-md px-3 py-2 bg-gray-100'>Particular</button>
            <button type='button' className='border rounded-md px-3 py-2 bg-gray-100'>Concesionario</button>
          </div>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <div> 
          <label className="">Nombre Completo</label>
          <input type="text" className="mt-2 h-10 w-full rounded-md bg-gray-100 px-3" />
        </div>
        <div>
          <label className="">Número de contacto</label>
          <input type="text" className="mt-2 h-10 w-full rounded-md bg-gray-100 px-3" />
        </div>
      </div>
    </div>
  )
}
