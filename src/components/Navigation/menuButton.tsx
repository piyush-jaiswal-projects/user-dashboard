import React from "react";
import { MenuIcon } from "../../assets";

// BUTTON TO OPEN MENU
export default function MenuButton() {
  const handleClick = () => {
    const menu = document.getElementById("menu");
    menu?.classList.remove("close-menu");

    if (menu?.classList.contains("hidden")) {
      menu?.classList.remove("hidden");
    }
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <img src={MenuIcon} alt="Menu" />
    </div>
  );
}
