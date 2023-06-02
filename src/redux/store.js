import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import counterReducer from "./counter/counterSlice";
import usersSlice from "./users/usersSlice";
import userSlice from "./user/userSlice";
import { pokemonApi } from "./api/pokeApiSlice";
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersSlice,
    user: userSlice,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware().concat(pokemonApi.middleware),
    getDefaultMiddleware().concat(apiSlice.middleware)
  ),
});

setupListeners(store.dispatch);
