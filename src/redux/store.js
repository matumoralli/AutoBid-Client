import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import counterReducer from "./counter/counterSlice";
import { pokemonApi } from "./api/pokeApiSlice";
import { apiSlice } from "./api/apiSlice";
import { carsSlice } from "./slices/cars";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cars: carsSlice.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware().concat(pokemonApi.middleware),
    getDefaultMiddleware().concat(apiSlice.middleware)
  ),
});

setupListeners(store.dispatch);
