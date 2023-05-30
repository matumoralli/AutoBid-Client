import React from 'react'
import { Link } from 'react-scroll';

export default function Aside() {
  return (
    <aside className=" hidden md:w-1/3 md:mt-2 lg:mt-4 md:flex fixed z-[1]">
      <div className="block">
        <ul className="">
          <li>
            <Link to="sectionSobreNosotros" spy={true} smooth={true} offset={-100} className="font-semibold text-gray-500 text-sm cursor-pointer">
              Sobre Nosotros
            </Link>
          </li>
          <li className="mt-2">
            <span className="text-[12px] text-gray-400 uppercase">
              Cómo funciona
            </span>
            <ul>
              <li className="my-1">
                <Link to="sectionComprarAuto" spy={true} smooth={true} offset={-100} className="text-sm font-semibold text-gray-500 cursor-pointer">
                  Comprar un Auto
                </Link>
              </li>
              <li className="my-1">
                <Link to="sectionVenderAuto" spy={true} smooth={true} offset={-100} className="text-sm font-semibold text-gray-500 cursor-pointer">
                  Vender un Auto
                </Link>
              </li>
              <li className="my-1">
                <Link to="sectionFinalizarVenta" spy={true} smooth={true} offset={-100} className="text-sm font-semibold text-gray-500 cursor-pointer">
                  Finalización de la venta
                </Link>
              </li>
            </ul>
          </li>
          <li className="mt-2">
            <span className="text-[12px] text-gray-400 uppercase ">
              Preguntas Frecuentes
            </span>
            <ul>
              <li className="my-1">
                <Link to="faqComprador" spy={true} smooth={true} offset={-100} className="text-sm font-semibold text-gray-500 cursor-pointer">
                  Comprador
                </Link>
              </li>
              <li className="my-1">
                <Link to="faqVendedor" spy={true} smooth={true} offset={-100} className="text-sm font-semibold text-gray-500 cursor-pointer">
                  Vendedor
                </Link>
              </li>
              <li className="my-1">
                <Link to="faqAcceso" spy={true} smooth={true} offset={-100} className="text-sm font-semibold text-gray-500 cursor-pointer">
                  Acceso
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  )
}
