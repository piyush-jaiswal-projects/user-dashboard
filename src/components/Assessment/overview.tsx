import React from "react";
import {
  CandidateEmailIcon,
  CandidateIcon,
  LinkIcon,
  TotalAssessIcon,
} from "../../assets/icons";

type Props = {
    data: {
    totalAssessment: string;
    totalCandidates: string;
    totalCandidatesIncrement: string;
    whoAttempted:string;
    whoAttemptedIncrement: string;
    email: string;
    emailIncrement: string;
    socialShare: string;
    socialShareIncrement: string;
    uniqueLink: string;
    uniqueLinkIncrement: string;
    totalPurpose: string;
    }
}

export default function Overview(props: Props) {
  return (
    <div className="w-[100%] mx-2 p-2 overflow-x-hidden">
      <section className="w-[90%]">
        <h1 className="text-2xl text-left w-[100%]">Assessments Overview</h1>
      </section>

      <div
        className="w-[100%] mx-auto flex justify-center flex-wrap items-center 
            border-2 rounded-lg my-2"
      >
        <div className="border border-l-0 p-5 text-left h-[130px]">
          <h1 className="w-[100%] text-md text-left font-semibold">
            Total Assessment
          </h1>
          <div className="flex justify-start items-center my-3">
            <img className="mx-2" src={TotalAssessIcon} alt="" />
            <div className="px-2 mx-2">
              <span className="flex justify-start items-center">
                              <p className="text-2xl font-bold">{props.data.totalAssessment}</p>
              </span>
            </div>
          </div>
        </div>

        <div className="border p-5 text-left h-[130px]">
          <h1 className="w-[100%] text-md text-left font-semibold">
            Candidates
          </h1>
          <div className="flex justify-start items-center my-2">
            <img className="mx-2" src={CandidateIcon} alt="" />
            <div className="px-2 mx-2 border-r-2">
              <span className="flex justify-start items-center">
                              <p className="text-2xl font-bold">{props.data.totalCandidates}</p>
                              <p className="text-md text-[#05C165] mx-2 font-bold">+{props.data.totalCandidatesIncrement}</p>
              </span>
              <label>Total Candidates</label>
            </div>
            <div className="px-2 mx-2">
              <span className="flex justify-start items-center">
                              <p className="text-2xl font-bold">{props.data.whoAttempted}</p>
                              <p className="text-md text-[#05C165] mx-2 font-bold">+{props.data.whoAttemptedIncrement}</p>
              </span>
              <label>Who Attempted</label>
            </div>
          </div>
        </div>

        <div className="h-[130px] border p-5 text-left">
          <h1 className="w-[100%] text-md text-left font-semibold">
            Candidates Source
          </h1>
          <div className="flex justify-start items-center my-2">
            <img className="mx-2" src={CandidateEmailIcon} alt="" />
            <div className="px-2 mx-2 border-r-2">
              <span className="flex justify-start items-center">
                              <p className="text-2xl font-bold">{props.data.email}</p>
                              <p className="text-md text-[#05C165] mx-2 font-bold">+{props.data.emailIncrement}</p>
              </span>
              <label>E-mail</label>
            </div>
            <div className="px-2 mx-2 border-r-2">
              <span className="flex justify-start items-center">
                              <p className="text-2xl font-bold">{props.data.socialShare}</p>
                              <p className="text-md text-[#05C165] mx-2 font-bold">+{props.data.socialShareIncrement}</p>
              </span>
              <label>Social Share</label>
            </div>
            <div className="px-2 mx-2">
              <span className="flex justify-start items-center">
                              <p className="text-2xl font-bold">{props.data.uniqueLink}</p>
                              <p className="text-md text-[#05C165] mx-2 font-bold">+{props.data.uniqueLinkIncrement}</p>
              </span>
              <label>Unique Link</label>
            </div>
          </div>
        </div>

        <div className="h-[130px] border p-5 text-left">
          <h1 className="w-[100%] text-md text-left font-semibold">
            Total Purpose
          </h1>
          <div className="flex justify-start items-center my-3">
            <img className="mx-2" src={LinkIcon} alt="" />
            <div className="px-2 mx-2">
              <span className="flex justify-start items-center">
                              <p className="text-2xl font-bold">{props.data.totalPurpose}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
