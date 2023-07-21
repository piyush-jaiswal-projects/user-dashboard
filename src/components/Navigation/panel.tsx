import React from 'react'
import {navItems, adminItem} from '../../data/navigationData'
import Card from './card'

interface Props {
    handler: (newView: string) => void;
  }

export default function Panel(props: Props) {
    return (
        <div className='w-[100%] md:w-[20%] lg:w-[11%] bg-white h-[100%] py-7 px-2'>

            <div className='w-[100%] mx-auto'>
            {navItems.map((item) => {
                return (
                    <div>
                        <Card clickHandler={props.handler} key={item.title} data={item} />
                    </div>
                )
            })}
            </div>

            <div className='border-t-2 border-dotted flex justify-center flex-wrap w-[80%] text-center mx-auto py-2'>
                <div
                    className='bg-[#FBEBEA] text-[#D63500] border-[#D63500] 
                    w-[80%] border p-1 text-center rounded-3xl '>
                    Admin
                </div>
                <Card clickHandler={props.handler} data={adminItem} />
            </div>
            
        </div>
    )
}