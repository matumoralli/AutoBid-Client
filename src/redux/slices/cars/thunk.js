import { handleLoadingCars, setCars, setError, setRes } from "./carsSlice";
import axios from "axios";

const carsApi = axios.create({
  baseURL: "db/cars.json",
});

export const getCars = () => {
  return async (dispatch) => {
    dispatch(handleLoadingCars(true));

    try {
      const { data } = await carsApi.get();

      console.log(await data);

      dispatch(setCars(data));
    } catch (error) {
      dispatch(setError(error));
    } finally {
      dispatch(handleLoadingCars(false));
    }
  };
};

export const postCar = (car) => {
  return async (dispatch) => {
    try {
      const { data } = await carsApi.post({ car });

      dispatch(setRes({ isError: false, isLoading: false, error: null, data }));
    } catch (error) {
      dispatch(setRes({ isError: true, isLoading: false, error, data: {} }));
    }
  };
};
