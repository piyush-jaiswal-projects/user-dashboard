import React, {useContext} from 'react'
import { Dashboard, Assessment, Library, RoundStatus } from '..'
import { ViewContext } from '../../App'

export default function Canvas() {
    const context = useContext(ViewContext)

    return (
        <>
            {context?.view === "Dashboard" && <Dashboard />}
            {context?.view === "Assessment" && <Assessment />}
            {context?.view === "My Library" && <Library />}
            {context?.view === "Round Status" && <RoundStatus />}
        </>
    )
}