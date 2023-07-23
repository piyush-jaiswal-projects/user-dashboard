import React from "react";
import {
  AssessIcon,
  CalendarIcon,
  ClockIcon,
  OptionsIcon,
  UrlIcon,
} from "../../assets/icons";
import useWindowWidth from "../../hooks/useWindowWidth";

type Props = {
  data: {
    title: string;
    purpose: string;
    date: string;
    duration: string;
    question: string;
    sharedList: string[];
  };
};

export default function AssessCard(props: Props) {
    const width = useWindowWidth()

    const className = width > 1020 ?
        "flex flex-col justify-center items-center w-[23rem] h-[13rem] border mx-[20px] rounded-lg p-3 my-[10px]" 
    : 
    "flex flex-col justify-center items-center w-[30rem] md:w-[23rem] h-[9rem] border md:mx-[20px] rounded-lg p-3 my-[10px]"
    
  return (
    <div
      className={className}
    >
      <div className="flex justify-between items-center w-[100%]">
              <img src={AssessIcon} alt="" />
              {width <= 1020 &&
                  <CardBody
                  title={props.data.title}
                  purpose={props.data.purpose}
                  date={props.data.date}
                  type="small"
              />
              }
        <img className="cursor-pointer" src={OptionsIcon} alt="Options" />
      </div>

          {width > 1020 &&
              <CardBody
                  title={props.data.title}
                  purpose={props.data.purpose}
              date={props.data.date}
              type="large"
          />
          }

      <div className="border-t border-dashed w-[100%] flex justify-between py-2 items-center">
        <div className="flex justify-start items-center">
          <div className="flex flex-col justify-center items-start mr-2">
            <p className="text-md font-bold">{props.data.duration}</p>
            <label className="text-sm">Duration</label>
          </div>
          <div className="flex flex-col justify-center items-start">
            <p className="text-md font-bold">{props.data.question}</p>
            <label className="text-sm">Questions</label>
          </div>
        </div>

        <div className="flex justify-start items-center">
          <div className="cursor-pointer flex justify-center items-center w-auto border p-1 rounded-2xl">
            <img src={UrlIcon} alt="link" />
            <p className="mx-1">Share</p>
          </div>
          <div className="flex justify-center items-center w-[50px] ml-2">
            {props.data.sharedList.map((item, index) => {
              return (
                <div
                  key={item + "-" + index}
                  className="bg-[purple] w-[40px] h-[40px] text-md font-semibold text-white flex justify-center items-center rounded-full"
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function CardBody(props: {
    title: string;
    purpose: string;
    date: string;
    type: string;
}) {
    const className = props.type === "large" ? "w-[100%] my-1 mb-4" : "w-[100%] mx-2 my-1 mb-4"
    return (
        <div className={className}>
        <h1 className="w-[100%] text-left font-semibold text-lg">
          {props.title}
        </h1>
        <div className="flex justify-start items-center">
          <p className="text-sm text-left font-semibold border-r pr-2">
            {props.purpose}
          </p>
          <img className="mx-2" src={props.type === "large" ? CalendarIcon : ClockIcon} alt="Date" />
          <p className="text-gray text-sm">{props.date}</p>
        </div>
          </div>
    )
}
