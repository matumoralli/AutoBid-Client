import React, { useState, useCallback } from "react";
import CountDownTimer from "@/common/CountDownTimer";
import DefButton from "@/common/DefButton";
import Modal from "@/common/Modal";
import { FiClock } from "react-icons/fi";
import { twMerge } from "tailwind-merge";
import { assignAuctionCredit, buyCredit } from "@/redux/user/userSlice";

export default function CountDownBar({
  user,
  auction,
  router,
  className,
  dispatch,
}) {
  const [modals, setModals] = useState({
    buyCredit: {
      inView: false,
      onConfirm: async function () {
        const response = await dispatch(buyCredit({ userId: user.id }));
        window.open(response.payload.URL, "_blank");
        location.reload();
      },
    },
    register: {
      inView: false,
      onConfirm: async function () {
        router.push(`/api/auth/login?returnTo=${router.asPath}`);
      },
    },
    assignCredit: {
      inView: false,
      onConfirm: async function () {
        const response = await dispatch(
          assignAuctionCredit({ email: user.email, auctionId: auction.id })
        );
        setAssignedCredit((prev) => {
          return { ...prev, id: response.payload.id };
        });
      },
    },
    offer: {
      inView: false,
      onConfirm: async function () {
        const response = await dispatch(
          assignAuctionCredit({ email: user.email, auctionId: auction.id })
        );
        setAssignedCredit((prev) => {
          return { ...prev, id: response.payload.id };
        });
      },
    },
  });
  const [assignedCredit, setAssignedCredit] = useState({});

  const renderAuctionButton = (userObject = {}, auctionObject = {}) => {
    if (
      userObject?.Credits?.find(
        (credit) => credit.AuctionId === auctionObject.id
      ) ||
      assignedCredit?.id
    ) {
      return (
        <DefButton
          onClick={() => handleViewModal("offer")}
          className={"bg-green-600 text-white hover:bg-green-700"}
        >
          Ofertar
        </DefButton>
      );
    }

    if (userObject?.Credits?.find((credit) => credit.AuctionId === null)) {
      return (
        <DefButton
          onClick={() => handleViewModal("assignCredit")}
          className={"bg-yellow-600 text-white hover:bg-yellow-700"}
        >
          Participar
        </DefButton>
      );
    }

    if (userObject?.Credits?.length === 0) {
      return (
        <DefButton
          onClick={() => handleViewModal("buyCredit")}
          className={"bg-red-700 text-white"}
        >
          Participar
        </DefButton>
      );
    }

    return (
      <DefButton
        onClick={() => handleViewModal("register")}
        className={"bg-gray-600 text-white hover:bg-gray-700"}
      >
        Participar
      </DefButton>
    );
  };

  const c = twMerge("", className);

  const handleViewModal = useCallback((modal) => {
    setModals((prev) => {
      return {
        ...prev,
        [modal]: { ...prev[modal], inView: !prev[modal].inView },
      };
    });
  }, []);

  return (
    <>
      <a href="#scrollDown" className={c}>
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

          {renderAuctionButton(user, auction)}
        </div>
      </a>
      <Modal
        title="Participar en subastas"
        inView={modals.assignCredit.inView}
        handleView={() => handleViewModal("assignCredit")}
        onConfirm={modals.assignCredit.onConfirm}
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
        onConfirm={modals.buyCredit.onConfirm}
      >
        Para participar en una subasta, primero debes comprar un crédito.
        Recuerda que un crédito sólo te habilita a participar en una subasta.
      </Modal>

      <Modal
        title="Participar en subastas"
        inView={modals.register.inView}
        handleView={() => handleViewModal("register")}
        onConfirm={modals.register.onConfirm}
      >
        Para participar en una subasta debes ser un usuario registrado y comprar
        un crédito.
      </Modal>

      <Modal
        title="Ofertar"
        inView={modals.offer.inView}
        handleView={() => handleViewModal("offer")}
        onConfirm={modals.offer.onConfirm}
      >
        <form className="flex gap-2" action="submit">
          <label for="ammount">Ingresa tu oferta</label>
          <input
            className="rounded-sm border-2 border-gray-300"
            id="ammount"
            type="number"
          />
        </form>
        <p className="  text-red-800">
          Recuerda que tu oferta debe ser mayor a la oferta actual.
        </p>
      </Modal>
    </>
  );
}
