import { useRouter } from "next/router";
import { cars } from "../../db.json";
import { FiClock, FiSend } from "react-icons/fi";
import AutoInfoTable from "@/common/AutoInfoTable";
import AutoInfoList from "@/common/AutoInfoList";
import Comments from "@/common/Comments";

const CardDetailID = () => {
  const { query } = useRouter();
  const car = cars?.find((car) => Number(car.id) === Number(query.id));

  if (!car)
    return (
      <div className="mt-20 flex min-h-[50vh] items-center justify-center text-2xl">
        No se encontró ninguna coincidencia con el id: <b>{query?.id}</b>
      </div>
    );

  return (
    <main className="mt-20 p-6">
      <h2 className="mb-3 text-xl font-bold">{`${car?.year} ${car?.brand} ${car?.model}`}</h2>

      <section className="grid max-h-[calc(32rem+0.5rem*3)] grid-cols-4 gap-2 overflow-clip rounded-md">
        <img
          src={car?.images[0]}
          alt={`${car?.brand}-${car?.model}-image`}
          className="col-span-3 h-full w-full"
        />

        <div className="col-span-1 flex flex-col gap-2 overflow-hidden">
          <img
            src={car?.images[0]}
            alt={`${car?.brand}-${car?.model}-image`}
            className="max-h-[8rem] w-full"
          />

          <img
            src={car?.images[0]}
            alt={`${car?.brand}-${car?.model}-image`}
            className="max-h-[8rem] w-full"
          />

          <img
            src={car?.images[0]}
            alt={`${car?.brand}-${car?.model}-image`}
            className="max-h-[8rem] w-full"
          />

          <div className="relative">
            <img
              src={car?.images[0]}
              alt={`${car?.brand}-${car?.model}-image`}
              className="max-h-[8rem] w-full"
            />
            <p className="absolute left-1/2 top-1/2 grid h-full w-full -translate-x-1/2 -translate-y-1/2 place-content-center bg-black bg-opacity-75 text-xs font-semibold text-white md:text-lg">
              Más imágines ({car?.images.length})
            </p>
          </div>
        </div>
      </section>

      <ul className="my-2 flex items-center gap-4 rounded-md bg-zinc-800 p-3">
        <li>
          <span className="flex items-center gap-2 font-semibold text-white">
            <span className="text-gray-700">
              <FiClock />
            </span>
            {car?.date}
          </span>
        </li>
        <li>
          <span className="flex items-center gap-2 font-semibold text-white">
            <span className="text-gray-700">Bid</span> ${car?.price}
          </span>
        </li>
      </ul>

      <section className="mt-8">
        <AutoInfoTable car={car} />
      </section>

      <section className="mt-8">
        <AutoInfoList title={"Puntos a favor"} info={car?.highlights} />
        <AutoInfoList title={"Equipamineto"} info={car?.equipement} />
        <AutoInfoList title={"Agregados"} info={car?.addedItems} />
        <AutoInfoList title={"Modificaciones"} info={car?.modifications} />
        <AutoInfoList title={"Imperfecciones"} info={car?.knownFlaws} />
        <AutoInfoList title={"Servicios"} info={car?.services} />
      </section>

      <footer className="mt-8">
        <h3 className="text-2xl font-bold">Comentarios</h3>
        <form className="mb-4 mt-2 flex gap-2">
          <input
            type="text"
            name="toSearch"
            placeholder="Agrega un comentario..."
            className="w-full rounded-md border-2 border-gray-200 bg-gray-50 p-1 outline-none transition-all duration-200 focus:border-gray-300 focus:bg-gray-100"
          />
          <button
            type="submit"
            className="rounded-md border-2 border-blue-500 p-2 text-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white"
          >
            <FiSend />
          </button>
        </form>

        <Comments comments={car?.comments} />
      </footer>
    </main>
  );
};

export default CardDetailID;
