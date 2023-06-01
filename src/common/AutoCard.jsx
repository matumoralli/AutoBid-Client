import { useEffect, useState } from "react";
import { FiClock } from "react-icons/fi";
import { MdVerified, MdDelete, MdBrush } from "react-icons/md";
import Modal from "../common/Modal";
import ModifyInfoForm from "./ModifyInfoForm";
import Link from "next/link";
import { leftTime } from "@/utils";

const handleDelete = () => {};
const handleUpdate = () => {};

const AutoCard = ({ car, adminOpt = false }) => {
  const {
    id,
    brand,
    model,
    equipement,
    kilometers,
    price,
    year,
    images,
    checked,
    date,
  } = car;

  const [timeToEnd, setTimeToEnd] = useState(leftTime(date));
  const [modals, setModals] = useState({
    delete: { inView: false, onConfirm: handleDelete },
    update: { inView: false, onConfirm: handleUpdate },
  });

  const handleViewModal = (modal) => {
    setModals({
      ...modals,
      [modal]: { ...modals[modal], inView: !modals[modal].inView },
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeToEnd(leftTime(date));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [date]);

  return (
    <article className="group m-2 max-w-sm overflow-hidden rounded-md bg-gray-50 transition-all duration-150 hover:bg-gray-200">
      <div className="relative">
        <img
          src={images[0]}
          alt={brand + model + "-image"}
          className="max-h-[16rem] w-full"
        />

        {adminOpt && (
          <ul className="absolute right-0 top-0 m-2 flex scale-0 items-center gap-2 text-lg text-white transition-all duration-300 group-hover:scale-100">
            <li>
              <button
                className="rounded-md border-2 border-red-500 p-1 text-red-500 transition-all duration-300 hover:bg-red-500 hover:text-white"
                onClick={() => handleViewModal("delete")}
              >
                <MdDelete />
              </button>
            </li>
            <li>
              <button
                className="rounded-md border-2 border-blue-500 p-1 text-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white"
                onClick={() => handleViewModal("update")}
              >
                <MdBrush />
              </button>
            </li>
          </ul>
        )}

        {
          <Modal
            title={"¿Estas seguro?"}
            inView={modals.delete.inView}
            handleView={() => handleViewModal("delete")}
          >
            <p>
              No hay vuelta atrás en esta acción, una vez que la publicación es
              eliminado no podrá recuperarlo y <b>"{brand + " " + model}"</b>{" "}
              será eliminado de nuestro base de datos
            </p>
          </Modal>
        }
        {
          <Modal
            title={brand + " " + model}
            inView={modals.update.inView}
            handleView={() => handleViewModal("update")}
          >
            <ModifyInfoForm obj={car} />
          </Modal>
        }

        <ul className="absolute bottom-0 left-0 m-2 flex items-center gap-4 rounded-md bg-zinc-800 px-3 py-1">
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
              <span className="text-gray-700">Bid</span> ${price}
            </span>
          </li>
        </ul>
      </div>
      <div className="px-2 py-3">
        <Link
          href={`/car/${id}`}
          className="flex items-center gap-2 text-lg font-bold hover:underline"
        >
          {checked && (
            <span className="text-red-500">
              <MdVerified />
            </span>
          )}
          {`${year} ${brand} ${model}`}
        </Link>
        <p className="text-sm">{equipement}</p>
        <span className="text-sm text-gray-400">{kilometers}km</span>
      </div>
    </article>
  );
};

export default AutoCard;
