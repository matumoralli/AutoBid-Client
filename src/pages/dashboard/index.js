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

const users = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password1",
    isActive: true,
    isAdmin: false,
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    password: "password2",
    isActive: true,
    isAdmin: true,
  },
  {
    id: "3",
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    password: "password3",
    isActive: false,
    isAdmin: true,
  },
  {
    id: "4",
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    password: "password4",
    isActive: true,
    isAdmin: false,
  },
  {
    id: "5",
    name: "David Wilson",
    email: "david.wilson@example.com",
    password: "password5",
    isActive: true,
    isAdmin: false,
  },
  {
    id: "6",
    name: "Olivia Davis",
    email: "olivia.davis@example.com",
    password: "password6",
    isActive: false,
    isAdmin: false,
  },
  {
    id: "7",
    name: "James Anderson",
    email: "james.anderson@example.com",
    password: "password7",
    isActive: true,
    isAdmin: false,
  },
  {
    id: "8",
    name: "Sophia Martinez",
    email: "sophia.martinez@example.com",
    password: "password8",
    isActive: true,
    isAdmin: false,
  },
  {
    id: "9",
    name: "William Taylor",
    email: "william.taylor@example.com",
    password: "password9",
    isActive: false,
    isAdmin: false,
  },
  {
    id: "10",
    name: "Ava Hernandez",
    email: "ava.hernandez@example.com",
    password: "password10",
    isActive: true,
    isAdmin: false,
  },
];
const cars = [
  {
    id: "1",
    brand: "Toyota",
    model: "Corolla",
    year: 2018,
    kilometers: 50000,
    domain: "ABC123",
    owner: "John Doe",
    engine: "2.0L",
    transmission: "Automatic",
    driveTrain: "FWD",
    bodyType: "Sedan",
    color: "Silver",
    highlights: "Keyless entry, Backup camera",
    equipement: "Air conditioning, Power windows",
    modifications: "None",
    knownkFlaws: "Minor scratches on the left side",
    services: "Regularly serviced at authorized service center",
    addedItems: "Floor mats, Window tint",
    checked: true,
    image: "https://source.unsplash.com/random/384x256/?cars",
  },
  {
    id: "2",
    brand: "Honda",
    model: "Civic",
    year: 2019,
    kilometers: 40000,
    domain: "XYZ789",
    owner: "Jane Smith",
    engine: "1.5L",
    transmission: "Manual",
    driveTrain: "FWD",
    bodyType: "Coupe",
    color: "Red",
    highlights: "Sunroof, Alloy wheels",
    equipement: "Bluetooth connectivity, Cruise control",
    modifications: "Aftermarket exhaust system",
    knownkFlaws: "Small dent on the rear bumper",
    services: "Serviced at local garage",
    addedItems: "Rear spoiler",
    checked: false,
    image: "https://source.unsplash.com/random/384x256/?cars",
  },
  {
    id: "3",
    brand: "Ford",
    model: "Mustang",
    year: 2020,
    kilometers: 15000,
    domain: "DEF456",
    owner: "Michael Johnson",
    engine: "5.0L",
    transmission: "Automatic",
    driveTrain: "RWD",
    bodyType: "Convertible",
    color: "Black",
    highlights: "Leather seats, Navigation system",
    equipement: "Heated seats, Dual-zone climate control",
    modifications: "Performance exhaust, Cold air intake",
    knownkFlaws: "Scratches on the driver-side door",
    services: "Maintained at authorized dealership",
    addedItems: "Custom wheels",
    checked: false,
    image: "https://source.unsplash.com/random/384x256/?cars",
  },
  {
    id: "4",
    brand: "Chevrolet",
    model: "Camaro",
    year: 2017,
    kilometers: 30000,
    domain: "GHI789",
    owner: "Emily Wilson",
    engine: "3.6L",
    transmission: "Automatic",
    driveTrain: "RWD",
    bodyType: "Coupe",
    color: "Yellow",
    highlights: "RS package, Backup camera",
    equipement: "Keyless entry, Power seats",
    modifications: "Upgraded suspension",
    knownkFlaws: "Small dent on the hood",
    services: "Regularly serviced at independent mechanic",
    addedItems: "Hood stripes",
    checked: true,
    image: "https://source.unsplash.com/random/384x256/?cars",
  },
  {
    id: "5",
    brand: "Volkswagen",
    model: "Golf GTI",
    year: 2016,
    kilometers: 40000,
    domain: "JKL123",
    owner: "Olivia Davis",
    engine: "2.0L",
    transmission: "Automatic",
    driveTrain: "FWD",
    bodyType: "Hatchback",
    color: "White",
    highlights: "Sunroof, LED headlights",
    equipement: "Touchscreen infotainment system, Apple CarPlay",
    modifications: "None",
    knownkFlaws: "Scratches on the rear bumper",
    services: "Serviced at authorized service center",
    addedItems: "Roof rack",
    checked: true,
    image: "https://source.unsplash.com/random/384x256/?cars",
  },
  {
    id: "6",
    brand: "BMW",
    model: "3 Series",
    year: 2019,
    kilometers: 25000,
    domain: "MNO456",
    owner: "James Anderson",
    engine: "2.0L",
    transmission: "Automatic",
    driveTrain: "RWD",
    bodyType: "Sedan",
    color: "Blue",
    highlights: "Navigation system, Leather seats",
    equipement: "Keyless entry, Power trunk",
    modifications: "M Sport package",
    knownkFlaws: "Minor paint chips on the front bumper",
    services: "Serviced at BMW dealership",
    addedItems: "M Performance exhaust",
    checked: false,
    image: "https://source.unsplash.com/random/384x256/?cars",
  },
  {
    id: "7",
    brand: "BMW",
    model: "X5",
    year: 2022,
    kilometers: 5000,
    domain: "XYZ123",
    owner: "Daniel Johnson",
    engine: "3.0L",
    transmission: "Automatic",
    driveTrain: "AWD",
    bodyType: "SUV",
    color: "Black",
    highlights: "Panoramic sunroof, Navigation system",
    equipement: "Leather seats, Heated steering wheel",
    modifications: "None",
    knownkFlaws: "None",
    services: "Regularly serviced at authorized dealership",
    addedItems: "Roof rails, All-weather floor mats",
    checked: true,
    image: "https://source.unsplash.com/random/384x256/?cars",
  },
  {
    id: "8",
    brand: "Audi",
    model: "A4",
    year: 2020,
    kilometers: 20000,
    domain: "STU234",
    owner: "William Taylor",
    engine: "2.0L",
    transmission: "Automatic",
    driveTrain: "AWD",
    bodyType: "Sedan",
    color: "Gray",
    highlights: "Virtual cockpit, Bang & Olufsen sound system",
    equipement: "Leather seats, Parking sensors",
    modifications: "None",
    knownkFlaws: "Small scratch on the rear fender",
    services: "Serviced at authorized service center",
    addedItems: "S-Line exterior package",
    checked: true,
    image: "https://source.unsplash.com/random/384x256/?cars",
  },
  {
    id: "9",
    brand: "Nissan",
    model: "Altima",
    year: 2017,
    kilometers: 35000,
    domain: "VWX567",
    owner: "Ava Hernandez",
    engine: "2.5L",
    transmission: "CVT",
    driveTrain: "FWD",
    bodyType: "Sedan",
    color: "Red",
    highlights: "Remote start, Blind spot detection",
    equipement: "Power windows, Keyless entry",
    modifications: "None",
    knownkFlaws: "Minor dent on the rear bumper",
    services: "Regularly serviced at local mechanic",
    addedItems: "Trunk organizer",
    checked: false,
    image: "https://source.unsplash.com/random/384x256/?cars",
  },
  {
    id: "10",
    brand: "Jeep",
    model: "Wrangler",
    year: 2015,
    kilometers: 60000,
    domain: "YZA890",
    owner: "Benjamin Thompson",
    engine: "3.6L",
    transmission: "Manual",
    driveTrain: "4x4",
    bodyType: "SUV",
    color: "Green",
    highlights: "Removable hardtop, Off-road tires",
    equipement: "Power door locks, Cruise control",
    modifications: "Lift kit, LED light bar",
    knownkFlaws: "Minor rust spots on the fenders",
    services: "Maintained at Jeep dealership",
    addedItems: "Winch",
    checked: false,
    image: "https://source.unsplash.com/random/384x256/?cars",
  },
];
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
        <aside className="p-2 h-full w-[10%] border-r flex flex-col items-center justify-center gap-10">
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
              toShow.section === "cars" ? "Search pulication" : "Search user"
            }`}
            className="w-[95%] p-1 bg-gray-50 border-2 border-gray-200 rounded-md outline-none focus:bg-gray-100 focus:border-gray-300 transition-all duration-200"
          />
          <div className="flex flex-wrap justify-center items-start">
            {
              <>
                {!toShow.array.length && (
                  <h1 className="text-2xl">
                    There is nothing to show in the section - "{toShow.section}"
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
        title="Add publication"
        inView={modals.add.inView}
        handleView={() => handleViewModal("add")}
      >
        <ModifyInfoForm obj={carModel} />
      </Modal>
    </>
  );
};

export default Dashboard;
