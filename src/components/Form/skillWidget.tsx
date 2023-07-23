import React from "react";
import { CloseIcon } from "../../assets";

type Skill = {
  title: string;
  delSkill: (skill: string) => void;
};

// SKILL COMPONENT
export default function SkillWidget(props: Skill) {
  return (
    <span
      className="bg-[#DDEDFF] px-2 m-[2px]  md:m-[5px] flex justify-between 
        min-w-auto md:h-[40px] text-[3vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1.1vw] items-center rounded-3xl"
    >
      {props.title}
      <button
        onClick={() => {
          // DELETE CURRENT SKILL
          props.delSkill(props.title);
        }}
      >
        <img className="" src={CloseIcon} alt="close" />
      </button>
    </span>
  );
}
