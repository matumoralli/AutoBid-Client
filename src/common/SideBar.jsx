import { AiOutlineInfoCircle } from "react-icons/ai";
import Tooltip from "./Tooltip";
import { v4 } from "uuid";
import DolarPrice from "./DolarPrice";

const toEquipmentArray = (eq) => eq.split(",").map((word) => word.trim());

const SideBar = ({ newListingsCars }) => {
  const isLogged = true;

  return (
    <aside className="hidden lg:block">
      {isLogged && (
        <div className="mt-2 flex flex-col items-center justify-center gap-2 p-6">
          <span className="grid h-16 w-16 place-content-center rounded-full border-2 border-red-500 text-2xl font-semibold text-red-500">
            5
          </span>
          <span className="flex items-center justify-center gap-1">
            <h3 className="text-xl font-bold">Créditos</h3>
            <Tooltip
              text={
                "Regístrese y abone un crédito para participar en subastas."
              }
            >
              <AiOutlineInfoCircle className="textl-lg fill-gray-500 transition-all duration-300 hover:fill-gray-800" />
            </Tooltip>
          </span>
        </div>
      )}
      <DolarPrice />
      <h3 className="mx-2 mt-2 text-lg font-bold">Nuevos listados</h3>
      {newListingsCars?.map(
        ({ model, description, place, images, equipement }) => (
          <article
            className="m-2 max-w-xs overflow-hidden rounded-md bg-gray-50"
            key={"sideBar" + model + v4()}
          >
            <div className="grid grid-cols-3 grid-rows-2 gap-2">
              <img
                src={images[0]}
                alt=""
                className="col-span-2 row-span-2 h-full"
              />
              <img src={images[0]} alt="" className="h-full" />
              <img src={images[0]} alt="" className="h-full" />
            </div>

            <div className="px-3 py-1">
              <h4 className="text-lg font-bold">{model}</h4>
              <p className="text-sm">{description}</p>
              <ul className="ml-5 list-disc text-sm">
                {toEquipmentArray(equipement)?.map((item, indx) => (
                  <li key={item + indx}>{item}</li>
                ))}
              </ul>
              <span className="text-sm text-gray-700">{place}</span>
            </div>
          </article>
        )
      )}
    </aside>
  );
};

export default SideBar;
