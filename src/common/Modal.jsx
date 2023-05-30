import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({
  inView,
  handleView,
  onConfirm = () => {},
  onCancel = () => {},
  title,
  children,
}) => {
  const handleClose = () => {
    handleView(false);
    onCancel();
  };

  const handleConfirm = () => {
    handleView(true);
    onConfirm();
  };

  useEffect(() => {
    if (inView) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => (document.body.style.overflow = "");
  }, [inView]);

  return (
    <>
      {inView && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-gray-500 opacity-75"
            onClick={handleClose}
          ></div>

          <div className="relative bg-gray-50 w-1/2 p-6 rounded-md shadow-lg z-10 max-h-[75vh] overflow-y-auto">
            <button
              className="absolute top-0 right-0 m-2 p-1 font-semibold rounded-md border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300"
              onClick={handleClose}
            >
              <AiOutlineClose />
            </button>
            <header>
              <h1 className="mt-4 text-xl font-bold">{title}</h1>
            </header>
            <main className="mt-4 mb-8">{children}</main>
            <footer className="flex justify-center items-center gap-4">
              <button
                className="p-1 rounded-md border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300"
                onClick={handleConfirm}
              >
                Confirmar
              </button>
              <button
                className="p-1 font-semibold rounded-md border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300"
                onClick={handleClose}
              >
                Cancelar
              </button>
            </footer>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
