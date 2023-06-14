import { useRouter } from "next/router";
import { FiClock, FiSend } from "react-icons/fi";
import AutoInfoTable from "@/common/AutoInfoTable";
import AutoInfoList from "@/common/AutoInfoList";
import Comments from "@/common/Comments";
import Head from "next/head";
import { useEffect, useState } from "react";
import AutoAllPhotos from "@/common/AutoAllPhotos";
import { MdVerified } from "react-icons/md";
import { leftTime } from "@/utils";
import Tooltip from "@/common/Tooltip";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "@/common/Spinner";
import { findCarById } from "@/redux/slices/cars";

const CardDetailID = () => {
  const { query: carID } = useRouter();

  const dispatch = useDispatch();
  const {
    data: car,
    isLoading,
    isError,
    error,
  } = useSelector(({ cars }) => cars.res);

  useEffect(() => {
    dispatch(findCarById(carID));
  }, [carID]);

  const isLogged = false;
  const haveCredits = false;

  const [timeToEnd, setTimeToEnd] = useState(leftTime(car?.date));
  const [viewAllPhotos, setViewAllPhotos] = useState(false);
  const [newComment, setNewComment] = useState("");

  const handleChange = (e) => setNewComment(e.target.value);
  const handleViewAllPhotos = () => setViewAllPhotos(!viewAllPhotos);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeToEnd(leftTime(car?.date));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [car?.date]);

  if (isLoading) return <Spinner />;
  if (isError)
    return <h1 className="text-center text-xl font-medium">{error}</h1>;

  return (
    <>
      <Head>
        <title>{`${car?.year} ${car?.brand} ${car?.model}`}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto mt-20 max-w-[1440px] p-6">
        <h2 className="mb-3 flex items-center gap-2 text-xl font-bold lg:text-3xl">
          {car?.checked && (
            <span className="text-red-500">
              <MdVerified />
            </span>
          )}
          {`${car?.year} ${car?.brand} ${car?.model}`}
        </h2>

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
              <AutoAllPhotos
                inView={viewAllPhotos}
                handleView={handleViewAllPhotos}
                images={car?.images}
              >
                <img
                  src={car?.images[0]}
                  alt={`${car?.brand}-${car?.model}-image`}
                  className="max-h-[8rem] w-full"
                />
                <p className="absolute left-1/2 top-1/2 grid h-full w-full -translate-x-1/2 -translate-y-1/2 place-content-center bg-black bg-opacity-75 text-[.5rem] font-semibold text-white md:text-lg">
                  Más imágines ({car?.images.length})
                </p>
              </AutoAllPhotos>
            </div>
          </div>
        </section>

        <ul className="my-2 flex items-center gap-4 rounded-md bg-zinc-800 p-3">
          <li>
            <span className="flex items-center gap-2 font-semibold text-white">
              <span className="text-gray-700">
                <FiClock />
              </span>
              {timeToEnd}
            </span>
          </li>
          <li>
            <span className="flex items-center gap-2 font-semibold text-white">
              <span className="text-gray-700">Bid</span> ${car?.price}
            </span>
          </li>
        </ul>

        <Tooltip
          text="Necesitas estar registrado y tener créditos suficientes para poder ofertar"
          view={!isLogged || !haveCredits}
        >
          <button
            className={`w-full rounded-md border-2 p-2 font-medium transition-all duration-300 ${
              !isLogged || !haveCredits
                ? "border-gray-200 bg-gray-50 text-gray-500 hover:cursor-not-allowed"
                : "border-green-400 text-green-400 hover:bg-green-400 hover:text-white"
            }`}
          >
            Ofertar
          </button>
        </Tooltip>

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
          <form className="relative">
            <input
              type="text"
              name="newComment"
              value={newComment}
              onChange={handleChange}
              placeholder="Agrega un comentario..."
              className="mb-2 mt-3 w-full border-b border-gray-500 border-opacity-25 p-1 text-gray-500 outline-none transition-all duration-300 hover:border-opacity-100 focus:border-opacity-100"
            />
            <button
              type="submit"
              className={`absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 ${
                newComment
                  ? "text-opacity-50 hover:scale-105 hover:text-opacity-100"
                  : "text-opacity-25 hover:cursor-not-allowed"
              } transition-all duration-300`}
            >
              <FiSend />
            </button>
          </form>

          <Comments comments={car?.comments} />
        </footer>
      </main>
    </>
  );
};

export default CardDetailID;
