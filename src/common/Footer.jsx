import React from 'react';
import Image from 'next/image';
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function Footer() {
  const router = useRouter();
  const pdfPath = '/GuiaFotos.pdf';

  const isCurrentPage = (pathname) => {
    return router.pathname === pathname;
  };

  return (
    <footer className="text-gray-600 mx-auto bg-[#eeeef0] mt-20">
      <div className="container px-5 py-10 lg:py-12 mx-auto flex md:items-start md:flex-row md:flex-nowrap flex-wrap flex-col max-w-[1440px]">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex font-medium items-center md:justify-start justify-center text-gray-900">
            <Image className=' md:mr-8 w-[120px] h-[38px] md:h-[46px] sm:w-[150px]' src="/../public/LogoFooter.png" alt="AutoBidLogoFooter" width={150} height={300}/>
          </a>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-15 -mb-10 md:mt-2 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 sm:w-1/2 w-full md:px-4">
            <h2 className="font-medium text-gray-400 text-sm mb-3">CÓMO FUNCIONA</h2>
            <nav className="list-none mb-10">
              <li>
                {isCurrentPage('/about') ? (
                  <ScrollLink to="sectionComprarAuto" spy={true} smooth={true} offset={-100} className="text-gray-900 hover:text-gray-800 hover:underline cursor-pointer">
                    Comprar un Auto
                  </ScrollLink>
                ) : (
                  <Link href="/about#sectionComprarAutoHref" className="text-gray-900 hover:text-gray-800 hover:underline cursor-pointer">
                    Comprar un Auto
                  </Link>
                )}
              </li>
              <li>
                {isCurrentPage('/about') ? (
                  <ScrollLink to="sectionVenderAuto" spy={true} smooth={true} offset={-100} className="text-gray-900 hover:text-gray-800 hover:underline cursor-pointer">
                    Vender un Auto
                  </ScrollLink>
                ) : (
                  <Link href="/about#sectionVenderAutoHref" className="text-gray-900 hover:text-gray-800 hover:underline cursor-pointer">
                    Vender un Auto
                  </Link>
                )}
              </li>
              <li>
                {isCurrentPage('/about') ? (
                  <ScrollLink to="sectionFinalizarVenta" spy={true} smooth={true} offset={-100} className="text-gray-900 hover:text-gray-800 hover:underline cursor-pointer">
                    Finalización de la venta
                  </ScrollLink>
                ) : (
                  <Link href="/about#sectionFinalizarVentaHref" className="text-gray-900 hover:text-gray-800 hover:underline cursor-pointer">
                    Finalización de la venta
                  </Link>
                )}
              </li>
              <li>
                {isCurrentPage('/about') ? (
                  <ScrollLink to="faq" spy={true} smooth={true} offset={-100} className="text-gray-900 hover:text-gray-800 hover:underline cursor-pointer">
                    Preguntas Frecuentes
                  </ScrollLink>
                ) : (
                  <Link href="/about#faqHref" className="text-gray-900 hover:text-gray-800 hover:underline cursor-pointer">
                    Preguntas Frecuentes
                  </Link>
                )}
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 sm:w-1/2 w-full md:px-4">
            <h2 className="font-medium text-gray-400 text-sm mb-3">VENDEDORES</h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="/sell-car" className="text-gray-900 hover:text-gray-800 hover:underline cursor-pointer">
                  Vende tu Auto
                </Link>
              </li>
              <li>
                <Link target="_blank" rel="noopener noreferrer" href={pdfPath} className="text-gray-900 hover:text-gray-800 hover:underline cursor-pointer">
                  Guía de fotos
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 sm:w-1/2 w-full md:px-4">
            <h2 className="font-medium text-gray-400 text-sm mb-3">LINKS DE AYUDA</h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="/support" className="text-gray-900 hover:text-gray-800 hover:underline cursor-pointer">Soporte</Link>
              </li>
              <li>
                <Link href="/inspections" className="text-gray-900 hover:text-gray-800 hover:underline cursor-pointer">Inspecciones</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 sm:w-1/2 w-full md:px-4">
            <div className="flex items-center justify-center md:justify-start gap-1">
              <i className="text-gray-900">
                <AiFillInstagram size={22} />
              </i>
              <i className="text-gray-900">
                <AiOutlineTwitter size={22} />
              </i>
            </div>
            <nav className="list-none mb-10 mt-2">
              <li>
                <a className="text-gray-900 hover:text-gray-800 text-xs">
                  © Copyright 2023 AutoBid{" "}
                </a>
              </li>
              <li>
                <Link className="text-gray-900 hover:text-gray-800 hover:underline text-xs" href="/terms-of-use">Terminos de uso</Link>
              </li>
              <li>
                <Link className="text-gray-900 hover:text-gray-800 hover:underline text-xs" href="/privacy-policy">Política de Privacidad</Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
