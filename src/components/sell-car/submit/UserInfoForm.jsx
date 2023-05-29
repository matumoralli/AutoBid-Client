import React from 'react'
import { Field, ErrorMessage } from 'formik';

export default function UserInfoForm() {
  
  return (
    <div className="relative border border-gray-100 space-y-3 mx-auto rounded-md bg-white p-6 shadow-md lg:p-10 my-6">
      <h1 className="mb-4 text-xl font-bold lg:text-2xl">Tu Información</h1>
      <div>
        <label className="">¿Vendedor particular o concesionario?</label>
        <div className="flex flex-row gap-3 mt-2">
          <Field type="radio" name="sellerType" value="particular" id="particular" />
          <label htmlFor="particular" className="mr-2">Particular</label>
          <Field type="radio" name="sellerType" value="concesionario" id="concesionario" />
          <label htmlFor="concesionario">Concesionario</label>
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <label className="">Nombre Completo</label>
          <Field type="text" name="fullName" className="mt-2 h-10 w-full rounded-md bg-gray-100 px-3" />
          <ErrorMessage name="fullName" component="div" className="text-red-500 mt-1" />
        </div>
        <div>
          <label className="">Número de contacto</label>
          <Field type="text" name="contactNumber" className="mt-2 h-10 w-full rounded-md bg-gray-100 px-3" />
          <ErrorMessage name="contactNumber" component="div" className="text-red-500 mt-1" />
        </div>
      </div>
    </div>
  );
}
