import React, { ChangeEvent } from "react";

type Input = {
  title: string;
  text: string;
  placeholder: string;
  value: string;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

// INPUT TEXT
export default function TextInput(props: Input) {
  return (
    <div className="mb-2">
      <label htmlFor={props.title} className="w-[100%]">
        {props.text}
      </label>
      <input
        type="text"
        placeholder={props.placeholder}
        className="w-[100%] h-[50px] border border-[#1C4980] rounded-lg mb-2 p-2"
        name={props.title}
        value={props.value}
        onChange={(e) => {
          props.changeHandler(e);
        }}
      />
    </div>
  );
}
