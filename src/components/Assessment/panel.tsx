import React from 'react'
import { PlusIcon } from '../../assets/icons';
import AssessCard from './assessCard';
import { myAssessCardInfo, unstopAssessCardInfo } from '../../data/assessCard';

export default function Panel(props: {
  title: string;
  view: string;
}) {

  const cardInfoArray = props.view === "my" ? myAssessCardInfo : unstopAssessCardInfo

    return (
      <div className="w-[100vw] md:w-[100%] mx-auto p-2">
        <section className="w-[90%]">
          <h1 className="text-2xl text-left w-[100%]">{props.title}</h1>
        </section>

        <div className="flex justify-center items-center lg:justify-start flex-wrap m-2">
          <div
            className="flex flex-col justify-center mx-auto sm:mx-[20px] my-[10px] items-center w-[30rem] sm:w-[23rem] h-[13rem] border border-dashed bg-[#F6F8FA] 
                rounded-lg p-3">
            <div
              className="rounded-full cursor-pointer bg-white w-[50px] h-[50px] flex justify-center items-center"
              onClick={() => {
                document.getElementById("form")?.classList.remove("hidden");
              }}
            >
              <img src={PlusIcon} alt="+" />
            </div>
            <h1 className="font-semibold text-xl">New Assessment</h1>
            <p className="text-sm">
              From here you can add questions of multiple types like MCQs,
              subjective (text or paragraph)!
            </p>
                </div>
                
          {cardInfoArray.map((item) => {
            return (
                <AssessCard data={item} />
              )
            })}
        </div>
      </div>
    );
}