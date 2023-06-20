import React, { useState, useCallback } from "react";
import CountDownTimer from "@/common/CountDownTimer";
import DefButton from "@/common/DefButton";
import Modal from "@/common/Modal";
import { FiClock } from "react-icons/fi";

const handleBuy = () => {};
const handleRegister = () => {};
const handleAssignCredit = () => {};

export default function CountDownBar({ user, auction }) {
  const [modals, setModals] = useState({
    buyCredit: { inView: false, onConfirm: handleBuy },
    register: { inView: false, onConfirm: handleRegister },
    assignCredit: { inView: false, onConfirm: handleAssignCredit },
  });

  const handleViewModal = useCallback((modal) => {
    setModals({
      ...modals,
      [modal]: { ...modals[modal], inView: !modals[modal].inView },
    });
  }, []);

  return (
    <>
      <a href="#scrollDown" className=" active: sticky top-[70px]">
        <div className="grid grid-cols-[30%,_40%,_30%] items-center bg-zinc-800 py-1 pe-1 ps-2 text-white">
          <span className="flex items-center gap-1 font-semibold text-white">
            <span className="text-gray-700">
              <FiClock />
            </span>
            <CountDownTimer endDate={auction.endTime} />
          </span>
          <span className="mx-auto text-lg font-semibold">
            $
            {auction.Bids?.length > 1
              ? auction.Bids[auction.Bids.length - 1].ammount.toLocaleString()
              : auction.minPrice.toLocaleString()}
          </span>
          {user?.Credits ? (
            user.Credits?.find((credit) => credit.AuctionId === null) ? (
              <DefButton
                onClick={() => handleViewModal("assignCredit")}
                className={"bg-green-600 text-white hover:bg-green-700"}
              >
                Participar
              </DefButton>
            ) : (
              <DefButton
                onClick={() => handleViewModal("buyCredit")}
                className={"bg-red-700 text-white"}
              >
                Participar
              </DefButton>
            )
          ) : (
            <DefButton
              onClick={() => handleViewModal("register")}
              className={"bg-gray-600 text-white hover:bg-gray-700"}
            >
              Participar
            </DefButton>
          )}
        </div>
      </a>
      <Modal
        title="Participar en subastas"
        inView={modals.assignCredit.inView}
        handleView={() => handleViewModal("assignCredit")}
      >
        Participar en una subasta requerirá uno de tus créditos disponibles.
        Recuerda que sólo puedes participar en una subasta por crédito. Siempre
        puedes recuperar tu crédito si cambies de opinion sobre la subasta
        actual.
      </Modal>

      <Modal
        title="Participar en subastas"
        inView={modals.buyCredit.inView}
        handleView={() => handleViewModal("buyCredit")}
      >
        Para participar en una subasta, primero debes comprar un crédito.
        Recuerda que un crédito sólo te habilita a participar en una subasta.
      </Modal>

      <Modal
        title="Participar en subastas"
        inView={modals.register.inView}
        handleView={() => handleViewModal("register")}
      >
        Para participar en una subasta debes ser un usuario registrado y comprar
        un crédito.
      </Modal>
    </>
  );
}
