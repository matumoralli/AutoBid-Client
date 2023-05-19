import React from "react"

export default function About() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex mt-[180px] ml-4">
        <aside className="w-1/4 mt-4">
          <div className="block">
            <ul className="">
              <li>
                <a className=" font-semibold text-gray-500 text-sm">About Us</a>
              </li>
              <li className="mt-8">
                <span className="text-[12px] text-gray-400 ">HOW IT WORKS</span>
                <ul>
                  <li className="my-2">
                    <a className="text-sm font-semibold text-gray-500">Buying a Car</a>
                  </li>
                  <li className="my-2">
                    <a className="text-sm font-semibold text-gray-500">Selling a Car</a>
                  </li>
                  <li className="my-2">
                    <a className="text-sm font-semibold text-gray-500">Finalizing the Sale</a>
                  </li>
                </ul>
              </li>
              <li className="mt-8">
                <span className="text-[12px] text-gray-400 ">FAQ</span>
                <ul>
                  <li className="my-2">
                    <a className="text-sm font-semibold text-gray-500">Buyer FAQ</a>
                  </li>
                  <li className="my-2">
                    <a className="text-sm font-semibold text-gray-500">Seller FAQ</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </aside>
        <div className="w-3/4">
          <div className="self-center mr-6 border-b">
            <h2 className="font-bold text-4xl mb-6">Sobre Nosotros</h2>
            <p className="my-8 text-[18px] text-justify">
              En los últimos años, muchos entusiastas de los automóviles han comenzado a centrar su atención en los mercados online para encontrar vehículos interesantes. Los aficionados de los autos Mateo Moralli y Juan Bautista Malegni se dieron cuenta que aún no existía un lugar específico que se centre únicamente en subastas de estos autos interesantes, pero debería haberlo, por lo que ellos y su equipo crearon AutoBid.
            </p>
            <p className="mb-8  text-[18px] text-justify">
              AutoBid es un mercado de subastas en línea para comprar y vender automóviles interesantes, y eso significa prácticamente cualquier cosa que sea genial sin importar la época. Para nosotros, lo “genial” va desde los obvios autos clásicos (Ford T; Chevrolet C10; Torino), deportivos (BMW M3; Audi TT), exóticos (Mazda rx7; Alfa Romeo 145qv) a vehículos off-road (Toyota Land-Cruiser; Jeep Wrangler). Básicamente, todo lo que es emocionante, divertido, interesante o extravagante es bienvenido aquí.
            </p>
            <p className="mb-8  text-[18px] text-justify">
              Aunque hay muchos lugares para comprar y vender un auto especial, AutoBid ofrece ventajas significativas sobre otros.
              <strong>Estos son solo algunos de nuestros beneficios:</strong>
            </p>
            <ul className="ml-4 list-disc">
              <li className="mb-8  text-[18px] text-justify"><strong>Nos enfocamos en los autos de aficionados:</strong> De todas las épocas y orígenes. Eso significa que cualquier persona interesada en autos emocionantes podrá venir aquí primero para comprar y vender en lugar de otros sitios más generalizados.</li>
              <li className="mb-8  text-[18px] text-justify"><strong>Nuestras tarifas son bajas.</strong> Publicar un vehículo para los vendedores es gratuito y la tarifa del comprador es del 2% de la oferta, muy por debajo de otros sitios web de subastas de automóviles.</li>
              <li className="mb-8  text-[18px] text-justify">Mientras que otras subastas de automóviles tardan semanas o incluso meses en incluir su automóvil en la lista y ponerlo a disposición de los compradores, <strong>nosotros lo incluiremos en la lista rápidamente,</strong>  e incluso tomaremos en cuenta su opinión para programar la subasta de su automóvil.</li>
              <li className="mb-8  text-[18px] text-justify"> <strong>AutoBid facilita la presentación de su automóvil para la venta.</strong> Valoramos su tiempo al pedirle solo algunos detalles cruciales antes de informarle si aceptamos o no su vehículo. Y nos encargamos de armar la descripción y publicar la subasta por usted.</li>
              <li className="mb-8  text-[18px] text-justify"> <strong>AutoBid es el mercado automotriz en línea más fácil de usar,</strong> con fácil clasificación y subastas simplificadas que le dicen exactamente lo que necesita saber sobre cada vehículo.</li>
              <li className="mb-20  text-[18px] text-justify">Siempre estamos aquí para ayudar, <strong>incluso después de que termine la subasta.</strong>  Hemos creado una lista de pasos a seguir para garantizar una venta sin problemas, y estamos a solo un mail de distancia si tiene alguna pregunta.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
