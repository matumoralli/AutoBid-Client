import { FiClock } from "react-icons/fi";

const AutoCard = ({ car }) => {
  const { model, description, place, price, timeLeft, images } = car;

  return (
    <article className="m-2 overflow-hidden rounded-md max-w-sm bg-gray-50">
      <div className="relative">
        <img src={images[0]} alt={model + "-image"} />
        <ul className="m-2 py-1 px-3 absolute bottom-0 left-0 flex gap-4 rounded-md bg-zinc-800">
          <li>
            <span className="flex items-center gap-2 text-white font-semibold">
              <span className="text-gray-700">
                <FiClock />
              </span>
              {timeLeft}
            </span>
          </li>
          <li>
            <span className="flex items-center gap-2 text-white font-semibold">
              <span className="text-gray-700">Bid</span> ${price}
            </span>
          </li>
        </ul>
      </div>
      <div className="py-3">
        <h3 className="text-lg font-bold">{model}</h3>
        <p className="text-sm">{description}</p>
        <span className="text-sm text-gray-700">{place}</span>
      </div>
    </article>
  );
};

export default AutoCard;
