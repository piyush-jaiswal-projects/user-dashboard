import React from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import MenuButton from "../Navigation/menuButton";

// DASHBOARD SCREEN
export default function Dashboard() {
  const width = useWindowWidth();

  return (
    <div className="w-[100vw] md:w-[100%] bg-white text-center my-1 rounded-3xl">
      <div className="flex justify-between items-center">
        {width < 768 && <MenuButton />}
        <h1 className="text-[#0073E6] w-[100%] text-3xl my-2">DASHBOARD</h1>
      </div>
    </div>
  );
}
