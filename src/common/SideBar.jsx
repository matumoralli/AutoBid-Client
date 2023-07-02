import Image from "next/image";

const SideBar = ({ newListingsCars }) => {
  return (
    <aside className="hidden lg:block">
      <h3 className="mx-2 my-4 text-lg font-bold">Nuevos listados</h3>
      {newListingsCars?.map(
        ({ model, description, place, images, equipement }) => (
          <article
            className="m-2 max-w-xs overflow-hidden rounded-md bg-gray-50"
            key={"sideBar" + model}
          >
            <div className="grid grid-cols-3 grid-rows-2 gap-2">
              {images.map((image, index) => {
                return (
                  <Image
                    key={image + index}
                    width={400}
                    height={350}
                    src={image}
                    alt=""
                    className="col-span-2 row-span-2 h-full"
                    priority={true}
                  />
                );
              })}
            </div>

            <div className="px-3 py-1">
              <h4 className="text-lg font-bold">{model}</h4>
              <p className="text-sm">{description}</p>
              <ul className="ml-5 list-disc text-sm">
                {equipement?.map((item, indx) => (
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
