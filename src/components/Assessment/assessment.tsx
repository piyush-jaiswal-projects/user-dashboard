import React, { useState } from 'react'
import Header from './header'
import View from './view';

export default function Assessment() {

    const [currAssessment, setAssessment] = useState("my");

    const changeAssessmentType = () => {
        const myAssessElement = document.getElementById("my-assessment")
        const unstopAssessElement = document.getElementById("unstop-assessment")
        
        if (myAssessElement?.classList.contains("selected-assessment")) {
            setAssessment("unstop")
        }
        else if(unstopAssessElement?.classList.contains("selected-assessment")) {
            setAssessment("my")
        }

        myAssessElement?.classList.toggle("selected-assessment")
        unstopAssessElement?.classList.toggle("selected-assessment")
    }

    return (
            <div className='w-[100vw] md:w-[100%] bg-white text-center my-1 rounded-3xl'>
            <Header changeAssessment={changeAssessmentType} />
            <View currAssessment={currAssessment} />
            </div>
    )
}