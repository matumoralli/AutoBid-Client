const generateArray = (max) => {
  const arr = [];
  for (let i = 1; i <= max; i++) arr.push(i);
  return arr;
};

const Pagination = ({ maxLength, pageStg }) => {
  const [page, setPage] = pageStg;

  const handlePrevPage = () => page > 1 && setPage(page - 1);
  const handleNextPage = () => page < maxLength && setPage(page + 1);

  return (
    <nav className="mt-8 flex items-center justify-center">
      <ul className="flex items-center justify-center border-2 border-red-500 rounded-md  text-lg text-red-500">
        <li>
          <button
            className={`p-2 transition-all duration-300 ${
              page === 1
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-red-500 hover:text-white"
            }`}
            onClick={handlePrevPage}
          >
            {"<"}
          </button>
        </li>

        {generateArray(maxLength).map((cur) => (
          <li key={cur + "-paginationItem"}>
            <button
              className={`p-2 ${
                page === cur
                  ? "bg-red-500 text-white hover:cursor-default"
                  : "hover:bg-red-500 hover:text-white"
              } transition-all duration-300`}
              onClick={() => setPage(cur)}
            >
              {cur}
            </button>
          </li>
        ))}

        <li>
          <button
            className={`p-2  transition-all duration-300 ${
              page === maxLength
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-red-500 hover:text-white"
            }`}
            onClick={handleNextPage}
          >
            {">"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
