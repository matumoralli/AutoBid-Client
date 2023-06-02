import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useGetCarsQuery } from "@/redux/api/apiSlice";
import { fetchUsers } from "@/redux/users/usersSlice";

//! NO BORRAR, BACKUP DE LAS FORMAS DE TRAER INFO DESDE LA API

//? DOS ALTERNATIVAS PARA TRAER INFO DESDE LA API:

export default function Test() {
  //* 1era "useDispatch de Redux": pasa por la API en NextJS que verifica que el usuario se haya autentificado con Auth0 antes de pasar al Backend. Utilizar los métodos en las carpetas "user" y "users" en Redux. Debería utilizarse con toda la información privada.
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  console.log(
    "Este es un ejemplo de información privada que necesita autentificación, la lista de usuarios:",
    users
  );

  //* 2da "Redux RTK con Auth0": utilizar un custom Hook hecho con Redux para traer la información de la API (en carpeta ¨Redux") que NO necesita autentificación. Debería utilizarse con toda la información pública.
  const { data: response, isFetching } = useGetCarsQuery();
  const carsList = response?.data;
  console.log(
    "Este es un ejemplo de información pública que no necesita autentificación, la lista de autos:",
    carsList
  );

  return (
    <main className="container m-auto flex h-screen flex-col items-center justify-center gap-2">
      {/* Ejemplo de get con Redux */}
      <h2>My cars (información pública):</h2>
      {carsList?.length > 0 && (
        <div className="flex w-1/2 flex-wrap gap-2">
          {carsList.map((car) => (
            <p key={car.id}>{car.brand}</p>
          ))}
        </div>
      )}

      {/* Ejemplo de get con autentificación de Auth0  */}
      <h2>My users (información privada):</h2>
      {users?.length && (
        <div className="flex w-1/2 flex-wrap gap-2">
          {users.map((user, index) => (
            <p key={index}>{user.name}</p>
          ))}
        </div>
      )}
    </main>
  );
}
