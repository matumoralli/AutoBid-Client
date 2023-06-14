import Image from "next/image";
import { useGetAuctionQuery } from "@/redux/api/apiSlice";
import { useRouter } from "next/router";
import DefButton from "@/common/DefButton";
import { FiClock } from "react-icons/fi";

export default function Auction() {
  const router = useRouter();
  const { data: auction, isFetching } = useGetAuctionQuery(
    router.query.auctionId
  );
  const car = auction?.CarDetail;
  const seller = auction?.User

  return (
    car && (
      <main className="mx-auto mt-20 min-h-[70vh] max-w-[1440px]">
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

        <section className="mx-4 mt-4">
          <div className="flex items-center justify-between rounded-md bg-zinc-800 py-1 pe-1 ps-3">
            <span className="flex items-center gap-2 font-semibold text-white">
              <span className="text-gray-700">
                <FiClock />
              </span>
              12:00:10
            </span>
            <em>$ {}</em>
            <DefButton>Participar</DefButton>
          </div>
        </section>

        <section className="flex flex-col pt-5 ">
          <dl className="mx-1 grid grid-cols-[40%,_60%] leading-10">
            <dt className="border-y border-e ps-2 font-semibold">Marca</dt>
            <dd className="flex items-center border-y ps-2">{car.brand}</dd>
            <dt className="border-y border-e ps-2 font-semibold">Modelo</dt>
            <dd className="flex items-center border-y ps-2">{car.model}</dd>
            <dt className="border-y border-e ps-2 font-semibold">Año</dt>
            <dd className="flex items-center border-y ps-2">{car.year}</dd>
            <dt className="border-y border-e ps-2 font-semibold">Kilometros</dt>
            <dd className="flex items-center border-y ps-2">
              {car.kilometers.toLocaleString()}
            </dd>
            <dt className="border-y border-e ps-2 font-semibold">Dominio</dt>
            <dd className="flex items-center border-y ps-2">{car.domain}</dd>
            <dt className="border-y border-e ps-2 font-semibold">
              Titular
            </dt>
            <dd className="flex items-center border-y ps-2">{car.owner}</dd>
            <dt className="border-y border-e ps-2 font-semibold">
              Vendedor
            </dt>
            <dd className="flex items-center border-y ps-2">{seller.name}</dd>
            <dt className="border-y border-e ps-2 font-semibold">Motor</dt>
            <dd className="flex items-center border-y ps-2">{car.engine}</dd>
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
            <dt className="border-y border-e ps-2 font-semibold">Segmento</dt>
            <dd className="flex items-center border-y ps-2">{car.bodyType}</dd>
            <dt className="border-y border-e ps-2 font-semibold">Color</dt>
            <dd className="flex items-center border-y ps-2">{car.color}</dd>
            <dt className="border-y border-e ps-2 font-semibold">
              Modificaciones
            </dt>
            <dd className="flex items-center border-y ps-2">
              {car.modifications}
            </dd>
            <dt className="border-y border-e ps-2 font-semibold">
              Tipo de vendedor
            </dt>
            <dd className="flex items-center border-y ps-2">
              {auction.sellerType}
            </dd>
          </dl>
        </section>

        <section className="mx-4 my-8 rounded-lg border border-gray-300 bg-gray-100">
          <h2 className="my-2 px-2 pt-1 font-semibold">
            Comentarios del propietario
          </h2>
          <p className=" px-2 pb-1 font-light italic text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ea,
            odio ducimus, repellendus quo, eum molestias fugiat nostrum alias
            itaque nihil veniam incidunt deserunt maiores eaque a neque non
            beatae fugit assumenda voluptate quisquam! Explicabo, ad quidem?
            Asperiores, minus, maiores vero repudiandae, voluptas temporibus hic
            quasi culpa exercitationem possimus modi itaque doloremque cum dicta
            adipisci praesentium excepturi nemo in nisi consectetur. <br />
            <br />
            Dolorum animi accusamus officia, magni architecto at eveniet natus
            voluptates asperiores itaque, pariatur dolore, expedita dolor
            nesciunt soluta ipsum. Ducimus assumenda nobis debitis accusantium
            vel, quam error sapiente dicta laborum cum iusto? Ipsum, ut facere
            eaque nisi veniam consequuntur soluta deserunt iste debitis
            blanditiis nemo ipsa rem voluptas consequatur dignissimos modi
            maxime, magnam tenetur error repellendus aliquam sit. Harum
            explicabo quisquam molestias maxime, beatae libero atque et nisi
            suscipit aliquid, quis culpa adipisci numquam quod deleniti facere
            ipsa ipsam.
          </p>
        </section>
      </main>
    )
  );
}
