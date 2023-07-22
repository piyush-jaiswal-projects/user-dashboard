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
        className="bg-white z-50 shadow-lg overflow-hidden h-[85vh] sm:h-[auto] mx-auto mt-[20vw] sm:mt-[1vw]
            w-[90%] sm:w-[70%] md:w-[55%] lg:w-[45%] rounded-lg"
      >
        <Header />
        <FormFields />
      </div>
    </div>
  );
}
