import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

  const pdfPath = '/GuiaFotos.pdf';

  // Lo que hace const handleImageChange es convertir la imagen en string base64 y agregarla a la formData, usando el metodo FileReader de Js..
  // Esto permite que la imagen se envie correctamente como string al servidor en lugar de mandarla como objeto o un array provocando una BadRequest 400.
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, img: reader.result });
    };
    reader.readAsDataURL(file);
  };

export default function PhotosForm() {
  return (
    <div className="relative border border-gray-100 space-y-3 mx-auto rounded-md bg-white p-6 shadow-md lg:p-10 my-6">
      <h1 className="mb-4 text-xl font-bold lg:text-2xl">Fotos</h1>
      <div>
        <label className="">Por favor carga por lo menos 5 fotos del exterior e interior de tu vehículo</label>
        <div className="flex h-56 w-full flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-gray-300 p-5 text-center">
          <Image src="/../public/imageFile.png" alt='imgNotFound' className="h-16 w-16" width={64} height={64} />
          <p className="text-sm text-gray-600">Suelte el archivo de imagen deseado aquí para comenzar la carga</p>
          <input type="file" onChange={handleImageChange} 
            className="max-w-full rounded-lg px-2 font-medium text-blue-600 outline-none ring-blue-600 focus:ring-1" 
          />
        </div>
        <p className='text-sm mt-2'>
          Para saber cómo tomar buenas fotos, revisa nuestra <Link className='underline text-red-500' target="_blank" rel="noopener noreferrer" href={pdfPath}>Guía de Fotos</Link>
        </p>
      </div>
    </div>
  )
}
