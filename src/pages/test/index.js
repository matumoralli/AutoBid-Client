//! NO BORRAR, BACKUP DE LAS FORMAS DE TRAER INFO DESDE LA API
//* DOS ALTERNATIVAS PARA TRAER INFO DESDE LA API:

import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/counter/counterSlice";
import DefButton from "@/common/DefButton";
import useApi from "../../lib/use-api";
import { useGetCarsQuery } from "@/redux/api/apiSlice";

export default function Test() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  //* 1era "NextJS con Auth0"": utilizar el custom Hook useApi o fetch para traer la información de la API (en carpeta "Pages") que necesita autentificación. Debería utilizarse con toda la información privada.
  const { response, error, isLoading } = useApi("./api/user");
  console.log(
    "Este es un ejemplo de información privada, la lista de usuarios:",
    response
  );

  // const getUsers = async () => {
  //   const response = await fetch("./api/user");
  //   const users = response.json();
  //   return users;
  // };

  //* 2da "Redux con Auth0": utilizar un custom Hook hecho con Redux para traer la información de la API (en carpeta ¨Redux") que NO necesita autentificación. Debería utilizarse con toda la información pública.
  const { data: carsList, isFetching } = useGetCarsQuery();
  console.log(
    "Este es un ejemplo de información pública, la lista de autos:",
    carsList
  );

  return (
    <>
      <main className="container flex h-screen items-center justify-center gap-2">
        <h1>The value of counter is {counter}</h1>
        <DefButton onClick={() => dispatch(increment())}>Aumentar</DefButton>
        <DefButton onClick={() => dispatch(decrement())}>Restar</DefButton>
        <div>
          {/* //* Ejemplo de get con Redux */}
          <div>
            {carsList &&
              carsList.data.map((car) => <p key={car.id}>{car.maker}</p>)}
          </div>
          {/* //* Ejemplo de get con Auth0 (isLoading y Error Handling opcional). Solo se va a visualizar con un usuario autentificado*/}
          {isLoading && <p>Loading users...</p>}
          {response && (
            <>
              <h2>My users:</h2>
              <div style={{ color: "green" }}>
                {response.data.map((user, index) => (
                  <p key={index}>{user.name}</p>
                ))}
              </div>
            </>
          )}
          {error && (
            <>
              <h2>Error loading users</h2>
              <div style={{ color: "red" }}>
                {JSON.stringify(error, null, 2)}
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}
