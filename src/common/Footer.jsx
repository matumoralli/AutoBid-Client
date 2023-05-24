import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="text-gray-600 mx-auto bg-[#eeeef0]">
      <div className="container px-5 py-12 mx-auto flex md:items-start md:flex-row md:flex-nowrap flex-wrap flex-col max-w-[1440px]">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex font-medium items-center md:justify-start justify-center text-gray-900">
            <h1 className="text-3xl font-bold text-green-400 md:mr-4 lg:text-3xl">
              Auto
              <span className="text-3xl font-bold text-black lg:text-3xl">
                Bid
              </span>
            </h1>
          </a>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-15 -mb-10 md:mt-2 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 sm:w-1/2 w-full md:px-4">
            <h2 className="font-medium text-gray-400 text-sm mb-3">
              HOW IT WORKS
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-900 hover:text-gray-800">
                  Buying a Car
                </a>
              </li>
              <li>
                <a className="text-gray-900 hover:text-gray-800">
                  Selling a Car
                </a>
              </li>
              <li>
                <a className="text-gray-900 hover:text-gray-800">
                  Finalizing the Sale
                </a>
              </li>
              <li>
                <a className="text-gray-900 hover:text-gray-800">FAQs</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 sm:w-1/2 w-full md:px-4">
            <h2 className="font-medium text-gray-400 text-sm mb-3">SELLERS</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-900 hover:text-gray-800">
                  Submit your Car
                </a>
              </li>
              <li>
                <a className="text-gray-900 hover:text-gray-800">
                  Photography Guide
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 sm:w-1/2 w-full md:px-4">
            <h2 className="font-medium text-gray-400 text-sm mb-3">
              HELPFUL LINKS
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-900 hover:text-gray-800">Support</a>
              </li>
              <li>
                <a className="text-gray-900 hover:text-gray-800">Shipping</a>
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
                <a className="text-gray-900 hover:text-gray-800 text-xs">
                  Terminos de uso
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
