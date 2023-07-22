import React from "react";
import Overview from "./overview";
import Panel from "./panel";
import { myAssessmentData, unstopAssessmentData } from "../../data/assessment";

export default function View(props: { currAssessment: string }) {
  return (
    <>
      {props.currAssessment === "my" ? (
        <div className="w-[100vw] md:w-[100%]">
          <Overview data={myAssessmentData} />
          <Panel title="My Assessment" view={props.currAssessment} />
        </div>
      ) : (
        <div className="w-[100vw] md:w-[100%]">
                      <Overview data={unstopAssessmentData} />
                       <Panel title="Unstop Assessment" view={props.currAssessment} />
        </div>
      )}
    </>
  );
}
