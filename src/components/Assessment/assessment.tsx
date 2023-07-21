import React from 'react'
import useWindowWidth from '../../hooks/useWindowWidth'
import { MenuIcon } from '../../assets/icons'

export default function Assessment() {
    const width = useWindowWidth()

    return (
        <div className='w-[100%]'>
            <span>{width<768 && <MenuButton />} Assessment</span>
        </div>
    )
}

function MenuButton() {
    const handleClick = () => {
        document.getElementById("menu")?.classList.toggle("hidden")
    }
    
    return (
        <div
            onClick={handleClick}
            className='cursor-pointer'>
            <img src={MenuIcon} alt="Menu" />
        </div>
    )
}