import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

const AutoAllPhotos = ({ images, inView, handleView, children }) => {
  const handleClose = () => handleView(false);

  useEffect(() => {
    if (inView) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => (document.body.style.overflow = "");
  }, [inView]);

  return (
    <>
      <button onClick={handleView}>{children}</button>

      {inView && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-gray-500 opacity-75"
            onClick={handleClose}
          ></div>

          <div className="relative z-10 h-screen w-screen overflow-y-auto bg-black bg-opacity-75 p-6 shadow-lg">
            <button
              className="fixed right-8 top-4 rounded-md border-2 border-red-500 p-1 font-semibold text-red-500 transition-all duration-300 hover:bg-red-500 hover:text-white"
              onClick={handleClose}
            >
              <AiOutlineClose />
            </button>

            <header>
              <h1 className="mt-4 text-xl font-bold text-white">
                Todas las imágenes ({images.length})
              </h1>
            </header>

            <main className="mb-8 mt-4">
              <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 lg:grid-cols-6 lg:gap-6">
                {images.map((route) => (
                  <img src={route} alt={route} />
                ))}
              </div>
            </main>
          </div>
        </div>
      )}
    </>
  );
};

export default AutoAllPhotos;
