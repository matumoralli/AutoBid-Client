import Image from "next/image";
import { useGetAuctionQuery } from "@/redux/api/apiSlice";
import { useRouter } from "next/router";
import DefButton from "@/common/DefButton";
import { FiClock } from "react-icons/fi";

import { HiDocumentArrowDown } from "react-icons/hi2";

export default function Auction() {
  const router = useRouter();
  const { data: auction, isFetching } = useGetAuctionQuery(
    router.query.auctionId
  );
  const car = auction?.CarDetail;
  const seller = auction?.User;

  return (
    car && (
        <main className="mx-auto min-h-[70vh] max-w-[1440px] text-zinc-800">
          <header className="sticky top-[70px]">
            <div className="flex items-center justify-between  bg-zinc-800 py-1 pe-1 ps-3">
              <span className="flex items-center gap-2 font-semibold text-white">
                <span className="text-gray-700">
                  <FiClock />
                </span>
                12:00:10
              </span>
              <em>$ {}</em>
              <DefButton>Participar</DefButton>
            </div>
          </header>

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
            <p class="text-gray-600">Termina el 21 de Junio a las 8:30 PM</p>
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
              <dd className="flex items-center border-y ps-2">
                {car.bodyType}
              </dd>
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
              {car.highlights.map((h) => (
                <li>{h}</li>
              ))}
            </ul>
          </section>

          <section className="mx-2 border-b-[1px] py-6">
            <h2 className="mb-2 px-2 text-lg font-bold">Equipamiento</h2>
            <ul className="list-disc pe-1 ps-6 text-[15px] text-zinc-800">
              {car.equipement.map((e) => (
                <li>{e}</li>
              ))}
            </ul>
          </section>

          <section className="mx-2 border-b-[1px] py-6">
            <h2 className="mb-2 px-2 text-lg font-bold">Modificaciones</h2>
            <ul className="list-disc pe-1 ps-6 text-[15px] text-zinc-800">
              {car.modifications.map((m) => (
                <li>{m}</li>
              ))}
            </ul>
          </section>

          <section className="mx-2 border-b-[1px] py-6">
            <h2 className="mb-2 px-2 text-lg font-bold">Fallas conocidas</h2>
            <ul className="list-disc pe-1 ps-6 text-[15px] text-zinc-800">
              {car.knownFlaws.map((k) => (
                <li>{k}</li>
              ))}
            </ul>
          </section>

          <section className="mx-2 border-b-[1px] py-6">
            <h2 className="mb-2 px-2 text-lg font-bold">
              Historial de servicio reciente
            </h2>
            <ul className="list-disc pe-1 ps-6 text-[15px] text-zinc-800">
              {car.services.map((s) => (
                <li>{s}</li>
              ))}
            </ul>
          </section>

          <section className="mx-2 border-b-[1px] py-6">
            <h2 className="mb-2 px-2 text-lg font-bold">
              Ítems incluidos en la venta
            </h2>
            <ul className="list-disc pe-1 ps-6 text-[15px] text-zinc-800">
              {car.addedItems.map((i) => (
                <li>{i}</li>
              ))}
            </ul>
          </section>

          <section className="mx-2 border-b-[1px] py-6">
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
        </main>
    )
  );
}
