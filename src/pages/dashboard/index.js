import AutoCard from "@/common/AutoCard";
import Modal from "@/common/Modal";
import ModifyInfoForm from "@/common/ModifyInfoForm";
import UserCard from "@/common/UserCard";
import { useState } from "react";
import {
  AiOutlineUser,
  AiOutlineUserDelete,
  AiOutlineCar,
  AiOutlineAppstoreAdd,
} from "react-icons/ai";
import { cars, users } from "../../db.json";

const carModel = {
  id: "",
  brand: "",
  model: "",
  year: "",
  kilometers: "",
  domain: "",
  owner: "",
  engine: "",
  transmission: "",
  driveTrain: "",
  bodyType: "",
  color: "",
  highlights: "",
  equipement: "",
  modifications: "",
  knownkFlaws: "",
  services: "",
  addedItems: "",
  checked: "",
  image: "",
};

const handleAdd = () => {};

const toShowInitialState = () => {
  return {
    section: "users",
    array: [...users].filter((user) => user.isActive && user),
  };
};

const Dashboard = () => {
  const [toShow, setToShow] = useState(toShowInitialState());
  const [toSearch, setToSearch] = useState("");
  const [modals, setModals] = useState({
    add: { inView: false, onConfirm: handleAdd },
  });

  const handleViewModal = (modal) => {
    setModals({
      ...modals,
      [modal]: { ...modals[modal], inView: !modals[modal].inView },
    });
  };

  const handleSelect = (section) => {
    switch (section) {
      case "users":
        setToShow({
          section,
          array: [...users].filter((user) => user.isActive && user),
        });
        break;
      case "banned-users":
        setToShow({
          section,
          array: [...users].filter((user) => !user.isActive && user),
        });
        break;
      case "cars":
        setToShow({ section, array: [...cars] });
        break;
      default:
        setToShow({
          section: "users",
          array: [...users].filter((user) => user.isActive && user),
        });
        break;
    }
  };

  const handleChange = (e) => {
    const toSearchVal = e.target.value;

    setToSearch(toSearchVal);

    if (!toSearchVal) return handleSelect(toShow.section);

    const filteredArray = [...toShow.array].filter((elm) => {
      if (elm["name"]?.toLowerCase()?.includes(toSearch.toLowerCase()))
        return elm;
      if (
        !elm["name"] &&
        (elm["brand"] + elm["model"])
          ?.toLowerCase()
          ?.includes(toSearch.toLowerCase())
      )
        return elm;
    });

    if (filteredArray.length) setToShow({ ...toShow, array: filteredArray });
  };

  return (
    <>
      <main className="h-[80vh] mt-20 flex">
        <aside className="p-2 h-full w-[10%] max-w-[100px] border-r flex flex-col items-center justify-center gap-10">
          <ul className="flex flex-col gap-10">
            <li
              className={`text-2xl hover:scale-110 transition-all duration-300 ${
                toShow.section === "users"
                  ? "text-red-500"
                  : "text-gray-400 hover:text-black"
              }`}
            >
              <button onClick={() => handleSelect("users")}>
                <AiOutlineUser />
              </button>
            </li>
            <li
              className={`text-2xl hover:scale-110 transition-all duration-300 ${
                toShow.section === "banned-users"
                  ? "text-red-500"
                  : "text-gray-400 hover:text-black"
              }`}
            >
              <button onClick={() => handleSelect("banned-users")}>
                <AiOutlineUserDelete />
              </button>
            </li>
            <li
              className={`text-2xl hover:scale-110 transition-all duration-300 ${
                toShow.section === "cars"
                  ? "text-red-500"
                  : "text-gray-400 hover:text-black"
              }`}
            >
              <button onClick={() => handleSelect("cars")}>
                <AiOutlineCar />
              </button>
            </li>
            <li
              className={`text-2xl hover:scale-110 transition-all duration-300 text-gray-400 hover:text-black`}
            >
              <button onClick={() => handleViewModal("add")}>
                <AiOutlineAppstoreAdd />
              </button>
            </li>
          </ul>
        </aside>

        <section className="p-2 h-full w-[90%] overflow-y-scroll flex flex-col items-center">
          <input
            type="text"
            name="toSearch"
            value={toSearch}
            onChange={handleChange}
            placeholder={`${
              toShow.section === "cars" ? "Buscar publiación" : "Buscar usuario"
            }`}
            className="w-full p-1 bg-gray-50 border-2 border-gray-200 rounded-md outline-none focus:bg-gray-100 focus:border-gray-300 transition-all duration-200"
          />

          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-2">
            {
              <>
                {!toShow.array.length && (
                  <h1 className="text-2xl">
                    No hay nada que mostrar en la sección "{toShow.section}"
                  </h1>
                )}
                {toShow.array.map((elm) =>
                  toShow.section === "cars" ? (
                    <AutoCard car={elm} adminOpt={true} key={elm.id + "car"} />
                  ) : (
                    <UserCard
                      user={elm}
                      adminOpt={true}
                      key={elm.id + "user"}
                    />
                  )
                )}
              </>
            }
          </div>
        </section>
      </main>

      <Modal
        title="Añadir publicación"
        inView={modals.add.inView}
        handleView={() => handleViewModal("add")}
      >
        <ModifyInfoForm obj={carModel} />
      </Modal>
    </>
  );
};

export default Dashboard;
