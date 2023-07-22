import React, { ChangeEvent } from "react";
import SkillWidget from "./skillWidget";

type Props = {
  skillList: string[];
  skill: string;
  name: string;
  placeholder: string;
  delSkill: (skill: string) => void;
  addSkill: (skill: string) => void;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function SkillCanvas(props: Props) {
  return (
    <div className="mb-2">
      <label htmlFor="skill">Skills</label>
      <div className="border rounded-lg border-[#1C4980]">
        <div
          id="skillCanvas"
          className="h-[120px] p-2 overflow-scroll flex justify-left flex-wrap "
        >
          {props.skillList.map((skill, index) => {
            return (
              <SkillWidget
                key={"skill-" + index}
                title={skill}
                delSkill={props.delSkill}
              />
            );
          })}
        </div>
        <div className="border-t border-[#1C4980] rounded-b-lg flex sm:justify-between">
          <input
            type="text"
            name={props.name}
            className="w-[85%] h-[50px] p-1 rounded-b-lg outline-none"
            placeholder={props.placeholder}
            value={props.skill}
            onChange={(e) => props.changeHandler(e)}
          />
          <button
            className="w-[10%]"
            onClick={() => {
              props.addSkill(props.skill);
            }}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
