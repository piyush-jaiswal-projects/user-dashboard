import React from 'react'
import { CandidateEmailIcon } from '../../../assets/icons'

export default function CandidateSource(props: {
    email: string;
    emailIncrement: string;
    socialShare: string;
    socialShareIncrement: string;
    uniqueLink: string;
    uniqueLinkIncrement: string;
})
{
    return (
        <div className="h-auto flex-grow md:border p-2 md:p-3 text-left">
          <h1 className="w-[100%] text-md md:text-lg text-left font-semibold">
            Candidates Source
          </h1>
          <div className="flex justify-start items-center my-2">
            <img className="mr-1" src={CandidateEmailIcon} alt="" />
            <div className="pr-1 mr-1 md:mx-1 border-r-2">
              <span className="flex justify-start items-center">
                              <p className="text-md md:text-3xl font-bold">{props.email}</p>
                              <p className="text-sm md:text-md text-[#05C165] mx-2 font-bold">+{props.emailIncrement}</p>
              </span>
              <label className='text-sm'>E-mail</label>
            </div>
            <div className="px-1 mr-1 md:mx-1 border-r-2">
              <span className="flex justify-start items-center">
                              <p className="text-md md:text-3xl font-bold">{props.socialShare}</p>
                              <p className="text-sm md:text-md text-[#05C165] mx-2 font-bold">+{props.socialShareIncrement}</p>
              </span>
              <label className='text-sm'>Social Share</label>
            </div>
            <div className="px-1 mr-1 md:mx-1">
              <span className="flex justify-start items-center">
                              <p className="text-md md:text-3xl font-bold">{props.uniqueLink}</p>
                              <p className="text-sm md:text-md text-[#05C165] mx-2 font-bold">+{props.uniqueLinkIncrement}</p>
              </span>
              <label className='text-sm'>Unique Link</label>
            </div>
          </div>
        </div>
    )
}