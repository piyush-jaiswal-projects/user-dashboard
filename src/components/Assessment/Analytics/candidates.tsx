import React from 'react'
import { CandidateIcon } from '../../../assets/icons'

export default function Candidates(props: {
    totalCandidates: string;
    totalCandidatesIncrement: string;
    whoAttempted: string;
    whoAttemptedIncrement: string;
}) {
    return (
        <div className="border flex-grow sm:border-0 md:border p-2 md:p-3 text-left h-auto">
          <h1 className="w-[100%] text-md md:text-lg text-left font-semibold">
            Candidates
          </h1>
          <div className="flex justify-start items-center my-2">
            <img className="mx-1" src={CandidateIcon} alt="" />
            <div className="px-2 mx-2 border-r-2">
              <span className="flex justify-start items-center">
                              <p className="text-2xl md:text-3xl font-bold">{props.totalCandidates}</p>
                              <p className="text-md text-[#05C165] mx-2 font-bold">+{props.totalCandidatesIncrement}</p>
              </span>
              <label className='text-sm md:text-md'>Total Candidates</label>
            </div>
            <div className="px-2 mx-1">
              <span className="flex justify-start items-center">
                              <p className="text-2xl md:text-3xl font-bold">{props.whoAttempted}</p>
                              <p className="text-md text-[#05C165] mx-2 font-bold">+{props.whoAttemptedIncrement}</p>
              </span>
              <label className='text-sm md:text-md'>Who Attempted</label>
            </div>
          </div>
        </div>
    )
}