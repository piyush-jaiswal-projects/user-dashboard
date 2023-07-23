import React from "react";
import Panel from "./panel";
import Menu from "./menu";
import useWindowWidth from "../../hooks/useWindowWidth";

interface Props {
  handler: (newView: string) => void;
}

//NAVIGATION SCREEN
export default function Navigation(props: Props) {
  const width = useWindowWidth();

  // sliding Menu(Panel) for small screen
  // Panel for navigation on large screens
  return (
    <>
      {width > 768 ? (
        <Panel handler={props.handler} />
      ) : (
        <Menu>
          <Panel handler={props.handler} />
        </Menu>
      )}
    </>
  );
}
