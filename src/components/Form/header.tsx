import React from "react";
import { CloseIcon } from "../../assets/icons";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-[90%] mx-auto border-b-2 h-[60px]">
      <h1 className="text-lg md:text-2xl font-semibold">
        Create new assessment
      </h1>
      <button
        onClick={() => {
          document.getElementById("form")?.classList.add("hidden");
        }}
      >
        <img className="w-[30px]" src={CloseIcon} alt="close" />
      </button>
    </header>
  );
}
