import React from "react";
import { TotalAssessIcon } from "../../../assets";

// TOTAL ASSESMENTS STATS
export default function TotalAssessment(props: { totalAssessment: string }) {
  return (
    <div className="border-r flex-grow sm:border-r-0 md:border p-5 md:p-3 text-left h-auto">
      <h1 className="w-[100%] text-md md:text-lg text-left font-semibold">
        Total Assessment
      </h1>
      <div className="flex justify-start items-center my-3 md:mb-5 md:mt-4">
        <img className=" md:mx-1" src={TotalAssessIcon} alt="" />
        <div className="px-2 mx-2">
          <span className="flex justify-start items-center">
            <p className="text-2xl md:text-3xl font-bold">
              {props.totalAssessment}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
