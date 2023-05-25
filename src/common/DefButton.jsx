import React from "react";

export default function DefButton({ children, className, onClick }) {
  return (
    // use className prop only to change text color. Other changes can result in unexpected behavior.
    <div className={className ? className : ""}>
      <button
        onClick={onClick}
        className={`rounded-md bg-green-400 px-[1.2em] py-[0.7em] text-sm font-semibold text-inherit hover:text-gray-300 hover:bg-green-500 md:text-base`}
      >
        {children}
      </button>
    </div>
  );
}
