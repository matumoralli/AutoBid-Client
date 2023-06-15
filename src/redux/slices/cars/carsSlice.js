import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [],
  isLoading: false,
  isError: false,
  error: null,
  res: {
    data: {},
    isLoading: false,
    isError: false,
    error: null,
  },
};

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    handleLoadingCars: (state, { payload }) => {
      state.isLoading = payload;
    },
    setCars: (state, { payload }) => {
      state.cars = payload;
    },
    setError: (state, { payload }) => {
      state.isError = true;
      state.error = payload;
    },
    setRes: (state, { payload }) => {
      state.res = payload;
    },
  },
});

export const { handleLoadingCars, setCars, setError, setRes } =
  carsSlice.actions;
