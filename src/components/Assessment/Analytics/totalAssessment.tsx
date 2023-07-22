import React from 'react'
import { TotalAssessIcon } from '../../../assets/icons'

export default function TotalAssessment(props: {
    totalAssessment: string;
}) {
    return (
        <div className="border-r p-5 md:p-7 text-left h-[130px] md:h-[100%]">
          <h1 className="w-[100%] text-md md:text-lg text-left font-semibold">
            Total Assessment
          </h1>
          <div className="flex justify-start items-center my-3">
            <img className="mx-2 md:mx-1" src={TotalAssessIcon} alt="" />
            <div className="px-2 mx-2">
              <span className="flex justify-start items-center">
                              <p className="text-2xl md:text-3xl font-bold">{props.totalAssessment}</p>
              </span>
            </div>
          </div>
        </div>
    )
}