import React from "react";
import { CloseIcon } from "../../assets";

//Implemeting slider for panel on small devices
export default function Menu(props: any) {
  return (
    <div
      id="menu"
      className="absolute z-30 hidden bg-gray-900 bg-opacity-25 w-[100vw] min-h-screen"
    >
      <div className="w-[90%] sm:w-[70%] min-h-screen bg-white">
        <div className="w-[80%] h-[15vw] px-4 pt-5 mx-auto flex justify-between items-center">
          <h1 className="text-xl">Menu</h1>

          <button
            onClick={() => {
              // close slider menu
              document.getElementById("menu")?.classList.add("close-menu");
            }}
          >
            <img src={CloseIcon} alt="close" />
          </button>
        </div>

        {props.children}
      </div>
    </div>
  );
}
