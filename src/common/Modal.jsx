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
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-gray-500 opacity-75"
            onClick={handleClose}
          ></div>

          <div className="relative z-10 max-h-[75vh] w-1/2 overflow-y-auto rounded-md bg-gray-50 p-6 shadow-lg">
            <button
              className="absolute right-0 top-0 m-2 rounded-md border-2 border-red-500 p-1 font-semibold text-red-500 transition-all duration-300 hover:bg-red-500 hover:text-white"
              onClick={handleClose}
            >
              <AiOutlineClose />
            </button>
            <header>
              <h1 className="mt-4 text-xl font-bold">{title}</h1>
            </header>
            <main className="mb-8 mt-4">{children}</main>
            <footer className="flex items-center justify-center gap-4">
              <button
                className="rounded-md border-2 border-green-500 p-1 text-green-500 transition-all duration-300 hover:bg-green-500 hover:text-white"
                onClick={handleConfirm}
              >
                Confirmar
              </button>
              <button
                className="rounded-md border-2 border-red-500 p-1 font-semibold text-red-500 transition-all duration-300 hover:bg-red-500 hover:text-white"
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
