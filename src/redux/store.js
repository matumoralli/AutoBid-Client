import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import usersSlice from "./users/usersSlice";
import userSlice from "./user/userSlice";
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    user: userSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware().concat(apiSlice.middleware)
  ),
});

setupListeners(store.dispatch);
