import React from 'react'
import Link from 'next/link'
import Table from '@/components/privacy-policy/Table'

export default function PrivacyPolicy() {
  return (
    <div className="p-4 mt-20 text-sm max-w-[1440px] mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center underline">Política de Privacidad</h2>
      <p>
        <strong>Fecha de vigencia:</strong> [Fecha de vigencia aquí]
      </p>
      <p>
        En AutoBid, nos tomamos muy en serio su privacidad. Lea esta Política de privacidad para saber cómo tratamos su información personal.
        <strong>
          Al usar o acceder a nuestros Servicios de cualquier manera, usted reconoce que acepta las prácticas y políticas descritas a continuación, y por la presente acepta que recopilaremos, usaremos y compartiremos su información como se describe en esta Política de privacidad.
        </strong>
      </p>
      <br />
      <p>
        Recuerde que su uso de los Servicios está sujeto en todo momento a nuestros <Link className='underline' href="/terms-of-use">Términos de uso,</Link> que incorporan esta Política de privacidad. Todos los términos que usamos en esta Política sin definirlos tienen las definiciones que se les dan en los Términos de uso.
      </p>
      <br />
      <p>
        Si tiene una discapacidad, puede acceder a esta Política de privacidad en un formato alternativo poniéndose en contacto con nosotros utilizando cualquiera de los métodos que se proporcionan en la Información de contacto a continuación.
      </p>
      <h3 className="text-lg font-bold mt-2">Lo que cubre esta Política de privacidad</h3>
      <p>
        Esta Política de privacidad cubre cómo tratamos los Datos personales que recopilamos cuando accede o utiliza nuestros Servicios. "Datos personales" se refiere a cualquier información que identifique o se relacione con una persona en particular y también incluye información denominada "información de identificación personal" o "información personal" según las leyes, normas o reglamentos de privacidad de datos aplicables. Esta Política de privacidad no cubre las prácticas de empresas que no poseemos ni controlamos o personas que no administramos.
      </p>
      <h3 className="text-lg font-bold mt-2">Lo que cubre esta Política de privacidad</h3>
      <p>
        El cuadro de esta sección detalla las categorías de Datos personales que recopilamos y hemos recopilado durante los últimos 12 meses:
      </p>
      <Table/>
      <h3 className="text-lg font-bold mt-2">Fuentes de Datos Personales (Columna 3)</h3>
      <p>Recopilamos datos personales sobre usted de las siguientes categorías de fuentes:</p>
      <ul className="ml-4 list-disc">
        <li className="my-2 text-justify">
          "Tú"
        </li>
        <li className="my-2 text-justify">
          Cuando nos proporciona dicha información directamente.
        </li>
        <li className="my-2 text-justify">
          Cuando los Datos personales sobre usted se recopilan automáticamente en relación con su uso de nuestros Servicios (consulte la subsección titulada "Información recopilada automáticamente" a continuación).
        </li>
        <li className="my-2 text-justify">
          "Terceros"
        </li>
        <li className="my-2 text-justify">
          Terceros que nos proporcionan Datos Personales sobre usted. Los terceros que comparten sus datos personales con nosotros incluyen:
        </li>
        <li className="my-2 text-justify">
          <strong className='underline'>Proveedores de servicios.</strong> Por ejemplo, podemos utilizar proveedores de servicios de análisis para analizar cómo interactúa y se relaciona con los Servicios, o terceros pueden ayudarnos a brindarle atención al cliente o procesamiento de pagos.
        </li>
      </ul>
      <h3 className="text-lg font-bold mt-2">Cómo usamos sus datos personales</h3>
      <p>
        Procesamos Datos Personales para operar, mejorar, comprender y personalizar nuestros Servicios. Utilizamos los datos personales para los siguientes propósitos:
      </p>
      <ul className="ml-4 list-disc">
        <li className="my-2 text-justify">
          Para cumplir con el motivo por el que nos proporcionó la información.
        </li>
        <li className="my-2 text-justify">
          Para comunicarnos con usted acerca de los Servicios, incluidos los anuncios, actualizaciones u ofertas del Servicio
        </li>
        <li className="my-2 text-justify">
          Para proporcionar soporte y asistencia para los Servicios.
        </li>
        <li className="my-2 text-justify">
          Para crear y administrar su Cuenta u otros perfiles de usuario.
        </li>
        <li className="my-2 text-justify">
          Para personalizar el contenido del sitio web y las comunicaciones en función de sus preferencias.
        </li>
        <li className="my-2 text-justify">
          Para procesar transacciones.
        </li>
        <li className="my-2 text-justify">
          Para responder a las consultas de los usuarios y cumplir con las solicitudes de los usuarios.
        </li>
        <li className="my-2 text-justify">
          Para mejorar y desarrollar los Servicios, incluidas las pruebas, la investigación, el análisis y el desarrollo de productos.
        </li>
        <li className="my-2 text-justify">
          Para proteger o disuadir acciones fraudulentas, ilegales o dañinas y mantener la seguridad e integridad de nuestros Servicios.
        </li>
        <li className="my-2 text-justify">
          Para cumplir con nuestras obligaciones legales o contractuales, resolver disputas y hacer cumplir nuestros Términos de uso.
        </li>
        <li className="my-2 text-justify">
          Para responder a las solicitudes de cumplimiento de la ley y según lo exija la ley aplicable, una orden judicial o las regulaciones gubernamentales.
        </li>
      </ul>
      <p>
        No recopilaremos categorías adicionales de Datos personales ni utilizaremos los Datos personales que recopilamos para fines materialmente diferentes, no relacionados o incompatibles sin avisarle.
      </p>
      <h3 className="text-lg font-bold mt-2">Cómo compartimos sus datos personales</h3>
      <h3 className="text-lg font-bold mt-2">Categorías de terceros con quienes compartimos datos personales (Columna 4)</h3>
      <p>
        Divulgamos sus Datos personales como se indica en el cuadro anterior a las siguientes categorías de proveedores de servicios y otras partes:
      </p>
      <ul className="ml-4 list-disc">
        <li className="my-2 text-justify">
          "Proveedores de servicio"
        </li>
        <li className="my-2 text-justify">
          Estos son terceros que nos ayudan a proporcionar nuestros Servicios, incluidos los procesadores de pago, proveedores de seguridad y prevención de fraude, proveedores de hosting y otras tecnologías y comunicaciones, proveedores de análisis y personal contratado y de aumento de personal.
        </li>
        <li className="my-2 text-justify">
          “Adquirentes”
        </li>
        <li className="my-2 text-justify">
          Estas son partes que adquieren sus Datos personales a través de una adquisición u otro cambio de control. Los Datos personales pueden transferirse a un tercero si nos sometemos a una fusión, adquisición, quiebra u otra transacción en la que ese tercero asuma el control de nuestro negocio (en su totalidad o en parte).
        </li>
        <li className="my-2 text-justify">
          “Destinatarios seleccionados”
        </li>
        <li className="my-2 text-justify">
          Estos son terceros con los que compartimos sus Datos personales bajo su dirección, incluidos:
        </li>
        <li className="my-2 text-justify">
          Otros usuarios (donde carga información públicamente o según sea necesario para efectuar una transacción iniciada o autorizada por usted a través de los Servicios).
        </li>
        <li className="my-2 text-justify">
          Socios comerciales externos a los que accede a través de los Servicios.
        </li>
        <li className="my-2 text-justify">
          Otras partes autorizadas por usted
        </li>
      </ul>
      <h3 className="text-lg font-bold mt-2">Divulgaciones de datos personales para fines comerciales</h3>
      <p>
        Divulgamos sus Datos personales a proveedores de servicios y otras partes para los siguientes fines comerciales:
      </p>
      <ul className="ml-4 list-disc">
        <li className="my-2 text-justify">
          Detectar incidentes de seguridad, proteger contra actividades maliciosas, engañosas, fraudulentas o ilegales, y enjuiciar a los responsables de esa actividad.
        </li>
        <li className="my-2 text-justify">
          Depuración para identificar y reparar errores que perjudican la funcionalidad prevista existente.
        </li>
        <li className="my-2 text-justify">
          Uso transitorio a corto plazo de Datos personales que no es utilizado por otra parte para crear un perfil de consumidor o alterar su experiencia de consumidor fuera de la interacción actual.
        </li>
        <li className="my-2 text-justify">
          Prestar servicios en nuestro nombre, incluido el mantenimiento o el servicio de cuentas, la prestación de servicio al cliente, el procesamiento o el cumplimiento de transacciones, la verificación de la información del cliente o el procesamiento de pagos.
        </li>
      </ul>
      <h3 className="text-lg font-bold mt-2">Seguridad y retención de datos</h3>
      <p>
        Retenemos Datos personales sobre usted durante el tiempo que tenga una cuenta abierta con nosotros o según sea necesario para brindarle nuestros Servicios. En algunos casos, conservamos los Datos personales durante más tiempo, si hacerlo es necesario para cumplir con nuestras obligaciones legales, resolver disputas o cobrar tarifas adeudadas, o si la ley lo exige. Además, podemos retener información en forma anónima o agregada cuando esa información no lo identifique personalmente.
      </p>
      <p>
        Sin perjuicio de lo indicado en esta Declaración de Privacidad, en cumplimiento de lo dispuesto por las disposiciones de la Ley N° 25.326, el Decreto Reglamentario N° 1558/2001 y las disposiciones y/o resoluciones vinculantes emitidas por la Agencia de Acceso a la Información Pública se comunica que: "el titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley Nº 25.326. LA AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, en su carácter de Órgano de Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que interpongan quienes resulten afectados en sus derechos por incumplimiento de las normas vigentes en materia de protección de datos personales. El titular podrá en cualquier momento solicitar el retiro o bloqueo de su nombre de los bancos de datos a los que se refiere el presente artículo. En toda comunicación con fines de publicidad que se realice por correo, teléfono, correo electrónico, Internet u otro medio a distancia a conocer, se deberá indicar, en forma expresa y destacada, la posibilidad del titular del dato de solicitar el retiro o bloqueo, total o parcial, de su nombre de la base de datos. A pedido del interesado, se deberá informar el nombre del responsable o usuario del banco de datos que proveyó la información.
      </p>
      <h3 className="text-lg font-bold mt-2">Cambios a esta Política de Privacidad</h3>
      <p>
        Intentamos constantemente mejorar nuestros Servicios, por lo que es posible que debamos cambiar esta Política de privacidad de vez en cuando, pero le avisaremos de dichos cambios colocando un aviso en el sitio web de AutoBid, enviándole un correo electrónico y/o por algún otro medio. Tenga en cuenta que si ha optado por no recibir nuestros correos electrónicos con avisos legales (o si no nos ha proporcionado su dirección de correo electrónico), esos avisos legales seguirán rigiendo su uso de los Servicios, y usted sigue siendo responsable de leerlos y entenderlos. Si utiliza los Servicios después de que se hayan publicado cambios en la Política de privacidad, eso significa que acepta todos los cambios. El uso de la información que recopilamos está sujeto a la Política de privacidad vigente en el momento en que se recopila dicha información.
      </p>
      <h3 className="text-lg font-bold mt-2">Información del contacto:</h3>
      <p>
        Si tiene alguna pregunta o comentario sobre esta Política de privacidad, las formas en que recopilamos y usamos sus Datos personales o sus opciones y derechos con respecto a dicha recopilación y uso, no dude en comunicarse con nosotros en:
      </p>
      <ul className="ml-4 list-disc">
        <li className="my-2 text-justify">
          Teléfono: [Teléfono aquí]
        </li>
        <li className="my-2 text-justify">
          Correo electrónico: [Correo electrónico aquí]
        </li>
        <li className="mt-2 text-justify">
          Dirección: [Dirección aquí]
        </li>
      </ul>
    </div>
  )
}
