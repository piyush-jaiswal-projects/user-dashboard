import React, { useContext } from "react";
import { Dashboard, Assessment, Library, RoundStatus } from "..";
import { ViewContext } from "../../App";

// RENDERING SCREENS BASED ON SELECTED CONTEXT
export default function Canvas() {
  const context = useContext(ViewContext);

  return (
    <div className="w-[100%] md:w-[78%] lg:w-[89%]">
      {context?.view === "Dashboard" && <Dashboard />}
      {context?.view === "Assessment" && <Assessment />}
      {context?.view === "My Library" && <Library />}
      {context?.view === "Round Status" && <RoundStatus />}
    </div>
  );
}
