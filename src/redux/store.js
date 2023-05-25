import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import { pokemonApi } from "./api/pokeApiSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);
