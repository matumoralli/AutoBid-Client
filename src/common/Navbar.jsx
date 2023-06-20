import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "@/redux/user/userSlice";
import DefButton from "./DefButton";

export default function Navbar() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const {
    user: userAuth,
    error: errorAuth,
    isLoading: isLoadingAuth,
  } = useUser();

  useEffect(() => {
    if (userAuth?.email) {
      dispatch(fetchUser({ name: userAuth.name, email: userAuth.email }));
    }
  }, [userAuth]);

  const { user, loading, error } = useSelector((state) => state.user);

  const handleMenuLinkClick = (path) => {
    router.push(path);
    setOpen(false);
  };

  return (
    <>
      <div className="sticky left-0 right-0 top-0 z-20 bg-white">
        <div className="mx-auto max-w-[1440px] px-4 shadow-md md:shadow-none ">
          <div className="flex items-center justify-between py-4 md:border-b ">
            <Link href="/">
              <Image
                className="h-[38px] w-[120px] sm:h-auto sm:w-[150px] md:mr-8 md:h-[46px] md:w-auto"
                src="/../public/Logo.png"
                alt="AutoBidLogo"
                width={150}
                height={300}
              />
            </Link>

            <ul className="hidden space-x-6 md:flex">
              <li>
                <a
                  className="text-base font-medium hover:text-gray-400"
                  href="#"
                >
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
              {user?.isAdmin === true && (
                <li>
                  <Link
                    className="text-base font-medium hover:text-gray-400"
                    href="/dashboard"
                  >
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>
            {userAuth ? (
              <div className="ml-auto hidden items-center md:flex">
                <div className="flex gap-2 items-center">
                  <p>{userAuth.name.split(" ")[0]}</p>
                  <button className=" mx-6 rounded-md bg-red-400 px-3 py-2 text-sm font-semibold text-black hover:text-gray-200 md:mx-auto md:px-7 md:py-[10px] md:text-base">
                    <a href="/api/auth/logout">Log out</a>
                  </button>
                </div>
              </div>
            ) : (
              <div className="ml-auto flex items-center">
                <button className=" mx-6 rounded-md bg-red-400 px-3 py-2 text-sm font-semibold text-black hover:text-gray-200 md:mx-auto md:px-7 md:py-[10px] md:text-base">
                  <a href={`/api/auth/login?returnTo=${router.pathname}`}>Log in</a>
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
                    {user?.isAdmin === true && (
                      <Link href="/dashboard">
                        <button className="px-4 py-3 text-base font-medium">
                          Dashboard
                        </button>
                      </Link>
                    )}
                    {userAuth ? (
                      <>
                        <Link href="#">
                          <button className="px-4 me-2 py-3 text-base font-medium">
                            Perfil {userAuth.name.split(" ")[0]}
                          </button>
                        </Link>
                        <a href="/api/auth/logout">
                          <DefButton className={`mx-4 bg-red-400`}>
                            Log out
                          </DefButton>
                        </a>
                      </>
                    ) : (
                      <a href={`/api/auth/login?returnTo=${router.pathname}`}>
                        <DefButton className={`mx-4 bg-red-400`}>
                          Log in
                        </DefButton>
                      </a>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
