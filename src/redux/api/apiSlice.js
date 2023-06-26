import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { env } from "../../../next.config";
//!USAR ESTA API SÓLO PARA INFORMACIÓN PÚBLICA, YA QUE NO SOLICITA AUTORIZACIÓN PREVIA DEL USUARIO. TODA LA INFORMACIÓN PRIVADA COMO LA INFORMACIÓN DE LOS USUARIO TIENE QUE PASAR POR "carsApi.js" O "usersApi.js" DE LA CARPETA "API" EN PAGES

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: env.BACKEND_URL }),
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
    getComment: builder.query({
      query: (id) => ({ url: `comments/${id}`, method: "get" }),
      transformResponse: (response, meta, arg) => response.data,
    }),
    getReply: builder.query({
      query: (id) => ({ url: `replies/reply/${id}`, method: "get" }),
      transformResponse: (response, meta, arg) => response.data,
    }),
    getUserAuctions: builder.query({
      query: (userId) => ({ url: `users/user/auctions/${userId}`, method: "get" }),
      transformResponse: (response, meta, arg) => response.data,
    }),
  }),
  
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCarsQuery, useGetCarQuery, useGetAuctionQuery, useLazyGetCommentQuery, useLazyGetReplyQuery, useGetUserAuctionsQuery } = apiSlice;


//* ESTOS HOOKS SE GENERAN AUTOMATICAMENTE (TENES QUE EMPEZAR A ESCRIBIRLOS). AQUELLOS QUE INCLUYAN "LAZY" SON ACTIVADOS CON UN TRIGER, Y LOS QUE NO, SE ACTIVAN AL MOMENTO DE INICIAR LA APLICACIÓN

//? Este es un ejemplo de cómo llamarlo en un componente. No se puede hacer destructuring ni assignment de los métodos.
// const [trigger, result, lastPromiseInfo] = useLazyGetCarsAuthorizedQuery()

//? Este es un ejemplo de cómo llamarlo en un componente. Con esta función sí se puede hacer destructuring y assignment de los métodos.
  //const { data: response, isFetching, error } = useGetCarsAuthorizedQuery();