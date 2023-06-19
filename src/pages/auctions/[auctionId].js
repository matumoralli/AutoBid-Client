import Image from "next/image";
import { useGetAuctionQuery } from "@/redux/api/apiSlice";
import { useRouter } from "next/router";
import DefButton from "@/common/DefButton";
import { FiClock } from "react-icons/fi";
import { HiDocumentArrowDown } from "react-icons/hi2";
import CountDownTimer from "@/common/CountDownTimer";
import { useEffect, useMemo, useState } from "react";
import commentDate from "@/utils/commentDate";
import formattedDate from "@/utils/formattedDate";
import sortCommentsAndBids from "@/helpers/sortCommentsAndBids";
import { useSelector, useDispatch } from "react-redux";
import Modal from "@/common/Modal";
import { postComment, postReply } from "@/redux/auction/auctionSlice";

const handleBuy = () => {};
const handleRegister = () => {};
const handleAssignCredit = () => {};

export default function Auction() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { data, isFetching } = useGetAuctionQuery(router.query.auctionId);
  const [auction, setAuction] = useState({});
  const { user, loading, error } = useSelector((state) => state.user);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [replyShowing, setReplyShowing] = useState("");
  const [reply, setReply] = useState("");
  const [replies, setReplies] = useState([]);

  const [modals, setModals] = useState({
    buyCredit: { inView: false, onConfirm: handleBuy },
    register: { inView: false, onConfirm: handleRegister },
    assignCredit: { inView: false, onConfirm: handleAssignCredit },
  });

  const handleViewModal = (modal) => {
    setModals({
      ...modals,
      [modal]: { ...modals[modal], inView: !modals[modal].inView },
    });
  };

  useEffect(() => {
    setAuction((prev) => {
      return { ...prev, ...data };
    });
  }, [data]);

  const car = auction.CarDetail;
  const seller = auction.User;

  const commentsBids = useMemo(() => {
    setComments(sortCommentsAndBids(auction?.Comments, auction?.Bids));
    console.log("useMemo ran:", comments);
    return comments;
  }, [auction]);

  const handleComment = async (e) => {
    e.preventDefault();
    const { payload } = await dispatch(
      postComment({ auctionId: auction.id, userId: user.id, comment: comment })
    );
    setComments((prev) => [
      ...prev,
      {
        id: payload?.id,
        content: comment,
        createdAt: payload?.createdAt,
        UserId: user.id,
        AuctionId: auction.id,
        User: { name: user?.name },
      },
    ]);
    return setComment("");
  };

  const handleReply = async (e) => {
    e.preventDefault();
    const { payload } = await dispatch(
      postReply({ commentId: replyShowing, userId: user.id, reply: reply })
    );
    setReplies((prev) => [
      ...prev,
      {
        id: payload?.id,
        createdAt: payload?.createdAt,
        CommentId: replyShowing,
        UserId: user.id,
        content: reply,
      },
    ]);
    return setReply("");
  };

  const showReplies = (e) => {
    e.preventDefault();
    replyShowing === e.target.parentElement.parentElement.attributes.id.value
      ? setReplyShowing("")
      : setReplyShowing(
          e.target.parentElement.parentElement.attributes.id.value
        );
  };

  return (
    car && (
      <main className="mx-auto min-h-[70vh] max-w-[1440px] text-zinc-800 ">
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
          Recuerda que sólo puedes participar en una subasta por crédito.
          Siempre puedes recuperar tu crédito si cambies de opinion sobre la
          subasta actual.
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
          Para participar en una subasta debes ser un usuario registrado y
          comprar un crédito.
        </Modal>

        <section>
          <Image
            src={car.images[0]}
            width={1024}
            height={768}
            alt={car.model}
            priority
          />
        </section>

        <section className="mx-4">
          <div className="flex flex-col items-start">
            <h1 className="text-left text-2xl font-bold">
              {car.year} {car.brand} {car.model}
            </h1>
            <p className="">
              {car.kilometers.toLocaleString()} kilometros,{" "}
              {car.highlights.map((h) => `${h.toLowerCase()}, `)}
            </p>
          </div>
          <p className="text-end text-gray-600">
            Termina el {formattedDate(auction.endTime).split(",")[0]} a las{" "}
            {formattedDate(auction.endTime).split(",")[1]}
          </p>
        </section>

        <section className="flex flex-col pt-5 ">
          <dl className="mx-1 grid grid-cols-[40%,_60%] leading-10">
            <dt className="border-y border-e ps-2 font-semibold">Marca</dt>
            <dd className="flex items-center border-y ps-2">{car.brand}</dd>
            <dt className="border-y border-e ps-2 font-semibold">Modelo</dt>
            <dd className="flex items-center border-y ps-2">{car.model}</dd>
            <dt className="border-y border-e ps-2 font-semibold">Año</dt>
            <dd className="flex items-center border-y ps-2">{car.year}</dd>
            <dt className="border-y border-e ps-2 font-semibold">
              Kilometraje
            </dt>
            <dd className="flex items-center border-y ps-2">
              {car.kilometers.toLocaleString()}
            </dd>
            <dt className="border-y border-e ps-2 font-semibold">Titular</dt>
            <dd className="flex items-center border-y ps-2">{car.owner}</dd>
            <dt className="border-y border-e ps-2 font-semibold">Vendedor</dt>
            <dd className="flex items-center border-y ps-2">{seller.name}</dd>
            <dt className="border-y border-e ps-2 font-semibold">Motor</dt>
            <dd className="flex items-center border-y ps-2">{car.engine}</dd>
            <dt className="border-y border-e ps-2 font-semibold">
              Transmisión
            </dt>
            <dd className="flex items-center border-y ps-2">
              {car.transmission}
            </dd>
            <dt className="border-y border-e ps-2 font-semibold">Tracción</dt>
            <dd className="flex items-center border-y ps-2">
              {car.driveTrain}
            </dd>
            <dt className="border-y border-e ps-2 font-semibold">Segmento</dt>
            <dd className="flex items-center border-y ps-2">{car.bodyType}</dd>
            <dt className="border-y border-e ps-2 font-semibold">Color</dt>
            <dd className="flex items-center border-y ps-2">{car.color}</dd>
            <dt className="border-y border-e ps-2 font-semibold">
              Tipo de vendedor
            </dt>
            <dd className="flex items-center border-y ps-2">
              {auction.sellerType}
            </dd>
          </dl>
        </section>

        <section className="mx-2 border-b-[1px] py-6">
          <h2 className="mb-2 px-2 text-lg font-bold">Destacado</h2>
          <ul className="list-disc pe-1 ps-6 text-[15px] text-zinc-800">
            {car.highlights.map((h, index) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </section>

        <section className="mx-2 border-b-[1px] py-6">
          <h2 className="mb-2 px-2 text-lg font-bold">Equipamiento</h2>
          <ul className="list-disc pe-1 ps-6 text-[15px] text-zinc-800">
            {car.equipement.map((e, index) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </section>

        <section className="mx-2 border-b-[1px] py-6">
          <h2 className="mb-2 px-2 text-lg font-bold">Modificaciones</h2>
          <ul className="list-disc pe-1 ps-6 text-[15px] text-zinc-800">
            {car.modifications.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </section>

        <section className="mx-2 border-b-[1px] py-6">
          <h2 className="mb-2 px-2 text-lg font-bold">Fallas conocidas</h2>
          <ul className="list-disc pe-1 ps-6 text-[15px] text-zinc-800">
            {car.knownFlaws.map((k) => (
              <li key={k}>{k}</li>
            ))}
          </ul>
        </section>

        <section className="mx-2 border-b-[1px] py-6">
          <h2 className="mb-2 px-2 text-lg font-bold">
            Historial de servicio reciente
          </h2>
          <ul className="list-disc pe-1 ps-6 text-[15px] text-zinc-800">
            {car.services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>

        <section className="mx-2 border-b-[1px] py-6">
          <h2 className="mb-2 px-2 text-lg font-bold">
            Ítems incluidos en la venta
          </h2>
          <ul className="list-disc pe-1 ps-6 text-[15px] text-zinc-800">
            {car.addedItems.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </section>

        <section id="scrollDown" className="mx-2 border-b-[1px] py-6">
          <ul className="flex place-content-center gap-4">
            <a href={car.domain}>
              <HiDocumentArrowDown className="mx-auto text-4xl text-zinc-800" />
              <h2>Informe de dominio</h2>
            </a>
            <a href={car.inspection}>
              <HiDocumentArrowDown className="mx-auto text-4xl text-zinc-800" />
              <h2>Informe de Inspección</h2>
            </a>
          </ul>
        </section>

        <section className="mx-2 border-b-[1px] py-6">
          <h1 className="text-left text-2xl font-bold">
            Subasta {car.year} {car.brand} {car.model}
          </h1>
          <dl className="mx-1 my-2 grid grid-cols-[40%,_60%] gap-y-2 text-sm leading-10">
            <dt className="text-sm font-semibold">Oferta actual</dt>
            <dd className="flex  items-center text-sm font-semibold ">
              $
              {auction.Bids?.length > 1
                ? auction.Bids[auction.Bids.length - 1].ammount.toLocaleString()
                : auction.minPrice.toLocaleString()}
            </dd>

            <dt className="text-sm font-semibold">Vendedor</dt>
            <dd className="flex items-center text-sm ">{seller.name}</dd>

            <dt className="text-sm font-semibold">Finaliza</dt>
            <dd className="flex items-center text-sm ">
              {formattedDate(auction.endTime)}
            </dd>
          </dl>
        </section>

        <section className="mx-2 border-b-[1px] py-6">
          <h1 className="mb-4 text-left text-3xl font-bold">
            Comentarios y ofertas
          </h1>
          <form id="commentTextArea">
            <textarea
              onChange={(e) => setComment(e.target.value)}
              className=" w-full rounded-md border-2 border-gray-800"
              maxLength={255}
              name="comment"
              form="commentTextArea"
              rows="4"
              value={comment}
            ></textarea>
            <div className="flex justify-end ">
              <DefButton
                type="submit"
                onClick={(e) => handleComment(e)}
                className={`mx-0 bg-gray-800 text-xs text-white hover:bg-gray-900`}
              >
                Comentar
              </DefButton>
            </div>
          </form>
          <ul className="flex flex-col gap-4">
            {comments.toReversed().map((c) => {
              if (c?.ammount) {
                return (
                  <li className=" mb-2 ms-2 flex flex-col" key={c.id}>
                    <div className="flex items-center gap-2">
                      <a className="font-semibold">{c.User.name}</a>
                      <p className="text-sm text-gray-400">
                        {commentDate(c.createdAt)}
                      </p>
                    </div>
                    <div className="my-1 mr-auto ms-1 flex flex-col items-center  text-sm">
                      <p className="mr-auto rounded-lg bg-zinc-800 px-2 py-1 font-semibold text-white">
                        Oferta ${c.ammount.toLocaleString()}
                      </p>
                    </div>
                  </li>
                );
              }

              if (c?.content) {
                return (
                  <li className=" ms-2 flex flex-col" key={c.id} id={c.id}>
                    <div className="flex items-center gap-2">
                      <a className="font-semibold">{c.User.name}</a>
                      <p className="text-sm text-gray-400">
                        {commentDate(c.createdAt)}
                      </p>
                    </div>
                    <div className="my-1 mr-auto ms-1 flex flex-col items-center  text-sm ">
                      <p>{c.content}</p>
                    </div>
                    <div className="flex justify-between">
                      <button
                        onClick={(e) => showReplies(e)}
                        className=" text-sm font-light text-gray-400"
                      >
                        {c?.Replies?.length +
                          replies?.filter((reply) => reply.CommentId === c.id)
                            .length >
                        0
                          ? c?.Replies?.length +
                            replies?.filter((reply) => reply.CommentId === c.id)
                              .length
                          : ""}{" "}
                        {c?.Replies?.length +
                          replies?.filter((reply) => reply.CommentId === c.id)
                            .length >
                        0
                          ? c?.Replies?.length +
                              replies?.filter(
                                (reply) => reply.CommentId === c.id
                              ).length ===
                            1
                            ? "respuesta"
                            : "respuestas"
                          : ""}
                      </button>
                      <button
                        onClick={(e) => showReplies(e)}
                        className=" text-sm font-light text-gray-400"
                      >
                        Responder
                      </button>
                    </div>
                    {replyShowing === c.id && (
                      <ul>
                        {c?.Replies?.map((reply) => {
                          return (
                            <ol
                              className=" mb-2 ms-3 flex flex-col text-sm text-zinc-700"
                              key={reply.id}
                            >
                              <div className="flex items-center gap-2">
                                <a className="font-semibold">{c.User.name}</a>
                                <p className=" text-gray-400">
                                  {commentDate(reply.createdAt)}
                                </p>
                              </div>
                              <div className="my-1 mr-auto ms-1 flex flex-col items-center  ">
                                <p>{reply.content}</p>
                              </div>
                            </ol>
                          );
                        })}
                        {replies
                          ?.filter((reply) => reply.CommentId === c.id)
                          .map((reply) => {
                            return (
                              <ol
                                className=" mb-2 ms-3 flex flex-col text-sm text-zinc-700"
                                key={reply.id}
                              >
                                <div className="flex items-center gap-2">
                                  <a className="font-semibold">{c.User.name}</a>
                                  <p className=" text-gray-400">
                                    {commentDate(reply.createdAt)}
                                  </p>
                                </div>
                                <div className="my-1 mr-auto ms-1 flex flex-col items-center  ">
                                  <p>{reply.content}</p>
                                </div>
                              </ol>
                            );
                          })}
                        <form className="w-full" id="replyTextArea">
                          <textarea
                            onChange={(e) => setReply(e.target.value)}
                            className=" mx-auto mb-1 block w-10/12 rounded-md border-2 border-gray-800"
                            maxLength={255}
                            name="reply"
                            form="replyTextArea"
                            rows="2"
                            value={reply}
                          ></textarea>

                          <div className="flex justify-end ">
                            <DefButton
                              type="submit"
                              onClick={(e) => handleReply(e)}
                              className={`mx-0 bg-gray-800 text-xs text-white hover:bg-gray-900`}
                            >
                              Responder
                            </DefButton>
                          </div>
                        </form>
                      </ul>
                    )}
                  </li>
                );
              }
            })}
          </ul>
        </section>
      </main>
    )
  );
}
