import React, { useState} from 'react'

export default function TitleInfoForm() {
  const [showTextArea, setShowTextArea] = useState(false);

  return (
    <div className="relative border border-gray-100 space-y-3 mx-auto rounded-md bg-white p-6 shadow-md lg:p-10 my-6">
      <h1 className="mb-4 text-xl font-bold lg:text-2xl">Información del Título</h1>
      <div>
        <label className="">¿Sos el titular del vehículo?</label>
          <div className='flex flex-row gap-3 mt-2'>
            <button type='button' onClick={() => setShowTextArea(false)} className='border rounded-md px-3 py-2 bg-gray-100'>Si</button>
            <button type='button' onClick={() => setShowTextArea(true)} className='border rounded-md px-3 py-2 bg-gray-100'>No</button>
          </div>
      </div>
      {showTextArea && (
        <div className="grid gap-3 grid-cols-1">
          <div className="bg-red-100 rounded flex p-4 items-center">
            <span className="font-normal flex items-center text-sm">
              Si está a nombre de otra persona, te pediremos una foto del DNI del titular
            </span>
          </div>
          <label className="">Nombre del titular / Relación con el titular</label>
          <textarea
            type="text"
            className={`w-full rounded-md bg-gray-100 px-3 py-2 resize-none ${showTextArea ? '' : 'hidden'}`}
          />
        </div>
      )}
    </div>
  )
}
