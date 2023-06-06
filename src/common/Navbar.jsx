import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Navbar() {
  const isLogged = true;

  const { user, error, isLoading } = useUser();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleMenuLinkClick = (path) => {
    router.push(path);
    setOpen(false);
  };

  return (
    <div className="fixed left-0 right-0 top-0 z-20 bg-white">
      <div className="mx-auto max-w-[1440px] px-4 shadow-md md:shadow-none ">
        <div className="flex items-center justify-between py-4 md:border-b ">
          <Link href="/">
            <Image
              className="h-[38px] w-[120px] sm:w-[150px] md:mr-8 md:h-[46px]"
              src="/../public/Logo.png"
              alt="AutoBidLogo"
              width={150}
              height={300}
            />
          </Link>

          <ul className="hidden space-x-6 md:flex md:items-center">
            <li>
              <a
                className="text-base font-medium text-black text-opacity-50 transition-all duration-300 hover:text-opacity-100"
                href="#"
              >
                Subastas
              </a>
            </li>
            <li>
              <Link
                className="text-base font-medium text-black text-opacity-50 transition-all duration-300 hover:text-opacity-100"
                href="/sell-car"
              >
                Vende tu Auto
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-medium text-black text-opacity-50 transition-all duration-300 hover:text-opacity-100"
                href="/about"
              >
                ¿Qué es AutoBid?
              </Link>
            </li>

            {isLogged && (
              <li className="group hidden text-black text-opacity-50 transition-all duration-300 hover:text-opacity-100 md:flex md:items-center md:gap-1 lg:hidden">
                <span className="grid h-8 w-8 place-content-center rounded-full border-2 border-red-500 font-bold text-red-500 transition-all duration-300 group-hover:bg-red-500 group-hover:text-white">
                  5
                </span>
                <h3 className="text-base font-medium">Créditos</h3>
              </li>
            )}
          </ul>
          {user ? (
            <div className="ml-auto flex items-center">
              <div>
                Welcome {user.name}!{" "}
                <button className="rounded-md border-2 border-green-400 p-2 font-medium text-green-400 transition-all duration-300 hover:bg-green-400 hover:text-white">
                  <a href="/api/auth/logout">Cerrar sesión</a>
                </button>
              </div>
            </div>
          ) : (
            <div className="ml-auto mr-2 flex items-center md:mr-0">
              <button className="rounded-md border-2 border-red-500 p-2 font-medium text-red-500 transition-all duration-300 hover:bg-red-500 hover:text-white">
                <a href="/api/auth/login">Iniciar sesión</a>
              </button>
            </div>
          )}
          <button className=" md:hidden" onClick={() => setOpen(true)}>
            <AiOutlineMenu size={30} className="text-black" />
          </button>
          <div
            className={`${
              !open && "hidden"
            } fixed left-0 right-0 top-0 z-[3] min-h-screen w-full bg-gray-600/50 backdrop-blur-sm`}
            onClick={() => setOpen(false)}
          ></div>

          <div
            className={`${
              open ? "w-screen" : "w-0"
            } fixed left-0 top-0 z-[3] min-h-screen bg-[#fafbfd] transition-all duration-300`}
          >
            <div className={`${!open && "hidden"} pt-3`}>
              <div className="flex items-center justify-between px-4">
                <h1 className="text-2xl font-bold text-gray-800">Menu</h1>
                <button
                  className="ml-2 py-3 text-black"
                  onClick={() => setOpen(false)}
                >
                  <AiOutlineClose size={25} />
                </button>
              </div>
              <ul className="flex p-1 text-[#18171c]">
                <li className="flex flex-col items-start py-2 text-xl">
                  <button className="px-4 py-3 text-base font-medium">
                    Subastas
                  </button>
                  <Link href="/sell-car">
                    <button
                      className="ml-3 rounded-xl bg-red-500 px-4 py-2 text-base font-medium"
                      onClick={() => handleMenuLinkClick("/sell-car")}
                    >
                      Vende tu Auto
                    </button>
                  </Link>
                  <Link href="/about">
                    <button
                      className="px-4 py-3 text-base font-medium"
                      onClick={() => handleMenuLinkClick("/about")}
                    >
                      ¿Qué es AutoBid?
                    </button>
                  </Link>
                  {isLogged && (
                    <div className="ml-3 mt-2 flex items-center gap-2">
                      <span className="grid h-8 w-8 place-content-center rounded-full border-2 border-red-500 font-bold text-red-500">
                        5
                      </span>
                      <h3 className="text-base font-medium">Créditos</h3>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
