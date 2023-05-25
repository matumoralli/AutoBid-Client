import React from 'react'

export default function Table() {
  return (
    <div className="overflow-x-auto">
      <table className="border-collapse border border-gray-300 mt-6">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Categoría de Datos Personales</th>
            <th className="border border-gray-300 px-4 py-2">Datos personales que recopilamos</th>
            <th className="border border-gray-300 px-4 py-2">Fuente(s) de Datos Personales</th>
            <th className="border border-gray-300 px-4 py-2">Categorías de terceros con los que compartimos estos datos personales para fines comerciales</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Información del perfil</td>
            <td className="border border-gray-300 px-4 py-2">
              - Nombre y apellido<br />
              - Correo electrónico<br />
              - Foto<br />
              - Dirección IP<br />
              - Datos del vehículo
            </td>
            <td className="border border-gray-300 px-4 py-2">Tú</td>
            <td className="border border-gray-300 px-4 py-2">
              - Proveedores de servicio<br />
              - Afiliados<br />
              - Adquirentes<br />
              - Destinatarios seleccionados autorizados por usted
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Otros identificadores personales</td>
            <td className="border border-gray-300 px-4 py-2">
              - ID de usuario único<br />
              - Dirección IP
            </td>
            <td className="border border-gray-300 px-4 py-2">Tú</td>
            <td className="border border-gray-300 px-4 py-2">
              - Proveedores de servicio<br />
              - Afiliados<br />
              - Adquirentes
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Información del pago</td>
            <td className="border border-gray-300 px-4 py-2">Información de tarjeta de crédito</td>
            <td className="border border-gray-300 px-4 py-2">Tercero</td>
            <td className="border border-gray-300 px-4 py-2">
              - Proveedores de servicio<br />
              - Afiliados<br />
              - Adquirentes<br />
              - Destinatarios seleccionados autorizados por usted
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Información de la cuenta de depósito</td>
            <td className="border border-gray-300 px-4 py-2">Mercado Pago u otras instrucciones de depósito bancario</td>
            <td className="border border-gray-300 px-4 py-2">Tú</td>
            <td className="border border-gray-300 px-4 py-2">
              ∙ Proveedores de servicio<br />
              ∙ Afiliados<br />
              ∙ Adquirentes
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
