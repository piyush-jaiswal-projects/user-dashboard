import React from "react";
import TotalAssessment from "./Analytics/totalAssessment";
import Candidates from "./Analytics/candidates";
import CandidateSource from "./Analytics/candidateSources";
import TotalPurposes from "./Analytics/totalPurposes";
import useWindowWidth from "../../hooks/useWindowWidth";

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
  const width = useWindowWidth()
  return (
    <div className="w-[100%] p-2 overflow-x-hidden">
      {width > 768 ? 
        <LargeScreenLayout data={props.data} />
        : 
        <SmallScreenLayout data={props.data} />
      }
    </div>
  );
}

function LargeScreenLayout(props: Props) {
  return (
    <>
      <section className="w-[90%]">
        <h1 className="text-2xl text-left w-[100%]">Assessments Overview</h1>
      </section>
    <div
      className="w-[100%] mx-auto flex justify-center flex-wrap items-start 
          border-2 rounded-lg my-2"
    >
      <TotalAssessment totalAssessment={props.data.totalAssessment} />
      
      <Candidates
        totalCandidates={props.data.totalCandidates}
        totalCandidatesIncrement={props.data.totalCandidatesIncrement}
        whoAttempted={props.data.whoAttempted}
        whoAttemptedIncrement={props.data.whoAttemptedIncrement}
      />

      <CandidateSource
        email={props.data.email}
        emailIncrement={props.data.emailIncrement}
        socialShare={props.data.socialShare}
        socialShareIncrement={props.data.socialShareIncrement}
        uniqueLink={props.data.uniqueLink}
        uniqueLinkIncrement={props.data.uniqueLinkIncrement}
      />

      <TotalPurposes totalPurpose={props.data.totalPurpose} />
        </div>
    </>
  )
}

function SmallScreenLayout(props: Props) {
  return (
    <div id="analytics" className="analytics">
      <section className="w-[90%]">
        <h1 className="text-xl pt-1 text-left w-[100%]">Assessments Overview</h1>
      </section>
    <div
      className="border rounded-lg mx-auto w-[100%]"
    >
      <div className="flex flex-row justify-center items-center">
        <TotalAssessment totalAssessment={props.data.totalAssessment} />
        <TotalPurposes totalPurpose={props.data.totalPurpose} />
      </div>
      
      <Candidates
        totalCandidates={props.data.totalCandidates}
        totalCandidatesIncrement={props.data.totalCandidatesIncrement}
        whoAttempted={props.data.whoAttempted}
        whoAttemptedIncrement={props.data.whoAttemptedIncrement}
      />

      <CandidateSource
        email={props.data.email}
        emailIncrement={props.data.emailIncrement}
        socialShare={props.data.socialShare}
        socialShareIncrement={props.data.socialShareIncrement}
        uniqueLink={props.data.uniqueLink}
        uniqueLinkIncrement={props.data.uniqueLinkIncrement}
      />
        </div>
    </div>
  )
}
