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

      dispatch(setCars(data));
    } catch (error) {
      dispatch(setError(error));
    } finally {
      dispatch(handleLoadingCars(false));
    }
  };
};

export const getCarByID = (carID) => {
  return async (dispatch) => {
    dispatch(
      setRes({ data: {}, isLoading: true, isError: false, error: null })
    );

    try {
      const { data } = await axios.get("../db/cars.json");

      const car = data.find((elm) => Number(elm.id) === Number(carID));

      if (!car) throw Error(`No existe el vehículo con el id: ${carID}`);

      return dispatch(
        setRes({ data: car, isLoading: false, isError: false, error: null })
      );
    } catch (error) {
      dispatch(
        setRes({
          data: {},
          isLoading: false,
          isError: true,
          error: error.message,
        })
      );
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
