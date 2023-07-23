import React from "react";
import Header from "./header";
import FormFields from "./formFields";

export default function Form() {
  return (
    <div
      id="form"
      className="absolute z-40 hidden w-[100vw] h-screen bg-gray-900 bg-opacity-60"
    >
      <div
        className="bg-white z-50 absolute md:relative bottom-0 md:bottom-0 shadow-lg overflow-hidden 
        max-h-[85vh] md:max-h-0 md:min-h-[98vh] sm:h-[100vh] mx-[0] sm:mx-[15%] md:mx-auto sm:my-[0.5vw] 
        w-[100%] sm:w-[70%] md:w-[50%] min-[1000px]:w-[40%] min-[1200px]:w-[35%] rounded-t-3xl sm:rounded-3xl"
      >
        <Header />
        <FormFields />
      </div>
    </div>
  );
}
