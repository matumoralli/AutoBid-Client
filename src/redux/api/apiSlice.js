import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
//! ESTE ES UN EJEMPLO DE CÓMO FUNCIONA UN ARCHIVO EN REDUX ASÍNCRONO. ESTE ARCHIVO INCLUYE TODA LA LÓGICA DE ACTION CREATORS Y REDUCERS RELACIONADOS A LA API.

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
  // transformResponse: (response, meta, arg) =>
  // response.some.deeply.nested.collection,
  endpoints: (builder) => ({
    getCars: builder.query({
      query: () => ({url: `cars/`, method: 'get'}),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCarsQuery } = apiSlice