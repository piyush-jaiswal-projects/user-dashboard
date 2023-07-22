import React, { useState, ChangeEvent } from "react";

import TextInput from "./textInput";
import Select from "./select";
import SkillCanvas from "./skillCanvas";
import Submit from "./submit";

type Assessment = {
  name: string,
  purpose: string,
  description: string,
  skill: string,
  skillList: string[],
  duration: string
};

export default function FormFields() {
  const [newAssessment, setAssessment] = useState<Assessment>({
    name: "",
    purpose: "",
    description: "",
    skill: "",
    skillList: ["UI/UX and Design", "No of Question", "Web Development"],
    duration: "",
  });

  const saveAssessment = (e: any) => {
    e.preventDefault();
    console.log(newAssessment);
    alert(newAssessment)
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAssessment({
      ...newAssessment,
      [e.target.name]: e.target.value,
    });
  }

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAssessment({
      ...newAssessment,
      [e.target.name]: e.target.value,
    });
  }

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
    <div className="w-[100%]">
      <div className="w-[90%] mx-auto flex flex-col mt-1 p-1">
        <TextInput
          title="name"
          text="Name of assessment"
          placeholder="Type Here"
          value={newAssessment.name}
          changeHandler={onInputChange}
        />

        <Select
          title="purpose"
          text="Purpose of the test is"
          value={newAssessment.purpose}
          changeHandler={onSelectChange}
        >
          <option>Select</option>
          <option>Job</option>
          <option>Intern</option>
        </Select>

        <Select
          title="description"
          text="Description"
          value={newAssessment.description}
          changeHandler={onSelectChange}
        >
          <option>Select</option>
          <option>Description 1</option>
          <option>Description 2</option>
        </Select>

        <SkillCanvas
          skillList= {newAssessment.skillList}
          skill= {newAssessment.skill}
          name= "skill"
          placeholder= "Type Here"
          delSkill= {deleteSkill}
          addSkill= {addSkill}
          changeHandler= {onInputChange}
        />

        <TextInput
          title="duration"
          text="Duration"
          placeholder="HH:MM:SS"
          value={newAssessment.duration}
          changeHandler={onInputChange}
        />

        <Submit
          onSubmit={saveAssessment}
        />

      </div>
    </div>
  );
}
