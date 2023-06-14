import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//! ESTE ES UN EJEMPLO DE CÓMO FUNCIONA UN ARCHIVO EN REDUX ASÍNCRONO CON RTK QUERY. ESTE ARCHIVO INCLUYE TODA LA LÓGICA DE ACTION CREATORS Y REDUCERS RELACIONADOS A LA API Y FUNCIONA TANTO CON UNA API EN UN BACKEND EXTERNO (ejemplo en "apiSlice.js"), COMO EN UNA API CONFIGURADA POR NEXT EN EL FRONT (este ejemplo).

// Define a service using a base URL and expected endpoints
export const carsAPISlice = createApi({
  reducerPath: "carsAPISlice",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  // transformResponse: (response, meta, arg) =>
  // response.some.deeply.nested.collection,
  endpoints: (builder) => ({
    getCarsAuthorized: builder.query({
      query: () => ({ url: `api/cars`, method: "get" }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLazyGetCarsAuthorizedQuery, useGetCarsAuthorizedQuery } =
  carsAPISlice;
//* ESTOS HOOKS SE GENERAN AUTOMATICAMENTE (TENES QUE EMPEZAR A ESCRIBIRLOS). AQUELLOS QUE INCLUYAN "LAZY" SON ACTIVADOS CON UN TRIGER, Y LOS QUE NO, SE ACTIVAN AL MOMENTO DE INICIAR LA APLICACIÓN

//? Este es un ejemplo de cómo llamarlo en un componente. No se puede hacer destructuring ni assignment de los métodos.
// const [trigger, result, lastPromiseInfo] = useLazyGetCarsAuthorizedQuery()

//? Este es un ejemplo de cómo llamarlo en un componente. Con esta función sí se puede hacer destructuring y assignment de los métodos.
  //const { data: response, isFetching, error } = useGetCarsAuthorizedQuery();