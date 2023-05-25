import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
//! ESTE ES UN EJEMPLO DE CÓMO FUNCIONA UN ARCHIVO EN REDUX ASÍNCRONO. ESTE ARCHIVO INCLUYE TODA LA LÓGICA DE ACTION CREATORS Y REDUCERS RELACIONADOS A LA API.

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi