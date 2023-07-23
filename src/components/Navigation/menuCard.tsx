import React, { useContext, useEffect } from "react";
import { ViewContext } from "../../App";

type Props = {
  data: {
    image: string;
    title: string;
  };
  clickHandler: (newView: string) => void;
};

// NAVIGATION OR MENU OPTIONS
// IMPLEMENTING SELECTED OPTION BASED UI
export default function MenuCard(props: Props) {
  var context = useContext(ViewContext);

  useEffect(() => {
    const el = document.getElementById(props.data.title);

    context?.view === props.data.title
      ? el?.classList.add("navcard-active")
      : el?.classList.remove("navcard-active");
  }, [context, props.data.title]);

  const navigateItem = () => {
    document.getElementById("menu")?.classList.add("close-menu");
    props.clickHandler(props.data.title);
  };

  return (
    <div
      id={props.data.title}
      onClick={navigateItem}
      className="flex cursor-pointer my-3 md:my-0 md:flex-col text-left
            items-center md:justify-center md:text-center p-1 mx-auto w-[80%] md:w-[85%] md:h-[80px]"
    >
      <img
        className="mr-2 md:mx-auto fill-slate-500"
        src={props.data.image}
        alt={props.data.title}
      />

      <p className="text-[1rem] lg:text-[1vw]">{props.data.title}</p>
    </div>
  );
}
