import React from "react";
import { CloseIcon, CloseRedIcon } from "../../assets/icons";
import useWindowWidth from "../../hooks/useWindowWidth";

export default function Header() {
  const width = useWindowWidth()

  return (
    <header className="flex justify-between items-center w-[90%] mx-auto border-b-2 h-[60px]">
      <h1 className="text-md md:text-2xl font-semibold">
        {width > 500 ? "Create new assessment" : "Sub-Section Details"}
      </h1>
      <button
        onClick={() => {
          document.getElementById("form")?.classList.add("hidden");
        }}
        className={width <= 500 ? "rounded-full bg-red-100" : ""}
      >
        <img className="w-[30px]" src={width <= 500 ? CloseRedIcon : CloseIcon} alt="close" />
      </button>
    </header>
  );
}
