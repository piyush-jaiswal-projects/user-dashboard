import React, { useContext, useEffect} from 'react'
import { ViewContext } from '../../App'

type Link = {
    image: string,
    title: string
}

type Props = {
    data: Link,
    clickHandler: (newView: string) => void
}

export default function Card(props: Props) {

    var context = useContext(ViewContext)
    
    useEffect(() => {
        if (context?.view === props.data.title) {
            document.getElementById(props.data.title)?.classList.add("navcard-active")
        }
        else {
            document.getElementById(props.data.title)?.classList.remove("navcard-active")
        }
        //eslint-disable-next-line
    }, [context])

    const navigateItem = () => {
        props.clickHandler(props.data.title);
    }

    return (
        <div
            id={props.data.title}
            onClick={navigateItem}
            className='flex cursor-pointer my-3 md:flex-col text-left
            items-center md:justify-center md:text-center p-1 mx-auto w-[80%] md:h-[90px]'>
            <img
                className='mr-2 md:mx-auto'
                src={props.data.image}
                alt={props.data.title} />
            
            <p className='text-[1rem] lg:text-[1.2vw]'>
                {props.data.title}
            </p>
        </div>
    )
}