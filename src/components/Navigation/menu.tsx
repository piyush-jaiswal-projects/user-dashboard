import React from 'react'


export default function Menu(props: any) {

    return (
        <div id='menu' className='absolute z-30 hidden bg-gray-300 w-[100vw] min-h-screen'>
            <div className='w-[90%] sm:w-[70%] min-h-screen bg-white'>

                <div className='w-[100%] h-[15vw] px-4 pt-5 flex justify-between items-center'>
                <h1 className='text-xl'>Menu</h1>
                <button
                        onClick={() => {
                            document.getElementById("menu")?.classList.add("close-menu")
                        }}>
                    close
                </button>
                </div>
                        
            {props.children}
            </div>
        </div>
    )
}