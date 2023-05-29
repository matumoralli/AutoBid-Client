import React from "react";
import { Field, ErrorMessage } from "formik";

export default function ReservePriceForm({ formikProps }) {
  const { values, errors, touched } = formikProps;

  return (
    <div className="relative border border-gray-100 space-y-3 mx-auto rounded-md bg-white p-6 shadow-md lg:p-10 my-6">
      <h1 className="mb-4 text-xl font-bold lg:text-2xl">Precio Mínimo</h1>
      <div className="bg-red-100 rounded flex p-4 items-center">
        <span className="font-normal flex items-center text-sm">
          El precio mínimo es el monto mínimo por el cual estarías dispuesto a
          vender tu vehículo, este precio es secreto y los usuarios solo sabrán
          si la subasta tiene un mínimo o no.
        </span>
      </div>

      <div>
        <label className="">¿Quieres poner un precio mínimo de venta?</label>
        <div className="flex flex-row gap-3 mt-2">
          <Field type="radio" name="minReservePrice" value="si" id="si" />
          <label htmlFor="si">Si</label>
          <Field type="radio" name="minReservePrice" value="no" id="no" />
          <label htmlFor="no">No</label>
        </div>
        <ErrorMessage
          name="minReservePrice"
          component="div"
          className="text-red-500 mt-1 text-sm"
        />
      </div>

      {values.minReservePrice === "si" && (
        <div className="grid gap-3 grid-cols-1">
          <label className="">
            ¿Qué precio mínimo te gustaría obtener? (USD$)
          </label>
          <Field
            type="number"
            name="reservePrice"
            className={`mt-2 h-10 w-[50%] rounded-md bg-gray-100 px-3 ${
              errors.reservePrice && touched.reservePrice
                ? "border border-red-500"
                : ""
            }`}
          />
          <ErrorMessage
            name="reservePrice"
            component="div"
            className="text-red-500 mt-1 text-sm"
          />
        </div>
      )}
    </div>
  );
}