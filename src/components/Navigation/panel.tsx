import React from "react";
import { navItems, adminItem } from "../../data/navigationData";
import Card from "./menuCard";
import useWindowWidth from "../../hooks/useWindowWidth";

interface Props {
  handler: (newView: string) => void;
}

export default function Panel(props: Props) {
  const width = useWindowWidth();

  return (
    <div className="w-[100%] md:w-[20%] lg:w-[10%] bg-white h-[100%] py-0 px-2">
      <div className="w-[100%] mx-auto">
        {navItems.map((item) => {
          // NAVIGATION OPTIONS
          return (
            <Card clickHandler={props.handler} key={item.title} data={item} />
          );
        })}
      </div>

      {/* RENDERING NAVIGATION UI BASED ON SCREEN SIZE */}
      <div
        className={
          width < 768
            ? "border-t-2 border-dotted w-[80%] flex justify-between items-center text-center mx-auto py-2"
            : "border-t-2 border-dotted flex justify-center flex-wrap w-[100%] md:w-[80%] text-center mx-auto py-2"
        }
      >
        {width < 768 && <Card clickHandler={props.handler} data={adminItem} />}
        <div
          className={
            width < 768
              ? "bg-[#FBEBEA] text-[#D63500] border-[#D63500] w-[30%] border text-center rounded-3xl "
              : "bg-[#FBEBEA] text-[#D63500] border-[#D63500] w-[60%] border text-center text-sm rounded-3xl mt-4 my-2"
          }
        >
          Admin
        </div>
        {width >= 768 && <Card clickHandler={props.handler} data={adminItem} />}
      </div>
    </div>
  );
}
