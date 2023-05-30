import { useState } from "react";
import { MdCircle, MdVerified, MdDelete, MdBrush } from "react-icons/md";
import Modal from "./Modal";
import ModifyInfoForm from "./ModifyInfoForm";

const handleDelete = () => {};
const handleUpdate = () => {};

const UserCard = ({ user, adminOpt = false }) => {
  const { name, email, image, isAdmin, isActive } = user;

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
    <article className="relative w-full p-6 my-2 mx-1 rounded-md flex flex-col items-center bg-gray-50 transition-all duration-15 group">
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
          title={"¿Estas seguro?"}
          inView={modals.delete.inView}
          handleView={() => handleViewModal("delete")}
        >
          <p>
            No hay vuelta atrás en esta acción, una vez que se elimina el
            usuario, usted no podrá recuperarlos y <b>"{name}"</b> será
            eliminado de nuestra base de datos.
          </p>
        </Modal>
      }
      {
        <Modal
          title={name}
          inView={modals.update.inView}
          handleView={() => handleViewModal("update")}
        >
          <ModifyInfoForm obj={user} />
        </Modal>
      }

      <span
        className={`absolute top-0 left-0 m-2 ${
          isActive ? "text-green-500" : "text-red-500"
        }`}
      >
        <MdCircle />
      </span>

      <img
        src={image || "https://source.unsplash.com/random/300/?user"}
        alt={name + "-image"}
        className="max-h-36 rounded-md mx-4 my-6"
      />

      <div className="text-center">
        <h2 className="text-lg font-bold flex items-center justify-center gap-2">
          {isAdmin && (
            <span className="text-red-500">
              <MdVerified />
            </span>
          )}
          {name}
        </h2>
        <h3 className="text-sm text-gray-400">{email}</h3>
      </div>

      <button
        className="font-semibold border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-md mt-4 p-1 transition-all duration-300"
        onClick={() => handleViewModal("update")}
      >
        Ver perfil
      </button>
    </article>
  );
};

export default UserCard;
