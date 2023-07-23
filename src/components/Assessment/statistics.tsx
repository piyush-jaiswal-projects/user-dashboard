import React from "react";
import TotalAssessment from "./StatsComponents/totalAssessment";
import Candidates from "./StatsComponents/candidates";
import CandidateSource from "./StatsComponents/candidateSources";
import TotalPurposes from "./StatsComponents/totalPurposes";
import useWindowWidth from "../../hooks/useWindowWidth";

type Props = {
  data: {
    totalAssessment: string;
    totalCandidates: string;
    totalCandidatesIncrement: string;
    whoAttempted: string;
    whoAttemptedIncrement: string;
    email: string;
    emailIncrement: string;
    socialShare: string;
    socialShareIncrement: string;
    uniqueLink: string;
    uniqueLinkIncrement: string;
    totalPurpose: string;
  };
};

// SECTIONS TO SHOW STATS
// TWO LAYOUTS OF STATS SECTION - LARGER SCREEN AND SMALLER SCREEN
// EXTRACTED VARIOUS STATS COMPONENTS SEPERATELY
export default function Statistics(props: Props) {
  const width = useWindowWidth();
  return (
    <div className="overflow-x-hidden">
      {width > 600 ? (
        <LargeScreenLayout data={props.data} />
      ) : (
        <SmallScreenLayout data={props.data} />
      )}
    </div>
  );
}

function LargeScreenLayout(props: Props) {
  const width = useWindowWidth();

  const className: string =
    width >= 1400
      ? "p-0 w-[80rem] mx-auto flex flex-wrap items-center border-2 rounded-lg my-2"
      : "p-0 w-[70vw] inline mx-auto flex flex-wrap sm:justify-between md:justify-start items-center border-2 rounded-lg my-2";

  return (
    <div className="mx-auto my-2 p-2">
      <section className="w-[100%] mx-auto">
        <h1 className="text-lg text-left w-[100%]">Assessments Overview</h1>
      </section>
      <div className={className}>
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
    </div>
  );
}

function SmallScreenLayout(props: Props) {
  return (
    <div id="analytics" className="w-[100%] analytics">
      <div className="border rounded-lg mx-auto w-[100%]">
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
  );
}
