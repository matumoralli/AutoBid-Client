import React from "react";
import { Field, ErrorMessage } from "formik";

export default function TitleInfoForm({ formikProps }) {
  const { values } = formikProps;

  return (
    <div className="relative border border-gray-100 space-y-3 mx-auto rounded-md bg-white p-6 shadow-md lg:p-10 my-6">
      <h1 className="mb-4 text-xl font-bold lg:text-2xl">
        Información del Título
      </h1>
      <div>
        <label className="">¿Sos el titular del vehículo?</label>
        <div className="flex flex-row gap-3 mt-2">
          <Field type="radio" name="esTitular" value="si" />
          <label htmlFor="si">Si</label>
          <Field type="radio" name="esTitular" value="no" />
          <label htmlFor="no">No</label>
        </div>
      </div>
      <ErrorMessage
        name="esTitular"
        component="div"
        className="text-red-500 mt-1 text-sm"
      />

        <div className="grid gap-3 grid-cols-1">
          <div className="bg-red-100 rounded flex p-4 items-center">
            <span className="font-normal flex items-center text-sm">
              Si está a nombre de otra persona, te pediremos una foto del DNI
              del titular
            </span>
          </div>
          <label className={`flex ${
              values.esTitular === 'si' || values.esTitular === '' ? 'hidden' : ''
            }`}>
            Nombre del titular / Relación con el titular
          </label>
          <Field
            type="text"
            name="nombreTitular"
            className={`mt-2 w-full rounded-md bg-gray-100 px-3 py-2 resize-none ${
              values.esTitular === 'no' ? '' : 'hidden'
            }`}
          />
          <ErrorMessage
            name="nombreTitular"
            component="div"
            className={`flex text-red-500 mt-1 text-sm ${
              values.esTitular !== 'no' ? 'hidden' : ''
            }`}
          />
        </div>
    </div>
  );
}
