import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CountDownBar from "@/components/auction/CountDownBar";
import CommentBox from "@/components/auction/CommentBox";
import { useGetAuctionQuery } from "@/redux/api/apiSlice";
import formattedDate from "@/utils/formattedDate";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { HiDocumentArrowDown } from "react-icons/hi2";
import ImagesCarrousel from "@/common/ImagesCarrousel";
import SideBar from "@/common/SideBar";
import { useGetCarsQuery } from "@/redux/api/apiSlice";
import CommentBoxLive from "@/components/auction/CommentBoxLive";

import { io } from "socket.io-client";
import { env } from "../../../next.config";

const socket = io.connect(env.SOCKET_URL);

const Responsive = dynamic(
  () => {
    return import("../../common/Responsive");
  },
  { ssr: false }
);

export async function getServerSideProps(context) {
  // context value contains the query params
  const { auctionId } = context.query;

  return { props: { auctionId } };
}

export default function Auction({ auctionId }) {
  socket.emit("join_room", auctionId);
  const dispatch = useDispatch();
  const router = useRouter();
  const { data: auction, isFetching } = useGetAuctionQuery(auctionId);
  const { user, loading, error } = useSelector((state) => state.user);
  const [currentBid, setCurrentBid] = useState(0);
  const { data: response } = useGetCarsQuery();
  const carsList = response?.data;
  const rst = carsList?.length / 16 - 1;

  const car = auction?.CarDetail;
  const seller = auction?.User;

  useEffect(() => {
    if (auction?.Bids?.length > 0) {
      setCurrentBid(auction.Bids[auction.Bids.length - 1].ammount);
    } else {
      setCurrentBid(auction?.minPrice);
    }
  }, [auction]);

  useEffect(() => {
    socket.on("receive_bid", (data) => {
      setCurrentBid(data.ammount);
    });
  }, [socket]);

  return (
    car && (
      <main className="mx-auto min-h-[70vh] max-w-[1440px] text-zinc-800 ">
        <Responsive displayIn={["Mobile"]}>
          <CountDownBar
            className="sticky top-[70px] md:hidden"
            user={user}
            router={router}
            auction={auction}
            dispatch={dispatch}
            currentBid={currentBid}
            socket={socket}
          />
        </Responsive>

        <ImagesCarrousel imagesArray={car.images} carModel={car.model} />

        <Responsive displayIn={["Tablet", "Laptop"]}>
          <CountDownBar
            className="hidden md:sticky md:top-[78.8px] md:block"
            user={user}
            router={router}
            auction={auction}
            dispatch={dispatch}
            currentBid={currentBid}
            socket={socket}
          />
        </Responsive>

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

        <div className=" md:flex md:flex-row-reverse">
          {carsList && (
            <Responsive displayIn={["Tablet", "Laptop"]}>
              <SideBar
                newListingsCars={[...carsList].splice(
                  0,
                  rst > 0 ? 4 : Math.ceil((1 + rst) * 4)
                )}
              />
            </Responsive>
          )}

          <div className="md:w-5/6">
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
                <dt className="border-y border-e ps-2 font-semibold">
                  Titular
                </dt>
                <dd className="flex items-center border-y ps-2">{car.owner}</dd>
                <dt className="border-y border-e ps-2 font-semibold">
                  Vendedor
                </dt>
                <dd className="flex items-center border-y ps-2">
                  {seller.name}
                </dd>
                <dt className="border-y border-e ps-2 font-semibold">Motor</dt>
                <dd className="flex items-center border-y ps-2">
                  {car.engine}
                </dd>
                <dt className="border-y border-e ps-2 font-semibold">
                  Transmisión
                </dt>
                <dd className="flex items-center border-y ps-2">
                  {car.transmission}
                </dd>
                <dt className="border-y border-e ps-2 font-semibold">
                  Tracción
                </dt>
                <dd className="flex items-center border-y ps-2">
                  {car.driveTrain}
                </dd>
                <dt className="border-y border-e ps-2 font-semibold">
                  Segmento
                </dt>
                <dd className="flex items-center border-y ps-2">
                  {car.bodyType}
                </dd>
                <dt className="border-y border-e ps-2 font-semibold">Color</dt>
                <dd className="flex items-center border-y ps-2">{car.color}</dd>
                <dt className="border-y border-e ps-2 font-semibold">
                  Tipo de vendedor
                </dt>
                <dd className="flex items-center border-y ps-2">
                  {auction.sellerType === "Dealer"
                    ? "Consecionaria"
                    : "Particular privado"}
                </dd>
              </dl>
            </section>

            <section className="mx-2 border-b-[1px] py-6">
              <h2 className="mb-2 px-2 text-lg font-bold">Destacados</h2>
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

            {car.modifications[0].length > 0 && (
              <section className="mx-2 border-b-[1px] py-6">
                <h2 className="mb-2 px-2 text-lg font-bold">Modificaciones</h2>
                <ul className="list-disc pe-1 ps-6 text-[15px] text-zinc-800">
                  {car.modifications.map((m) =>
                    m.length > 0 ? <li key={m}>{m}</li> : null
                  )}
                </ul>
              </section>
            )}

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

            {car.addedItems[0].length > 0 && (
              <section className="mx-2 border-b-[1px] py-6">
                <h2 className="mb-2 px-2 text-lg font-bold">
                  Ítems incluidos en la venta
                </h2>
                <ul className="list-disc pe-1 ps-6 text-[15px] text-zinc-800">
                  {car.addedItems.map((i) =>
                    i.length > 0 ? <li key={i}>{i}</li> : null
                  )}
                </ul>
              </section>
            )}

            <section id="scrollDown" className="mx-2 border-b-[1px] py-6">
              <ul className="flex place-content-center gap-4">
                <a href={car.domain}>
                  <HiDocumentArrowDown className="mx-auto text-4xl text-zinc-800 md:text-5xl" />
                  <h2>Informe de dominio</h2>
                </a>
                <a href={car.inspection}>
                  <HiDocumentArrowDown className="mx-auto text-4xl text-zinc-800 md:text-5xl" />
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
                  ${currentBid}
                </dd>

                <dt className="text-sm font-semibold">Vendedor</dt>
                <dd className="flex items-center text-sm ">{seller.name}</dd>

                <dt className="text-sm font-semibold">Finaliza</dt>
                <dd className="flex items-center text-sm ">
                  {formattedDate(auction.endTime)}
                </dd>
              </dl>
            </section>
          </div>
        </div>

        <CommentBoxLive socket={socket} user={user} auction={auction} />
        {/* <CommentBox router={router} user={user} auction={auction} /> */}
      </main>
    )
  );
}
