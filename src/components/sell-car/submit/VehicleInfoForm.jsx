import React from "react";
import { Field, ErrorMessage } from 'formik';

export default function VehicleInfoForm({ formikProps }) {
  const { values, errors, touched } = formikProps;
  
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
              className={`mt-2 h-10 w-full rounded-md bg-gray-100 px-3 ${
                errors.dominio && touched.dominio ? 'border border-red-500' : ''
              }`}
            />
            <ErrorMessage name="dominio" component="div" className="text-red-500 mt-1 text-sm" />
          </div>
          <div>
            <label htmlFor="anio">Año</label>
            <Field
              as="select"
              name="anio"
              id="anio"
              className={`mt-2 h-10 w-full rounded-md bg-gray-100 px-3 ${
                errors.anio && touched.anio ? 'border border-red-500' : ''
              }`}
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
            <ErrorMessage name="anio" component="div" className="text-red-500 mt-1 text-sm" />
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className="">Marca</label>
            <Field
              type="text"
              name="marca"
              className={`mt-2 h-10 w-full rounded-md bg-gray-100 px-3 ${
                errors.marca && touched.marca ? 'border border-red-500' : ''
              }`}
            />
            <ErrorMessage name="marca" component="div" className="text-red-500 mt-1 text-sm" />
          </div>
          <div>
            <label className="">Modelo</label>
            <Field
              type="text"
              name="modelo"
              className={`mt-2 h-10 w-full rounded-md bg-gray-100 px-3 ${
                errors.modelo && touched.modelo ? 'border border-red-500' : ''
              }`}
            />
            <ErrorMessage name="modelo" component="div" className="text-red-500 mt-1 text-sm" />
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className="">Kilometraje</label>
            <Field
              type="number"
              name="kilometraje"
              className={`mt-2 h-10 w-full rounded-md bg-gray-100 px-3 ${
                errors.kilometraje && touched.kilometraje ? 'border border-red-500' : ''
              }`}
            />
            <ErrorMessage name="kilometraje" component="div" className="text-red-500 mt-1 text-sm" />
          </div>
          <div>
            <label htmlFor="transmision">Transmisión</label>
            <Field
              as="select"
              name="transmision"
              id="transmision"
              className={`mt-2 h-10 w-full rounded-md bg-gray-100 px-3 ${
                errors.transmision && touched.transmision ? 'border border-red-500' : ''
              }`}
            >
              <option value="">Elegir Transmisión</option>
              <option value="Automatica">Automática</option>
              <option value="Manual">Manual</option>
            </Field>
            <ErrorMessage name="transmision" component="div" className="text-red-500 mt-1 text-sm" />
          </div>
        </div>
        <div>
          <label className="">Notas / Datos importantes</label>
          <Field
            type="text"
            name="notas"
            className={`mt-2 w-full rounded-md bg-gray-100 px-3 py-2 resize-none ${
              errors.notas && touched.notas ? 'border border-red-500' : ''
            }`}
          />
          <ErrorMessage name="notas" component="div" className="text-red-500 mt-1 text-sm" />
        </div>
        <div>
          <label className="">¿Fue modificado el vehículo?</label>
          <div className='flex flex-row gap-3 mt-2'>
            <Field type="radio" name="fueModificado" value="stock" id="stock" />
            <label htmlFor="stock" className="mr-2">Stock</label>
            <Field type="radio" name="fueModificado" value="modificado" id="modificado" />
            <label htmlFor="modificado">Modificado</label>
          </div>
          <ErrorMessage name="fueModificado" component="div" className="text-red-500 mt-1 text-sm" />
        </div>
        <div>
          <label className="">¿Alguna falla mecánica o cosmética que debamos saber?</label>
          <div className='flex flex-row gap-3 mt-2'>
            <Field type="radio" name="fallaExistente" value="si" />
            <label className="mr-2">Si</label>
            <Field type="radio" name="fallaExistente" value="no"  />
            <label className="mr-2">No</label>
          </div>
          <ErrorMessage name="fallaExistente" component="div" className="text-red-500 mt-1 text-sm" />

          <Field
            type="text"
            name="fallaDescripcion"
            className={`mt-2 w-full rounded-md bg-gray-100 px-3 py-2 resize-none ${
              values.fallaExistente === 'si' ? '' : 'hidden'
            }`}
          />
          <ErrorMessage
            name="fallaDescripcion"
            component="div"
            className={`flex text-red-500 mt-1 text-sm ${
              values.fallaExistente === 'no' ? 'hidden' : ''
            }`}
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
                className={`mt-2 h-10 w-full rounded-md bg-gray-100 px-3 ${
                  errors.provincia && touched.provincia ? 'border border-red-500' : ''
                }`}
              />
              <ErrorMessage name="provincia" component="div" className="text-red-500 mt-1 text-sm" />
            </div>
            <div>
              <label className="">Localidad</label>
              <Field
                type="text"
                name="localidad"
                className={`mt-2 h-10 w-full rounded-md bg-gray-100 px-3 ${
                  errors.localidad && touched.localidad ? 'border border-red-500' : ''
                }`}
              />
              <ErrorMessage name="localidad" component="div" className="text-red-500 mt-1 text-sm" />
            </div>
            <div>
              <label className="">Código Postal</label>
              <Field
                type="number"
                name="codigoPostal"
                className={`mt-2 h-10 w-full rounded-md bg-gray-100 px-3 ${
                  errors.codigoPostal && touched.codigoPostal ? 'border border-red-500' : ''
                }`}
              />
              <ErrorMessage name="codigoPostal" component="div" className="text-red-500 mt-1 text-sm" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
