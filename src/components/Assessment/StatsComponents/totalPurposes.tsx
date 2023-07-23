import React from "react";
import { LinkIcon } from "../../../assets";

// TOTAL PURPOSES STATS
export default function TotalPurposes(props: { totalPurpose: string }) {
  return (
    <div className="md:border flex-grow h-auto p-5 md:p-3 text-left">
      <h1 className="w-[100%] text-md md:text-lg text-left font-semibold">
        Total Purpose
      </h1>
      <div className="flex justify-start items-center my-3 md:mb-5 md:mt-4">
        <img className="mx-2" src={LinkIcon} alt="" />
        <div className="px-2 mx-2">
          <span className="flex justify-start items-center">
            <p className="text-2xl md:text-3xl font-bold">
              {props.totalPurpose}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
