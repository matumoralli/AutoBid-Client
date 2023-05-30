import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Pagination = ({ maxLength, pageStg }) => {
  const [page, setPage] = pageStg;
  const showEllipsis = maxLength > 10;

  const handlePrevPage = () => page > 1 && setPage(page - 1);
  const handleNextPage = () => page < maxLength && setPage(page + 1);

  const renderPaginationItems = () => {
    if (maxLength <= 3) {
      return [...Array(maxLength)].map((_, index) =>
        renderPaginationItem(index + 1)
      );
    } else {
      const firstPage = renderPaginationItem(1);
      const lastPage = renderPaginationItem(maxLength);

      if (page <= 2) {
        return [
          firstPage,
          renderPaginationItem(2),
          renderPaginationItem(3),
          showEllipsis && renderEllipsis(),
          lastPage,
        ];
      } else if (page >= maxLength - 1) {
        return [
          firstPage,
          showEllipsis && renderEllipsis(),
          renderPaginationItem(maxLength - 2),
          renderPaginationItem(maxLength - 1),
          lastPage,
        ];
      } else {
        return [
          firstPage,
          showEllipsis && renderEllipsis(),
          renderPaginationItem(page - 1),
          renderPaginationItem(page),
          renderPaginationItem(page + 1),
          showEllipsis && renderEllipsis(),
          lastPage,
        ];
      }
    }
  };

  const renderPaginationItem = (pageNumber) => (
    <li key={pageNumber + "-paginationItem"}>
      <button
        className={`flex justify-center items-center h-8 w-8 ${
          page === pageNumber
            ? "bg-red-500 text-white hover:cursor-default"
            : "hover:bg-red-500 hover:text-white"
        } transition-all duration-300`}
        onClick={() => setPage(pageNumber)}
      >
        {pageNumber}
      </button>
    </li>
  );

  const renderEllipsis = () => (
    <li className="flex justify-center items-center h-8 w-8">...</li>
  );

  return (
    <nav className="mt-8 flex items-center justify-center">
      <ul className="flex items-center justify-center border-2 border-red-500 rounded-md  text-lg text-red-500">
        <li>
          <button
            className={`flex justify-center items-center h-8 w-8 transition-all duration-300 ${
              page === 1
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-red-500 hover:text-white"
            }`}
            onClick={handlePrevPage}
          >
            <MdOutlineKeyboardArrowLeft />
          </button>
        </li>

        {renderPaginationItems()}

        <li>
          <button
            className={`flex justify-center items-center h-8 w-8  transition-all duration-300 ${
              page === maxLength
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-red-500 hover:text-white"
            }`}
            onClick={handleNextPage}
          >
            <MdOutlineKeyboardArrowRight />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
