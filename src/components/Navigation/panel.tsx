import React from 'react'
import {navItems, adminItem} from '../../data/navigationData'
import Card from './card'
import useWindowWidth from '../../hooks/useWindowWidth'

interface Props {
    handler: (newView: string) => void;
  }

export default function Panel(props: Props) {
    const width = useWindowWidth()

    return (
        <div className='w-[100%] md:w-[20%] lg:w-[10%] bg-white h-[100%] py-0 px-2'>

            <div className='w-[100%] mx-auto'>
            {navItems.map((item) => {
                return ( <Card clickHandler={props.handler} key={item.title} data={item} />)
            })}
            </div>

                
            {width < 768 &&
                <div className='border-t-2 border-dotted w-[80%] flex justify-between items-center
                text-center mx-auto py-2'>
                        <Card clickHandler={props.handler} data={adminItem} />
                      <div
                            className='bg-[#FBEBEA] text-[#D63500] border-[#D63500] 
                            w-[30%] border text-center rounded-3xl '>
                            Admin
                        </div>  
                    </div>}

                
            {width >= 768 &&    
                <div className='border-t-2 border-dotted flex justify-center flex-wrap 
                    w-[100%] md:w-[80%] text-center mx-auto py-2'>
                    <div
                        className='bg-[#FBEBEA] text-[#D63500] border-[#D63500] 
                         w-[60%] border text-center text-sm rounded-3xl mt-4 my-2'>
                        Admin
                    </div>
                    <Card clickHandler={props.handler} data={adminItem} />
                </div>}
            
        </div>
    )
}