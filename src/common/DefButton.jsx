import React from "react";
import { twMerge } from "tailwind-merge";

export default function DefButton({
  className,
  children,
  onClick,
  type = "click",
}) {
  const c = twMerge(
    "rounded-md bg-red-400 w-fit px-[1.2em] py-[0.7em] text-sm font-semibold text-black hover:bg-red-500 hover:text-gray-300 md:text-base mx-auto",
    className
  );
  return (
    <button onClick={onClick} type={type} className={c}>
      {children}
    </button>
  );
}
