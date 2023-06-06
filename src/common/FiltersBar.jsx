import { useState } from "react";

const FiltersBar = () => {
  const filters = ["Terminando pronto", "Agregada recientemente", "Sin mínimo"];
  const [active, setActive] = useState(0);

  const handleSelect = (i) => setActive(i);

  return (
    <nav className="p-2">
      <ul className="flex gap-4 text-xs md:text-sm">
        {filters.map((filter, i) => (
          <li key={filter}>
            <button
              className={`${
                active === i
                  ? "relative text-black after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-black after:content-['']"
                  : "text-gray-400 hover:text-black"
              }`}
              onClick={() => handleSelect(i)}
            >
              {filter}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FiltersBar;
