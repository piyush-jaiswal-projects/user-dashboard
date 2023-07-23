import React, { useState, ChangeEvent } from "react";

import TextInput from "./textInput";
import Select from "./select";
import SkillCanvas from "./skillCanvas";
import Submit from "./submit";

type Assessment = {
  name: string;
  purpose: string;
  description: string;
  skill: string;
  skillList: string[];
  duration: string;
};

// VARIOUS FORM FUNCTIONS
// EXTRACTED VARIOUS FIELDS AND SECTIONS AS SEPERATE COMPONENTS

export default function FormFields() {
  const [newAssessment, setAssessment] = useState<Assessment>({
    name: "",
    purpose: "Select",
    description: "Select",
    skill: "",
    skillList: ["UI/UX and Design", "No of Question", "Web Development"],
    duration: "",
  });

  const validateForm = (): string => {
    if (newAssessment.name.length === 0) return "Please enter Name";
    else if (newAssessment.purpose === "Select") return "Please select Purpose";
    else if (newAssessment.description === "Select") return "Please select Description";
    else if (newAssessment.skillList.length === 0) return "Please enter Skills";
    else if (newAssessment.duration === "") return "Please set Duration";
    else return "Valid";
  };

  const saveAssessment = (e: any) => {
    e.preventDefault();
    const msg = validateForm();
    if (msg === "Valid") {
      console.log(newAssessment);
      document.getElementById("form")?.classList.add("hidden");
      alert("Form Saved");
    } else {
      alert(msg);
    }
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAssessment({
      ...newAssessment,
      [e.target.name]: e.target.value,
    });
  };

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAssessment({
      ...newAssessment,
      [e.target.name]: e.target.value,
    });
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
    <div className="w-[95%] mx-auto flex flex-col mt-1 p-1">
      <div className="h-[55vh] sm:h-[65vh] md:h-[78vh] overflow-scroll">
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

        {/* SECTION TO ADD AND SHOW SKILLS DYNAMICALLY */}
        <SkillCanvas
          skillList={newAssessment.skillList}
          skill={newAssessment.skill}
          name="skill"
          placeholder="Type Here"
          delSkill={deleteSkill}
          addSkill={addSkill}
          changeHandler={onInputChange}
        />

        <TextInput
          title="duration"
          text="Duration"
          placeholder="HH:MM:SS"
          value={newAssessment.duration}
          changeHandler={onInputChange}
        />
      </div>

      <Submit onSubmit={saveAssessment} />
    </div>
  );
}
