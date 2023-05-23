const SideBar = ({ newListingsCars }) => {
  return (
    <aside>
      <h3 className="text-lg font-bold mx-2 my-4">New Listings</h3>
      {newListingsCars?.map(({ model, description, place, images }) => (
        <article className="max-w-xs m-2 overflow-hidden rounded-md bg-gray-50">
          <div className="grid grid-cols-3 grid-rows-2 gap-2">
            <img
              src={images[0]}
              alt=""
              className="col-span-2 row-span-2 h-full"
            />
            <img src={images[1]} alt="" className="h-full" />
            <img src={images[2]} alt="" className="h-full" />
          </div>

          <div className="py-1 px-3">
            <h4 className="text-lg font-bold">{model}</h4>
            <p className="text-sm">{description}</p>
            <ul className="ml-5 text-sm list-disc">
              {items?.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
            <span className="text-sm text-gray-700">{place}</span>
          </div>
        </article>
      ))}
    </aside>
  );
};

export default SideBar;
