import React, { useState } from "react";
import { Field, ErrorMessage } from 'formik';


export default function VehicleInfoForm({ formikProps }) {
  const { values } = formikProps;
  
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
            <Field
              type="text"
              name="dominio"
              className="mt-2 h-10 w-full rounded-md bg-gray-100 px-3"
            />
            <ErrorMessage name="dominio" component="div" className="text-red-500 mt-1" />
          </div>
          <div>
            <label htmlFor="anio">Año</label>
            <Field
              as="select"
              name="anio"
              id="anio"
              className="mt-2 h-10 w-full rounded-md bg-gray-100 px-3"
            >
              <option value="">Elegir Año</option>
              {Array.from({ length: 75 }, (_, index) => {
                const year = 2024 - index;
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </Field>
            <ErrorMessage name="anio" component="div" className="text-red-500 mt-1" />
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className="">Marca</label>
            <Field
              type="text"
              name="marca"
              className="mt-2 h-10 w-full rounded-md bg-gray-100 px-3"
            />
            <ErrorMessage name="marca" component="div" className="text-red-500 mt-1" />
          </div>
          <div>
            <label className="">Modelo</label>
            <Field
              type="text"
              name="modelo"
              className="mt-2 h-10 w-full rounded-md bg-gray-100 px-3"
            />
            <ErrorMessage name="modelo" component="div" className="text-red-500 mt-1" />
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className="">Kilometraje</label>
            <Field
              type="text"
              name="kilometraje"
              className="mt-2 h-10 w-full rounded-md bg-gray-100 px-3"
            />
            <ErrorMessage name="kilometraje" component="div" className="text-red-500 mt-1" />
          </div>
          <div>
            <label htmlFor="transmision">Transmisión</label>
            <Field
              as="select"
              name="transmision"
              id="transmision"
              className="mt-2 h-10 w-full rounded-md bg-gray-100 px-3"
            >
              <option value="">Elegir Transmisión</option>
              <option value="Automatica">Automática</option>
              <option value="Manual">Manual</option>
            </Field>
            <ErrorMessage name="transmision" component="div" className="text-red-500 mt-1" />
          </div>
        </div>
        <div>
          <label className="">Notas / Datos importantes</label>
          <Field
            type="text"
            name="notas"
            className="mt-2 w-full rounded-md bg-gray-100 px-3 py-2 resize-none"
          />
          <ErrorMessage name="notas" component="div" className="text-red-500 mt-1" />
        </div>
        <div>
          <label className="">¿Fue modificado el vehículo?</label>
          <div className='flex flex-row gap-3 mt-2'>
            <Field type="radio" name="modificacion" value="stock" id="stock" />
            <label htmlFor="stock" className="mr-2">Stock</label>
            <Field type="radio" name="modificacion" value="modificado" id="modificado" />
            <label htmlFor="modificado">Modificado</label>
          </div>
          <ErrorMessage name="modificacion" component="div" className="text-red-500 mt-1" />
        </div>
        <div>
          <label className="">¿Alguna falla mecánica o cosmética que debamos saber?</label>
          <div className='flex flex-row gap-3 mt-2'>
            <Field type="radio" name="fallaExistente" value="si" id="si" />
            <label htmlFor="si" className="mr-2">Si</label>
            <Field type="radio" name="fallaExistente" value="no" id="no" />
            <label htmlFor="no">No</label>
          </div>
          <ErrorMessage name="fallaExistente" component="div" className="text-red-500 mt-1" />

          <Field
            type="text"
            name="falla"
            value="fallaDescripcion"
            className={`mt-2 w-full rounded-md bg-gray-100 px-3 py-2 resize-none ${values.fallaExistente === 'no' ? 'hidden' : ''}`}
          />
        </div>
        <div className="">
          <label className="">¿Dónde se encuentra el vehículo?</label>
          <div className="grid gap-3 md:grid-cols-2 mt-2">
            <div> 
              <label className="">Provincia</label>
              <Field
                type="text"
                name="provincia"
                className="mt-2 h-10 w-full rounded-md bg-gray-100 px-3"
              />
              <ErrorMessage name="provincia" component="div" className="text-red-500 mt-1" />
            </div>
            <div>
              <label className="">Localidad</label>
              <Field
                type="text"
                name="localidad"
                className="mt-2 h-10 w-full rounded-md bg-gray-100 px-3"
              />
              <ErrorMessage name="localidad" component="div" className="text-red-500 mt-1" />
            </div>
            <div>
              <label className="">Código Postal</label>
              <Field
                type="text"
                name="codigoPostal"
                className="mt-2 h-10 w-full rounded-md bg-gray-100 px-3"
              />
              <ErrorMessage name="codigoPostal" component="div" className="text-red-500 mt-1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
