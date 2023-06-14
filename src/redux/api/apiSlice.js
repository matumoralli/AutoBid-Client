import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//!USAR ESTA API SÓLO PARA INFORMACIÓN PÚBLICA, YA QUE NO SOLICITA AUTORIZACIÓN PREVIA DEL USUARIO. TODA LA INFORMACIÓN PRIVADA COMO LA INFORMACIÓN DE LOS USUARIO TIENE QUE PASAR POR "carsApi.js" O "usersApi.js" DE LA CARPETA "API" EN PAGES

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  // transformResponse: (response, meta, arg) =>
  // response.some.deeply.nested.collection,
  endpoints: (builder) => ({
    getCars: builder.query({
      query: () => ({ url: `cars/`, method: "get" }),
    }),
    getCar: builder.query({
      query: (id) => ({ url: `cars/car/${id}`, method: "get" }),
      transformResponse: (response, meta, arg) => response.data[0],
    }),
    getAuction: builder.query({
      query: (id) => ({ url: `auctions/${id}`, method: "get" }),
      transformResponse: (response, meta, arg) => response.data,
    }),
  }),
  
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCarsQuery, useGetCarQuery, useGetAuctionQuery } = apiSlice;
