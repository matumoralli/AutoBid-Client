import React from 'react'

export default function Faq() {
  return (
    <div className="self-center mr-6 border-b">
      <h2 className="font-bold text-4xl mb-8 mt-16">
        Preguntas Frecuentes
      </h2>
      <h3 id="faqComprador" className="font-bold text-2xl">Comprador</h3>

      <div className="grid divide-y divide-neutral-200 mx-auto mt-4">
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>¿Cuál es el cargo para el comprador en AutoBid?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3">
              Los compradores deben pagar a AutoBid un cargo del 2% del valor ofertado, más el crédito de participación, en caso de ganar la subasta.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>¿Cómo me registro para ofertar?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Para registrarse, primero haga clic en el ícono *Iniciar sesión* en la esquina superior derecha de la pantalla, luego haga clic en "Registrarse aquí" en el cuadro que aparece a continuación. Una vez que cree un nombre de usuario y una contraseña, se le pedirá que verifique su dirección de correo electrónico. Una vez que haya hecho eso, puede regresar a AutoBid y se le pedirá que se registre para ofertar.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>¿Cómo hago una oferta?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Una vez que se haya registrado y haya encontrado un automóvil que le interese comprar, ofertar es fácil: simplemente haga clic en el botón "Ofertar" dentro de la publicación. Luego, se le pedirá que abone el crédito de participación, este lo habilita a ofertar en cualquier subasta.
            </p>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Su oferta debe ser más alta que la oferta anterior. Una vez que oferte, sólo podrá seguir ofertando en esa subasta, ya que cada crédito es válido para una sola subasta a la vez. Si gana la subasta, deberá abonar el cargo para poder acceder a la información de contacto del vendedor.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>¿Por qué cobran un crédito de participación?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Para garantizar que las ofertas sean de usuarios comprometidos, pedimos un crédito de participación (Bid Point) antes de poder ofertar. Este tiene un costo de 100 usd (abonado en pesos al cambio MEP) y habilita a los usuarios a participar en cualquier subasta que desee. El crédito permanecerá válido hasta que el usuario gane una subasta.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>
                ¿Qué pasa con el crédito de participación si no gano la
                subasta?
              </span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Puede pedir el reembolso del crédito cuando lo desee, con el botón “Pedir Reembolso” dentro de su Perfil de usuario. Este será devuelto en pesos, calculando los 100 usd al cambio del día MEP, dentro de 2 días hábiles. Si no lo hace, el crédito permanecerá válido y podrá usarlo para participar en cualquier otra subasta. Recuerde que una vez que oferte, sólo podrá seguir ofertando en esa subasta, es decir, cada crédito es válido para una subasta a la vez.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>¿Puedo ofertar en más de una subasta a la vez?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Si, para ofertar en varias subastas a la vez, deberá tener un crédito de participación para cada una de ellas. Podrá abonar los seguros previamente, y acumularlos, para usarlos cuando desee.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>¿Cómo funcionan los incrementos en las ofertas?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Los incrementos en las ofertas funcionan de la siguiente manera:
            </p>
            <br />
            <p className="text-neutral-600">
              Oferta mínima de 100 usd para empezar la subasta.{" "}
            </p>
            <br />
            <p className="text-neutral-600">
              Incrementos de 100 usd hasta 49.999 usd. Incrementos de 250 usd desde 50.000 usd en adelante.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>¿Qué moneda usa AutoBid?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 ">
              Los montos de las ofertas son expresados en USD (dólares estadounidenses).
            </p>
            <p className="text-neutral-600 mt-3 ">
              Los cargos serán cobrados en Pesos Argentinos, mediante los métodos de pago disponibles, calculando el tipo de cambio MEP del día.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>¿Se puede ofertar automáticamente?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 ">
              No. Si alguien hace una oferta por encima de la tuya, tendrás que volver a ofertar manualmente un monto superior.
            </p>
            <p className="text-neutral-600 mt-3 ">
              Tener en cuenta que, al ofertar, al reloj de la subasta se le sumará 1 minuto, dándole la posibilidad a otro comprador de volver a ofertar.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>
                ¿Cuál es el precio mínimo del vehículo que me interesa comprar?
              </span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 ">
              Si una publicación no tiene precio mínimo, verás una etiqueta que dice “Sin Mínimo” al lado del botón para ofertar. Si no ves esta etiqueta, la subasta tiene un precio mínimo. Los precios mínimos no son publicados, y les pedimos a los compradores que no le pregunten al vendedor cual es en los comentarios. La única forma de saber si el precio mínimo fue alcanzado es si el vehículo se vende al finalizar la subasta.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>¿Cuánto duran las subastas?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 ">
              Todas las subastas duran 7 días, aunque puede variar sobre el final ya que de haber ofertas en el último minuto, el reloj se restablece a 1 minuto, dándole la posibilidad de ofertar a otro usuario.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>¿Qué pasa si el precio mínimo no fue alcanzado?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 ">
              Si termina la subasta y el vehículo no se vendió, el precio mínimo no fue alcanzado. En ese caso, contactamos al vendedor y a quien haya hecho la oferta más alta durante la subasta, en un intento de que ambas partes lleguen a un acuerdo en el precio.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>
                Una vez terminada la subasta, ¿como continuo con la compra?
              </span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 ">
              Al finalizar la subasta, ambas partes (vendedor y comprador), reciben la información de contacto del otro para concluir con la transacción. Lea más sobre *finalizar*.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>¿Hay reglas a seguir en los comentarios?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 ">
              ¡Si! Aparte de reglas de sentido común como lenguaje inadecuado o ataques personales, la conversación debe estar enfocada en el vehículo siendo subastado. Queremos asegurar que la comunidad de AutoBid se mantenga como un lugar abierto y positivo donde pasar tiempo con otros aficionados. Una lista de que está prohibido:
            </p>
            <p className="text-neutral-600 mt-3 ">
              Lenguaje inadecuado; ataques personales; intentar compartir tu información de contacto; spamming; preguntar al vendedor el precio mínimo; Imágenes inadecuadas o descripciones inadecuadas en tu perfil; intentar publicitar tu marca, website, red social, etc; links a sitios/imágenes/contenido inadecuado; links de avisos sobre otros autos en venta.
            </p>
          </details>
        </div>
      </div>
      <h3 id="faqVendedor" className="font-bold text-2xl mt-6">Vendedor</h3>
      <div className="grid divide-y divide-neutral-200 mx-auto mt-2">
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>¿Cuánto cuesta vender un auto en AutoBid?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 ">
              Publicar autos en AutoBid es gratuito, y los vendedores reciben el 100% del precio final de venta.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>
                ¿Cómo eligen qué vehículos aceptar para las subastas?
              </span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 ">
              Nos enfocamos en vehículos interesantes, que puedan gustarle al entusiasta promedio. Esto abarca una variedad muy grande, ya que en el rango “interesantes” pueden entrar tanto autos clásicos (Ford T; Chevrolet C10; Torino), como un deportivo (BMW M3; Audi TT), exóticos (Mazda rx7; Alfa Romeo 145qv) y vehículos off-road (Toyota Land-Cruiser; Jeep Wrangler).
            </p>
            <p className="text-neutral-600 mt-3 ">
              No publicamos cada vehículo que nos ofrecen y nos reservamos el derecho de elegir cuáles publicar y cuáles no. Dicho esto, estamos interesados en ver si tu vehículo es una buena incorporación a AutoBid.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>¿Cómo aplico para subastar mi vehículo?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 ">
              Para postular un vehículo y poder subastarlo, dirígete a la sección *Vende tu Auto* en la cabecera de la página. Tendrás que proveernos cierta información relevante (marca; modelo; versión; algunas fotos; etc). Si estamos interesados en publicar tu vehículo nos pondremos en contacto contigo.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>
                ¿Qué información necesita AutoBid para subastar mi vehículo?
              </span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 ">
              Con la información solicitada en el formulario te diremos si tu vehículo es aceptado o no. De ser aceptado, te pediremos más detalles como equipamiento, modificaciones, historial de servicio reciente, informe de dominio y otros ítems que nos ayuden a armar una justa y adecuada descripción.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>¿Cómo sacar buenas fotos de mi vehículo? </span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 ">
              Es sumamente importante tener buenas fotos para tener una subasta exitosa. Teniendo esto en cuenta, armamos una *guía de fotos* para que el vendedor pueda seguir. De esta manera logramos tener publicaciones uniformes y con toda la información que pueda obtenerse mediante imágenes. Dicho esto, siempre será una mejor opción contratar un fotógrafo profesional.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>¿Quién escribe la descripción en las subastas?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 ">
              El equipo de AutoBid es el encargado de escribir la descripción, basándose en toda la información previamente compartida por el vendedor. Hacemos lo posible para que nuestras descripciones sean simples pero detalladas, fáciles de entender y, por sobre todo, confiables. Sin embargo, no publicaremos la subasta sin la aprobación del vendedor.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>¿Cómo contacto a AutoBid sobre mi subasta?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 ">
              Tendrás acceso a un email de contacto, específico para vendedores de AutoBid, tan pronto como se active la subasta.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>¿Puedo elegir cuándo publicar mis subastas?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 ">
              No ofrecemos la opción de que el vendedor elija cuándo publicar la subasta, pero dejamos que incluya alguna fecha preferencial y, de ser posible, tratamos de buscar un espacio dentro de esas fechas.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>¿Cuánto duran las subastas?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 ">
              Todas las subastas duran 7 días, aunque puede variar sobre el final ya que de haber ofertas en el último minuto, el reloj se restablece a 1 minuto, dándole la posibilidad de ofertar a otro usuario.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>¿Puedo editar mi subasta una vez iniciada?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 ">
              No podrás hacerlo personalmente desde el sitio. Puedes comunicarte con AutoBid en caso de querer hacerlo, especificando qué quieres que se modifique. También puedes dejar comentarios, agregando información del vehículo como también más fotos. Y puedes contestar preguntas de usuarios para agregar claridad y confianza durante la subasta.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>
                ¿Cómo interactuar con usuarios durante mi subasta?
              </span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 ">
              Recomendamos a todos los vendedores tener una participación activa durante su subasta, los vendedores que más participan suelen ser los que tienen mejores resultados. Les pedimos que respondan a las preguntas de usuarios en la sección de comentarios.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>¿Puedo poner un precio mínimo de venta?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 ">
              ¡Si! Le ofrecemos a los vendedores la posibilidad de subastar con o sin precio mínimo de venta.
            </p>
            <br />
            <p className="text-neutral-600 mt-3 ">
              El precio mínimo fijado, es el precio a partir del cual el vendedor está dispuesto a vender su vehículo, el cual no es mostrado a los usuarios en la subasta.
            </p>
            <br />
            <p className="text-neutral-600 mt-3 ">
              Si eliges esta opción, te pediremos que sugieras un precio mínimo, pero puede que te pidamos un precio más bajo de acuerdo a los precios de mercado y el estado del vehículo.
            </p>
            <br />
            <p className="text-neutral-600 mt-3 ">
              Si en algún momento de la subasta el vendedor decide bajar el precio mínimo de venta, solo tiene que contactarnos indicándonos el nuevo monto mínimo que desea aceptar por su vehículo.
            </p>
            <br />
            <p className="text-neutral-600 mt-3 ">
              Si el vendedor elige la opción sin precio mínimo, el usuario que oferte la mayor cantidad será quien gane la subasta independientemente de cuál haya sido el monto ofertado.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>
                ¿Qué pasa si mi precio mínimo de venta no es alcanzado?
              </span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 ">
              Si termina la subasta y el vehículo no se vendió, el precio mínimo no fue alcanzado. En ese caso, contactamos a usted con quien haya hecho la oferta más alta durante la subasta, en un intento de que ambas partes lleguen a un acuerdo en el precio.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>
                ¿Puedo intentar negociar por fuera de la subasta?
              </span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 ">
              No. Los vehículos publicados en AutoBid están en venta exclusivamente en el sitio, así que quien gane la subasta (y pague el cargo) será quien se asegure obtener el vehículo. Intentar negociar por fuera para evitar pagar el Servicio, implica ser expulsado del sitio permanentemente.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>
                ¿Cómo me contacta el comprador para terminar la
                transacción?
              </span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 ">
              Al finalizar la subasta, ambas partes (vendedor y comprador), reciben la información de contacto del otro para concluir con la transacción. Lea más sobre *finalizar*.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>
                ¿Qué pasa si el comprador no continua con la compra?
              </span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 ">
              Es muy poco común que esto suceda, pero en ese caso, el comprador perderá el cargo pagado a AutoBid (2% del monto ofertado), como también su crédito de participación, y será expulsado del sitio permanentemente.
            </p>
            <p className="text-neutral-600 mt-3 ">
              De suceder esto, contactamos al siguiente usuario en la lista de ofertas para que junto con el vendedor puedan llegar a un acuerdo en el precio y así concretar la venta. Si no se pudiese llevar a cabo, ofrecemos publicar el vehículo nuevamente en el sitio.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>
                ¿Cuánto tiempo quedan publicadas las subastas finalizadas?
              </span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 ">
              Mantenemos todas las subastas finalizadas publicadas en nuestro sitio, independientemente de su resultado.
            </p>
          </details>
        </div>
      </div>
    </div>
  )
}
