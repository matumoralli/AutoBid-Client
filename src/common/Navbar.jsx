import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const { user, error, isLoading } = useUser();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleMenuLinkClick = (path) => {
    router.push(path);
    setOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-20">
      <div className="px-4 mx-auto max-w-[1440px] shadow-md md:shadow-none ">
        <div className="flex items-center justify-between py-4 md:border-b ">
          <Link href="/">
            <Image
              className="md:mr-8 w-[120px] h-[38px] md:h-[46px] sm:w-[150px]"
              src="/../public/Logo.png"
              alt="AutoBidLogo"
              width={150}
              height={300}
            />
          </Link>
          <h1 className="text-3xl font-bold text-green-400 md:mr-8 lg:text-4xl">
            Auto
            <span className="text-3xl font-bold text-black lg:text-4xl">
              Bid
            </span>
          </h1>

          <ul className="hidden space-x-6 md:flex">
            <li>
              <a className="text-base font-medium hover:text-gray-400" href="#">
                Subastas
              </a>
            </li>
            <li>
              <Link
                className="text-base font-medium hover:text-gray-400"
                href="/sell-car"
              >
                Vende tu Auto
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-medium hover:text-gray-400"
                href="/about"
              >
                ¿Qué es AutoBid?
              </Link>
            </li>
          </ul>
          {user ? (
            <div className="flex items-center ml-auto">
              <div>
                Welcome {user.name}!{" "}
                <button className=" mx-6 md:mx-auto text-sm px-3 py-2 md:px-7 md:py-[10px] md:text-base font-semibold text-black bg-green-400 rounded-md hover:text-gray-200">
                  <a href="/api/auth/logout">Log out</a>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center ml-auto">
              <button className=" mx-6 md:mx-auto text-sm px-3 py-2 md:px-7 md:py-[10px] md:text-base font-semibold text-black bg-green-400 rounded-md hover:text-gray-200">
                <a href="/api/auth/login">Sign Up</a>
              </button>
            </div>
          )}
          <button className=" md:hidden" onClick={() => setOpen(true)}>
            <AiOutlineMenu size={30} className="text-black" />
          </button>
          <div
            className={`${
              !open && "hidden"
            } bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm z-[3]`}
            onClick={() => setOpen(false)}
          ></div>

          <div
            className={`${
              open ? "w-screen" : "w-0"
            } bg-[#fafbfd] min-h-screen fixed top-0 left-0 transition-all duration-300 z-[3]`}
          >
            <div className={`${!open && "hidden"} pt-3`}>
              <div className="flex items-center justify-between px-4">
                <h1 className="text-2xl font-bold text-gray-800">Menu</h1>
                <button
                  className="py-3 ml-2 text-black"
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
                      className="px-4 py-2 text-base font-medium ml-3 bg-red-500 rounded-xl"
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
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
