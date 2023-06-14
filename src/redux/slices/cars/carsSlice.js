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
      state.res = { ...state.res, payload };
    },
    findCarById: (state, { payload }) => {
      if (!state.cars.length)
        state.res = {
          data: {},
          isLoading: false,
          isError: true,
          error: "No se encuentra cargado el estado global",
        };
      else if (!payload)
        state.res = {
          data: {},
          isLoading: false,
          isError: true,
          error: "Faltan parámetros en la función",
        };
      else {
        const car = [...state.cars].find(
          (car) => Number(car.id) === Number(payload)
        );

        car
          ? (state.res.data = car)
          : (state.res = {
              data: {},
              isLoading: false,
              isError: true,
              error: `No se encuentró ningún vehículo con el id: ${payload}`,
            });
      }
    },
  },
});

export const { handleLoadingCars, setCars, setError, setRes, findCarById } =
  carsSlice.actions;
