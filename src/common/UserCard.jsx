import { useState } from "react";
import { MdCircle, MdVerified, MdDelete, MdBrush } from "react-icons/md";
import { BiCoin } from "react-icons/bi";
import Modal from "./Modal";
import ModifyInfoForm from "./ModifyInfoForm";
import { giveUserCredit, deleteUserCredit } from "@/redux/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";

const handleDelete = () => {};
const handleUpdate = () => {};
const handleGiveCredit = () => {};

const UserCard = ({ user, adminOpt = false }) => {
  const { name, email, image, isAdmin, isActive, Credits } = user;
  const dispatch = useDispatch();
  const [modals, setModals] = useState({
    delete: { inView: false, onConfirm: handleDelete },
    update: { inView: false, onConfirm: handleUpdate },
    giveCredit: { inView: false, onConfirm: handleGiveCredit },
  });


  const handleViewModal = (modal) => {
    setModals({
      ...modals,
      [modal]: { ...modals[modal], inView: !modals[modal].inView },
    });
  };

  return (
    <article className="duration-15 group relative mx-1 my-2 flex w-full flex-col items-center rounded-md bg-gray-50 p-6 transition-all">
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
          <li>
            <button
              className="rounded-md border-2 border-emerald-500 p-1 text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white"
              onClick={() => handleViewModal("giveCredit")}
            >
              <BiCoin />
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

      {
        <Modal
          title={"Otorgar crédito"}
          inView={modals.giveCredit.inView}
          handleView={() => handleViewModal("giveCredit")}
        >
          <p>
            Dar crédito a <b>"{name}"</b>. Los créditos son necesarios para
            poder participar en subastas.
          </p>
          <p className="font-bold">
            Número de créditos actuales: <b>{Credits?.length}</b>
          </p>
          <div className="mt-4 flex place-content-center gap-2">
            <button
              className="rounded-md border-2 border-green-500 px-3 py-1 text-green-500 transition-all duration-300 hover:bg-green-500 hover:text-white active:bg-green-600"
              onClick={() => dispatch(giveCredit(email))}
            >
              +
            </button>
            <button
              className="rounded-md border-2 border-red-500 px-3 py-1   font-semibold text-red-500 transition-all duration-300 hover:bg-red-500 hover:text-white  active:bg-red-600"
              onClick={() => dispatch(deleteUserCredit(email))}
            >
              -
            </button>
          </div>
        </Modal>
      }

      <span
        className={`absolute left-0 top-0 m-2 ${
          isActive ? "text-green-500" : "text-red-500"
        }`}
      >
        <MdCircle />
      </span>

      <Image       width={400}
      height={350}
        src={image || "https://source.unsplash.com/random/300/?user"}
        alt={name + "-image"}
        className="mx-4 my-6 max-h-36 rounded-md"
      />

      <div className="text-center">
        <h2 className="flex items-center justify-center gap-2 text-lg font-bold">
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
        className="mt-4 rounded-md border-2 border-red-500 p-1 font-semibold text-red-500 transition-all duration-300 hover:bg-red-500 hover:text-white"
        onClick={() => handleViewModal("update")}
      >
        Ver perfil
      </button>
    </article>
  );
};

export default UserCard;
