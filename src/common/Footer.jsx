import React from "react";
import Image from "next/image";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  const pdfPath = "/GuiaFotos.pdf";

  const isCurrentPage = (pathname) => {
    return router.pathname === pathname;
  };

  return (
    <footer className="mx-auto mt-20 bg-[#eeeef0] text-gray-600">
      <div className="container mx-auto flex max-w-[1440px] flex-col flex-wrap px-5 py-10 md:flex-row md:flex-nowrap md:items-start lg:py-12">
        <div className="mx-auto w-64 flex-shrink-0 text-center md:mx-0 md:text-left">
          <a className="flex items-center justify-center font-medium text-gray-900 md:justify-start">
            <Image
              className="h-[38px] w-[120px] sm:h-auto sm:w-[150px] md:mr-8 md:h-[46px] md:w-auto"
              src="/../public/LogoFooter.png"
              alt="AutoBidLogoFooter"
              width={150}
              height={300}
              priority={true}
            />
          </a>
        </div>
        <div className="md:pl-15 -mb-10 mt-10 flex flex-grow flex-wrap text-center md:mt-2 md:text-left">
          <div className="w-full sm:w-1/2 md:w-1/2 md:px-4 lg:w-1/4">
            <h2 className="mb-3 text-sm font-medium text-gray-400">
              CÓMO FUNCIONA
            </h2>
            <nav className="mb-10 list-none">
              <li>
                {isCurrentPage("/about") ? (
                  <ScrollLink
                    to="sectionComprarAuto"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    className="cursor-pointer text-gray-900 hover:text-gray-800 hover:underline"
                  >
                    Comprar un Auto
                  </ScrollLink>
                ) : (
                  <Link
                    href="/about#sectionComprarAutoHref"
                    className="cursor-pointer text-gray-900 hover:text-gray-800 hover:underline"
                  >
                    Comprar un Auto
                  </Link>
                )}
              </li>
              <li>
                {isCurrentPage("/about") ? (
                  <ScrollLink
                    to="sectionVenderAuto"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    className="cursor-pointer text-gray-900 hover:text-gray-800 hover:underline"
                  >
                    Vender un Auto
                  </ScrollLink>
                ) : (
                  <Link
                    href="/about#sectionVenderAutoHref"
                    className="cursor-pointer text-gray-900 hover:text-gray-800 hover:underline"
                  >
                    Vender un Auto
                  </Link>
                )}
              </li>
              <li>
                {isCurrentPage("/about") ? (
                  <ScrollLink
                    to="sectionFinalizarVenta"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    className="cursor-pointer text-gray-900 hover:text-gray-800 hover:underline"
                  >
                    Finalización de la venta
                  </ScrollLink>
                ) : (
                  <Link
                    href="/about#sectionFinalizarVentaHref"
                    className="cursor-pointer text-gray-900 hover:text-gray-800 hover:underline"
                  >
                    Finalización de la venta
                  </Link>
                )}
              </li>
              <li>
                {isCurrentPage("/about") ? (
                  <ScrollLink
                    to="faq"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    className="cursor-pointer text-gray-900 hover:text-gray-800 hover:underline"
                  >
                    Preguntas Frecuentes
                  </ScrollLink>
                ) : (
                  <Link
                    href="/about#faqHref"
                    className="cursor-pointer text-gray-900 hover:text-gray-800 hover:underline"
                  >
                    Preguntas Frecuentes
                  </Link>
                )}
              </li>
            </nav>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 md:px-4 lg:w-1/4">
            <h2 className="mb-3 text-sm font-medium text-gray-400">
              VENDEDORES
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <Link
                  href="/sell-car"
                  className="cursor-pointer text-gray-900 hover:text-gray-800 hover:underline"
                >
                  Vende tu Auto
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={pdfPath}
                  className="cursor-pointer text-gray-900 hover:text-gray-800 hover:underline"
                >
                  Guía de fotos
                </Link>
              </li>
            </nav>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 md:px-4 lg:w-1/4">
            <h2 className="mb-3 text-sm font-medium text-gray-400">
              LINKS DE AYUDA
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <Link
                  href="/support"
                  className="cursor-pointer text-gray-900 hover:text-gray-800 hover:underline"
                >
                  Soporte
                </Link>
              </li>
              <li>
                <Link
                  href="/inspections"
                  className="cursor-pointer text-gray-900 hover:text-gray-800 hover:underline"
                >
                  Inspecciones
                </Link>
              </li>
            </nav>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 md:px-4 lg:w-1/4">
            <div className="flex items-center justify-center gap-1 md:justify-start">
              <i className="text-gray-900">
                <AiFillInstagram size={22} />
              </i>
              <i className="text-gray-900">
                <AiOutlineTwitter size={22} />
              </i>
            </div>
            <nav className="mb-10 mt-2 list-none">
              <li>
                <a className="text-xs text-gray-900 hover:text-gray-800">
                  © Copyright 2023 AutoBid{" "}
                </a>
              </li>
              <li>
                <Link
                  className="text-xs text-gray-900 hover:text-gray-800 hover:underline"
                  href="/terms-of-use"
                >
                  Terminos de uso
                </Link>
              </li>
              <li>
                <Link
                  className="text-xs text-gray-900 hover:text-gray-800 hover:underline"
                  href="/privacy-policy"
                >
                  Política de Privacidad
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
