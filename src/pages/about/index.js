import React from "react"

export default function About() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex mt-[180px] ml-4">
        <aside className="w-1/4 mt-4">
          <div className="block">
            <ul className="">
              <li>
                <a className=" font-semibold text-gray-500 text-sm">Sobre Nosotros</a>
              </li>
              <li className="mt-8">
                <span className="text-[12px] text-gray-400 uppercase">Cómo funciona</span>
                <ul>
                  <li className="my-2">
                    <a className="text-sm font-semibold text-gray-500">Comprar un Auto</a>
                  </li>
                  <li className="my-2">
                    <a className="text-sm font-semibold text-gray-500">Vender un Auto</a>
                  </li>
                  <li className="my-2">
                    <a className="text-sm font-semibold text-gray-500">Finalización de la venta</a>
                  </li>
                </ul>
              </li>
              <li className="mt-8">
                <span className="text-[12px] text-gray-400 ">FAQ</span>
                <ul>
                  <li className="my-2">
                    <a className="text-sm font-semibold text-gray-500">Comprador FAQ</a>
                  </li>
                  <li className="my-2">
                    <a className="text-sm font-semibold text-gray-500">Vendedeor FAQ</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </aside>
        <div className="w-2/4">
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
          <div className="self-center mr-6 border-b">
            <h2 className="font-bold text-4xl mb-8 mt-16">Cómo funciona</h2>
            <h3 className="font-bold text-2xl">Comprar un Auto</h3>
            <p className="my-6 text-[18px] text-justify">
              Una vez que haya encontrado un vehículo que le interese, estos son los pasos a seguir para ofertar con confianza y, con un poco de suerte, ¡ganar la subasta!
            </p>
            <h4 className="font-semibold text-lg my-2">1. Regístrese para ofertar</h4>
            <p className="mb-8  text-[18px] text-justify">
              Para realizar ofertas, primero debe registrarse. Luego tendrá que abonar un crédito reembolsable de participación (Bid Point), y esto lo habilita a participar en una subasta. Los usuarios que ganen una subasta pagan a AutoBid un cargo del 2% del monto ofertado, además del crédito de participación. 
            </p>
            <h4 className="font-semibold text-lg my-2">2. Realizar la debida evaluación</h4>
            <p className="mb-8  text-[18px] text-justify">
              Si bien hemos tratado de hacer que comprar un automóvil publicado en línea sea lo más seguro y fácil posible, en última instancia, es su responsabilidad realizar su propia debida evaluación y asegurarse que el automóvil que está considerando sea adecuado para usted, antes de realizar una <strong>oferta.</strong>
            </p>
            <ul className="ml-4 list-disc">
              <li className="mb-8  text-[18px] text-justify">Revise el listado a fondo, incluidas las fallas conocidas, el equipamiento del vehículo, el informe de dominio,  inspección (si incluye una), mantenimiento reciente, fotos, etc.</li>
              <li className="mb-8  text-[18px] text-justify">Pregúntele al vendedor, a través de los comentarios, cualquier duda que pueda tener sobre el vehículo.</li>
              <li className="mb-8  text-[18px] text-justify">Coordine con AutoBid para programar una inspección detallada con una compañía de verificación a domicilio (a su cargo).</li>
            </ul>
            <h4 className="font-semibold text-lg my-2">3. Oferta</h4>
            <ul className="ml-4 list-disc">
              <li className="mb-8  text-[18px] text-justify">
                Cuando oferta se compromete a abonar, en caso de tener la oferta ganadora, un “cargo” a AutoBid por el servicio, correspondiente al 2% del monto ofertado. Podrá abonar el cargo por distintos medios de pago <strong>y pagará directamente al vendedor</strong> por el vehículo una vez finalizada la subasta.</li>
              <li className="mb-8  text-[18px] text-justify">Cobramos un crédito de participación (Bid Point) que habilita a los usuarios a ofertar en una subasta. En caso de no ganar la subasta este crédito podrá ser reembolsado o permanecer en su cuenta, habilitandolo a participar en cualquier otra subasta.</li>
              <li className="mb-8  text-[18px] text-justify">Para garantizar que el proceso sea justo para todos, las ofertas realizadas en el último minuto restablecerán el tiempo restante a 1 minuto, lo que dará a otros la oportunidad de ofertar.</li>
            </ul>
            <h4 className="font-semibold text-lg my-2">5. Gana la subasta</h4>
            <p className="mb-8  text-[18px] text-justify">
              Para comprar un automóvil en AutoBid, debe ganar la subasta teniendo la oferta ganadora y, si la subasta tiene un "Mínimo", haciendo una oferta que alcance o supere el precio mínimo oculto del vendedor. Si la subasta es "Sin Mínimo", entonces el usuario con la oferta más alta gana, independientemente del monto ofertado.
            </p>
            <p className="mb-20  text-[18px] text-justify">
              Una vez que se cierre la subasta y abone el cargo correspondiente, recibirá la información de contacto del vendedor (y viceversa) para finalizar los detalles y completar la transacción. AutoBid les brinda a ambos una lista de tips para llevar a cabo una venta exitosa. <a className=" underline text-green-500" href="">Obtenga más información sobre cómo finalizar la venta.</a>
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
