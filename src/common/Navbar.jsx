import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const { user, error, isLoading } = useUser();

  const [open, setOpen] = useState(false);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="fixed top-0 left-0 right-0 bg-white">
      <div className="px-4 mx-auto max-w-[1440px] shadow-md md:shadow-none ">
        <div className="flex items-center justify-between py-4 md:border-b ">
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
              <a className="text-base font-medium hover:text-gray-400" href="#">
                Vender Tu Auto
              </a>
            </li>
            <li>
              <a className="text-base font-medium hover:text-gray-400" href="#">
                ¿Qué es AutoBid?
              </a>
            </li>
          </ul>
          {user ? (
            <div className="flex items-center ml-auto">
              <div>
                Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
              </div>
            </div>
          ) : (
            <div className="flex items-center ml-auto">
              <button className=" mx-6 md:mx-auto text-sm px-3 py-2 md:px-7 md:py-[10px] md:text-base font-semibold text-black bg-green-400 rounded-md hover:text-gray-200">
                Sign Up
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
                  <button className="px-4 py-3 text-base font-medium">
                    Vender Tu Auto
                  </button>
                  <button className="px-4 py-3 text-base font-medium">
                    ¿Que es AutoBid?
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
