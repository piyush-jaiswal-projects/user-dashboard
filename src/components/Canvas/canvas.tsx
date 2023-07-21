import React, {useContext} from 'react'
import { Dashboard, Assessment, Library, RoundStatus } from '..'
import { ViewContext } from '../../App'

export default function Canvas() {
    const context = useContext(ViewContext)

    return (
        <div className='md:w-[78%] lg:w-[88%] h-[95vh]'>
            {context?.view === "Dashboard" && <Dashboard />}
            {context?.view === "Assessment" && <Assessment />}
            {context?.view === "My Library" && <Library />}
            {context?.view === "Round Status" && <RoundStatus />}
        </div>
    )
}