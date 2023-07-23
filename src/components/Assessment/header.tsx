import React from 'react'
import useWindowWidth from '../../hooks/useWindowWidth'
import MenuButton from '../Navigation/menuButton'

export default function Header(props: {
    changeAssessment: () => void
}) {
    const width = useWindowWidth()

    return (
        <div className='w-[100vw] md:w-[100%] flex flex-col md:flex-row items-center justify-start md:h-[80px] border-b-2'>
            
            <div className='border-r-2 h-[70%] w-[100%] md:w-auto flex justify-start items-center mx-2 p-2'>
                {width < 768 && <MenuButton />}
                <h1 className='text-lg ml-4 font-semibold'>Assessment</h1>
            </div>

            <div className='flex flex-row h-[100%]'>
            <div id='my-assessment' onClick={props.changeAssessment}
                className='selected-assessment cursor-pointer h-[100%] flex items-center mx-2 p-2'>
                <h1 className='text-md md:text-md'>My Assessments</h1>
            </div>

            <div id='unstop-assessment' onClick={props.changeAssessment}
                className='cursor-pointer h-[100%] flex items-center mx-2 p-2'>
                <h1 className='text-md md:text-md'>Unstop Assessments</h1>
            </div>
            </div>
        </div>
    )
}