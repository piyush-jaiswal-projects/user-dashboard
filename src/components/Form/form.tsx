import React from "react";
import Header from "./header";
import FormFields from "./formFields";

export default function Form() {
  return (
    <div
      id="form"
      className="absolute z-40 hidden w-[100vw] h-screen bg-gray-900 bg-opacity-25"
    >
      <div
        className="bg-white z-50 shadow-lg h-[auto] mx-auto my-3
            w-[90%] sm:w-[70%] md:w-[55%] lg:w-[45%] rounded-lg"
      >
        <Header />
        <FormFields />
      </div>
    </div>
  );
}
