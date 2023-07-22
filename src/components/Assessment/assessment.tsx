import React from 'react'
import useWindowWidth from '../../hooks/useWindowWidth'
import MenuButton from '../Navigation/menuButton'

export default function Assessment() {
    const width = useWindowWidth()

    return (
            <div className='w-[100%]'>
            <span>{width < 768 && <MenuButton />} Assessment</span>
            <button onClick={() => {
                document.getElementById("form")?.classList.remove("hidden")
            }}>Open form</button>
            </div>
    )
}