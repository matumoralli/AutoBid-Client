import { useState } from "react";
import { FiClock } from "react-icons/fi";
import { MdVerified, MdDelete, MdBrush } from "react-icons/md";
import Modal from "../common/Modal";
import ModifyInfoForm from "./ModifyInfoForm";

const handleDelete = () => {};
const handleUpdate = () => {};

const AutoCard = ({ car, adminOpt = false }) => {
  const { brand, model, equipement, kilometers, price, year, image, checked } =
    car;

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

  return (
    <article className="m-2 overflow-hidden rounded-md max-w-sm bg-gray-50 hover:bg-gray-200 transition-all duration-150 group">
      <div className="relative">
        <img src={image} alt={brand + model + "-image"} />

        {adminOpt && (
          <ul className="absolute top-0 right-0 m-2 flex gap-2 items-center text-white text-lg transition-all duration-300 scale-0 group-hover:scale-100">
            <li>
              <button
                className="p-1 border-2 rounded-md border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300"
                onClick={() => handleViewModal("delete")}
              >
                <MdDelete />
              </button>
            </li>
            <li>
              <button
                className="p-1 border-2 rounded-md border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300"
                onClick={() => handleViewModal("update")}
              >
                <MdBrush />
              </button>
            </li>
          </ul>
        )}

        {
          <Modal
            title={"You're sure?"}
            inView={modals.delete.inView}
            handleView={() => handleViewModal("delete")}
          >
            <p>
              There is no going back on this action, once the publication is
              deleted you will not be able to recover it and{" "}
              <b>"{brand + " " + model}"</b> will be eliminated from our
              database
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

        <ul className="m-2 py-1 px-3 absolute bottom-0 left-0 flex items-center gap-4 rounded-md bg-zinc-800">
          <li>
            <span className="flex items-center gap-2 text-white font-semibold">
              <span className="text-gray-700">
                <FiClock />
              </span>
              {year}
            </span>
          </li>
          <li>
            <span className="flex items-center gap-2 text-white font-semibold">
              <span className="text-gray-700">Bid</span> ${price}
            </span>
          </li>
        </ul>
      </div>
      <div className="py-3 px-2">
        <a
          href="#"
          className="flex items-center gap-2 text-lg font-bold hover:underline"
        >
          {checked && (
            <span className="text-red-500">
              <MdVerified />
            </span>
          )}
          {brand + " "}
          {model}
        </a>
        <p className="text-sm">{equipement}</p>
        <span className="text-sm text-gray-400">{kilometers}km</span>
      </div>
    </article>
  );
};

export default AutoCard;
