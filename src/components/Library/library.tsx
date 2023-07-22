import React from 'react'
import useWindowWidth from '../../hooks/useWindowWidth'
import MenuButton from '../Navigation/menuButton'

export default function Library() {
    const width = useWindowWidth()
    return (
        <div className='w-[100%] bg-white text-center my-1 rounded-3xl'>
            <span>
                {width < 768 && <MenuButton />}
                <h1 className='text-[#0073E6] text-3xl m-2'>LIBRARY</h1>
            </span>
        </div>
    )
}