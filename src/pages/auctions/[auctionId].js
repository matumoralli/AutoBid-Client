import Image from "next/image";
import { useGetAuctionQuery } from "@/redux/api/apiSlice";
import { useRouter } from "next/router";
import DefButton from "@/common/DefButton";
import { FiClock } from "react-icons/fi";
import { HiDocumentArrowDown } from "react-icons/hi2";
import CountDownTimer from "@/common/CountDownTimer";
import { useEffect, useMemo, useState } from "react";

function mergeAndSort(act) {
  if (!act.Comments && !act.Bids) {
    return;
  }
  let combinedArr = [...act?.Comments, ...act?.Bids];

  return mergeSort(combinedArr);

  function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }

  function merge(left, right) {
    let sortedArr = [];
    while (left.length && right.length) {
      if (left[0].createdAt < right[0].createdAt) {
        sortedArr.push(left.shift());
      } else {
        sortedArr.push(right.shift());
      }
    }
    return [...sortedArr, ...left, ...right];
  }
}

export default function Auction() {
  const router = useRouter();
  const { data, isFetching } = useGetAuctionQuery(router.query.auctionId);
  const [auction, setAuction] = useState({});

  useEffect(() => {
    setAuction((prev) => {
      return { ...prev, ...data };
    });
  }, [data]);

  const car = auction.CarDetail;
  const seller = auction.User;
  const formattedDate = (date) => {
    return new Date(date).toLocaleString("es-AR");
  };
  const commentsBids = useMemo(() => {
    const memoizedValue = mergeAndSort(auction);
    console.log("useMemo ran:", memoizedValue);
    return memoizedValue;
  }, [auction]);

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
            <span className="mx-auto font-semibold">
              $
              {auction.Bids?.length > 1
                ? auction.Bids[auction.Bids.length - 1].ammount.toLocaleString()
                : auction.minPrice.toLocaleString()}
            </span>
            <DefButton className={"bg-green-600 text-white"}>
              Participar
            </DefButton>
          </div>
        </a>

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
              {car.kilometers.toLocaleString()} kilometros, {car.highlights}
            </p>
          </div>
          <p className="text-gray-600">Termina el 21 de Junio a las 8:30 PM</p>
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
          <h1 className="text-left text-3xl font-bold">
            Comentarios y ofertas
          </h1>
          <ul className="flex flex-col gap-6">
            {commentsBids.toReversed().map((c) => {
              if (c?.ammount) {
                return (
                  <li className=" ms-2 flex flex-col" key={c.id}>
                    <div className="flex items-center gap-2">
                      <a className="font-semibold">{c.User.name}</a>
                      <p className="text-sm text-gray-400">
                        {formattedDate(c.createdAt)}
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
                  <li className=" ms-2 flex flex-col" key={c.id}>
                    <div className="flex items-center gap-2">
                      <a className="font-semibold">{c.User.name}</a>
                      <p className="text-sm text-gray-400">
                        {formattedDate(c.createdAt)}
                      </p>
                    </div>
                    <div className="my-1 mr-auto ms-1 flex flex-col items-center  text-sm ">
                      <p>{c.content}</p>
                    </div>
                    <p className="ml-auto text-sm font-light text-gray-400">
                      Responder
                    </p>
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
