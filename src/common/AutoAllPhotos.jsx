import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const AutoAllPhotos = ({ images, inView, handleView, children }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleSelectNext = () => {
    if (selectedImageIndex < images.length)
      setSelectedImageIndex(selectedImageIndex + 1);
  };

  const handleSelectPrev = () => {
    if (selectedImageIndex > 0) setSelectedImageIndex(selectedImageIndex - 1);
  };

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
              className="absolute right-2 top-2 rounded-md border-2 border-red-500 p-1 font-semibold text-red-500 transition-all duration-300 hover:bg-red-500 hover:text-white"
              onClick={handleClose}
            >
              <AiOutlineClose />
            </button>

            <main className="relative flex h-full w-full flex-col items-center justify-center">
              <span className="absolute left-0 top-0 rounded-md bg-black bg-opacity-50 p-2 text-sm font-medium text-white">
                {selectedImageIndex}/{images.length}
              </span>

              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 rounded-md border-2 border-white p-2 text-white transition-all duration-300 hover:bg-white hover:text-black"
                onClick={handleSelectPrev}
              >
                <MdOutlineKeyboardArrowLeft />
              </button>
              <img src={images[selectedImageIndex]} alt="Car image" />
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 rounded-md border-2 border-white p-2 text-white transition-all duration-300 hover:bg-white hover:text-black"
                onClick={handleSelectNext}
              >
                <MdOutlineKeyboardArrowRight />
              </button>
            </main>
          </div>
        </div>
      )}
    </>
  );
};

export default AutoAllPhotos;
