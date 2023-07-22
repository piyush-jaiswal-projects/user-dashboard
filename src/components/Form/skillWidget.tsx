import React from "react";
import { CloseIcon } from "../../assets/icons";

type Skill = {
  title: string;
  delSkill: (skill: string) => void;
};

export default function SkillWidget(props: Skill) {
  return (
    <span
      className="bg-[#DDEDFF] p-2 m-[5px] flex justify-between 
        min-w-auto h-[40px] items-center rounded-2xl"
    >
      {props.title}
      <button
        onClick={() => {
          props.delSkill(props.title);
        }}
      >
        <img className="" src={CloseIcon} alt="close" />
      </button>
    </span>
  );
}
