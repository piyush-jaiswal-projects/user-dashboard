import React from 'react'


export default function Menu(props: any) {

    return (
        <div id='menu' className='absolute z-30 hidden bg-gray-400 w-[100vw] min-h-screen'>
            <div className='w-[90%] sm:w-[70%] min-h-screen bg-white flex justify-between'>
                <h1>Menu</h1>
                <button
                    onClick={() => { document.getElementById("menu")?.classList.toggle("hidden") }}>
                    Close
                </button>
            </div>
            {props.children}
        </div>
    )
}