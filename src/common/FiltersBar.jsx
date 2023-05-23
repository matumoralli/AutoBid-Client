import { useState } from "react";

const FiltersBar = () => {
  const filters = [
    "Ending soon",
    "Newly listed",
    "No reserve",
    "Lowest mileage",
    "Closest to me",
  ];
  const [active, setActive] = useState(0);

  const handleSelect = (i) => setActive(i);

  return (
    <nav className="p-2">
      <ul className="flex gap-4 text-sm">
        {filters.map((filter, i) => (
          <li>
            <button
              className={`${
                active === i
                  ? "text-black relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-black"
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
