import AutoCard from "@/common/AutoCard";
import Modal from "@/common/Modal";
import ModifyInfoForm from "@/common/ModifyInfoForm";
import UserCard from "@/common/UserCard";
import { useEffect, useState } from "react";
import {
  AiOutlineUser,
  AiOutlineUserDelete,
  AiOutlineCar,
  AiOutlineAppstoreAdd,
} from "react-icons/ai";

import { useGetCarsQuery } from "@/redux/api/apiSlice";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "@/redux/users/usersSlice";

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



const Dashboard = () => {
  const dispatch = useDispatch();
  const [toShow, setToShow] = useState({ section: "users", array: [] });
  const [toSearch, setToSearch] = useState("");
  const [modals, setModals] = useState({
    add: { inView: false, onConfirm: async function () {
      const response = await dispatch(createCarDetail({carModel}))
    } },
    createAuction: {}
  });
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  useEffect(() => {
    setToShow((prev) => ({
      ...prev,
      array: [...users].filter((user) => user.isActive && user),
    }));
  }, [users]);

  const {
    data: carsResponse,
    isFetching,
    error: carsError,
  } = useGetCarsQuery();
  const carsList = carsResponse?.data;

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
        setToShow({ section, array: [...carsList] });
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
      <main className="mt-20 flex h-[80vh]">
        <aside className="flex h-full w-[10%] max-w-[100px] flex-col items-center justify-center gap-10 border-r p-2">
          <ul className="flex flex-col gap-10">
            <li
              className={`text-2xl transition-all duration-300 hover:scale-110 ${
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
              className={`text-2xl transition-all duration-300 hover:scale-110 ${
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
              className={`text-2xl transition-all duration-300 hover:scale-110 ${
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
              className={`text-2xl text-gray-400 transition-all duration-300 hover:scale-110 hover:text-black`}
            >
              <button onClick={() => handleViewModal("add")}>
                <AiOutlineAppstoreAdd />
              </button>
            </li>
          </ul>
        </aside>

        <section className="flex h-full w-[90%] flex-col items-center overflow-y-scroll p-2">
          <input
            type="text"
            name="toSearch"
            value={toSearch}
            onChange={handleChange}
            placeholder={`${
              toShow.section === "cars" ? "Buscar publiación" : "Buscar usuario"
            }`}
            className="w-full rounded-md border-2 border-gray-200 bg-gray-50 p-1 outline-none transition-all duration-200 focus:border-gray-300 focus:bg-gray-100"
          />

          <div className="grid w-full grid-cols-2 gap-2 lg:grid-cols-4">
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
