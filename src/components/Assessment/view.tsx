import React from "react";
import {
  myAssessmentData,
  unstopAssessmentData,
} from "../../data/assessmentStats";
import Statistics from "./statistics";
import Container from "./container";

// RENDERING ASSESSMENT DATA BASED ON SELECTED VIEW
export default function View(props: { currAssessment: string }) {
  return (
    <div className="w-[100vw] md:w-[100%]">
      <Statistics
        data={
          props.currAssessment === "my"
            ? myAssessmentData
            : unstopAssessmentData
        }
      />
      <Container
        title={
          props.currAssessment === "my" ? "My Assessment" : "Unstop Assessment"
        }
        view={props.currAssessment}
      />
    </div>
  );
}
