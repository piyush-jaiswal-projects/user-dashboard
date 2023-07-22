import React from 'react'
import useWindowWidth from '../../hooks/useWindowWidth'
import { MenuIcon } from '../../assets/icons'

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

function MenuButton() {
    const handleClick = () => {
        const menu = document.getElementById("menu")
        menu?.classList.remove("close-menu")
        if (menu?.classList.contains("hidden")) {
            menu?.classList.remove("hidden")
        }
    }
    
    return (
        <div
            onClick={handleClick}
            className='cursor-pointer'>
            <img src={MenuIcon} alt="Menu" />
        </div>
    )
}