import React, { useState } from "react";
import { CloseIcon } from "../../assets/icons";

type Assessment = {
  name: string;
  purpose: string;
  description: string;
  skill: string;
  skillList: string[];
  duration: string;
};

export default function Form() {
  const [newAssessment, setAssessment] = useState<Assessment>({
    name: "",
    purpose: "",
    description: "",
    skill: "",
    skillList: [
      "UI/UX and Design",
      "No of Question",
      "Web Development",
      "UI/UX and Design",
      "Web Development",
    ],
    duration: "",
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(newAssessment);
  };

  const deleteSkill = (skill: string) => {
    const newSkillList: string[] = newAssessment.skillList.filter(
      (item) => item !== skill
    );
    setAssessment({
      ...newAssessment,
      skillList: newSkillList,
    });
  };

  const addSkill = (skill: string) => {
    setAssessment({
      ...newAssessment,
      skillList: [...newAssessment.skillList, skill],
      skill: "",
    });
  };

  return (
    <div
      id="form"
      className="absolute z-40 hidden w-[100vw] h-screen bg-gray-900 bg-opacity-25"
    >
      <div
        className="bg-white z-50 shadow-lg h-[auto] mx-auto my-3 p-3
            w-[90%] sm:w-[70%] md:w-[55%] lg:w-[45%] rounded-lg"
      >
        <header className="flex justify-between items-center w-[90%] mx-auto border-b-2 h-[60px]">
          <h1 className="text-lg md:text-2xl font-semibold">
            Create new assessment
          </h1>
          <button
            onClick={() => {
              document.getElementById("form")?.classList.add("hidden");
            }}
          >
            <img className="w-[30px]" src={CloseIcon} alt="close" />
          </button>
        </header>

        <div className="w-[90%] mx-auto flex flex-col mt-1">
          <div className="mb-2">
            <label htmlFor="name" className="w-[100%]">
              Name of assessment
            </label>
            <input
              type="text"
              placeholder="Type Here"
              className="w-[100%] h-[50px] border border-[#1C4980] rounded-lg mb-2 p-2"
              name="name"
              value={newAssessment.name}
              onChange={(e) => {
                setAssessment({
                  ...newAssessment,
                  [e.target.name]: e.target.value,
                });
              }}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="purpose" className="w-[100%]">
              Purpose of the test is
            </label>
            <select
              className="w-[100%] h-[50px] border border-[#1C4980] rounded-lg mb-2 p-2"
              name="purpose"
              value={newAssessment.purpose}
              onChange={(e) => {
                setAssessment({
                  ...newAssessment,
                  [e.target.name]: e.target.value,
                });
              }}
            >
              <option>Select</option>
              <option>Job</option>
              <option>Intern</option>
            </select>
          </div>

          <div className="mb-2">
            <label htmlFor="description" className="w-[100%]">
              Description
            </label>
            <select
              className="w-[100%] h-[50px] border border-[#1C4980] rounded-lg mb-2 p-2"
              name="description"
              value={newAssessment.description}
              onChange={(e) => {
                setAssessment({
                  ...newAssessment,
                  [e.target.name]: e.target.value,
                });
              }}
            >
              <option>Select</option>
              <option>Desc 1</option>
              <option>Desc 2</option>
            </select>
          </div>

          <div className="mb-2">
            <label htmlFor="skill">Skills</label>
            <div className="border rounded-lg border-[#1C4980]">
              <div
                id="skillCanvas"
                className="h-[120px] p-2 overflow-scroll flex justify-left flex-wrap "
              >
                {newAssessment.skillList.map((skill, index) => {
                  return (
                    <SkillWidget
                      key={"skill-" + index}
                      title={skill}
                      delSkill={deleteSkill}
                    />
                  );
                })}
              </div>
              <div className="border-t border-[#1C4980] rounded-b-lg">
                <input
                  type="text"
                  name="skill"
                  className="w-[90%] h-[50px] p-1 rounded-b-lg outline-none"
                  placeholder="Type Here"
                  value={newAssessment.skill}
                  onChange={(e) =>
                    setAssessment({
                      ...newAssessment,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                <button
                  className="w-[10%]"
                  onClick={() => {
                    addSkill(newAssessment.skill);
                  }}
                >
                  ADD
                </button>
              </div>
            </div>
          </div>

          <div className="mb-2">
            <label htmlFor="duration" className="w-[100%]">
              Duration of assessment
            </label>
            <input
              type="text"
              name="duration"
              className="w-[100%] h-[50px] border border-[#1C4980] rounded-lg mb-2 p-2"
              placeholder="HH:MM:SS"
              value={newAssessment.duration}
              onChange={(e) => {
                setAssessment({
                  ...newAssessment,
                  [e.target.name]: e.target.value,
                });
              }}
            />
          </div>

          <div>
            <button
              className="w-[100%] h-[50px] border border-[#1C4980] text-white font-bold hover:text-[#0073E6] 
                           bg-[#0073E6] hover:bg-white rounded-lg mb-2 p-2"
              onClick={(e) => onSubmit(e)}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

type Skill = {
  title: string;
  delSkill: (skill: string) => void;
};

function SkillWidget(props: Skill) {
  return (
    <span className="bg-[#DDEDFF] p-2 m-[5px] flex justify-between min-w-auto h-[40px] items-center rounded-2xl">
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
