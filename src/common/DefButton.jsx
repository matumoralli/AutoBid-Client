import React from "react";

export default function DefButton({ children, onClick, type='click' }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`rounded-md bg-green-400  px-[1.2em] py-[0.7em] text-sm font-semibold text-black hover:bg-green-500 hover:text-gray-300 md:text-base`}
    >
      {children}
    </button>
  );
}
