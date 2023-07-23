import React from 'react'
import { AnalyticsIcon, FunnelIcon, PlusIcon, SearchIcon } from '../../assets/icons';
import AssessCard from './assessCard';
import { myAssessCardInfo, unstopAssessCardInfo } from '../../data/assessCard';
import useWindowWidth from '../../hooks/useWindowWidth';

export default function Panel(props: {
  title: string;
  view: string;
}) {

  const cardInfoArray = props.view === "my" ? myAssessCardInfo : unstopAssessCardInfo
  const width = useWindowWidth()

  const openAnalytics = () => {
    document.getElementById("analytics")?.classList.toggle("slidedown")
    document.getElementById("analytics-btn")?.classList.toggle("clicked")
  }

    return (
      <div className="mx-auto p-2">
        <section className="w-[90%] md:w-[100%] mx-auto flex md:block justify-between">
          <h1 className="text-lg text-left w-[100%] md:ml-3">{props.title}</h1>
          {width <= 600 && 
            <div className='flex justify-center items-center'>
              <img className='p-1' src={SearchIcon} alt="" />
              <img className='p-1' src={FunnelIcon} alt="" />
              <img
                onClick={openAnalytics}
                id="analytics-btn"
                className='cursor-pointer rounded-full p-1'
                src={AnalyticsIcon} alt="" />
            </div>
          }
        </section>

        <div className="flex justify-center items-center lg:justify-start flex-wrap m-2">
          <div
            className="flex flex-col justify-center mx-auto sm:mx-[20px] my-[10px] items-center w-[30rem] sm:w-[23rem] h-[13rem] border border-dashed bg-[#F6F8FA] 
                rounded-lg p-3">
            <div
              className="rounded-full cursor-pointer bg-white w-[50px] h-[50px] flex justify-center items-center"
              onClick={() => {
                document.getElementById("form")?.classList.remove("hidden")
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