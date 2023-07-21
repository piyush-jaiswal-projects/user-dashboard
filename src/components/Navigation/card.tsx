import React, { useContext} from 'react'
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
    
    if (context?.view === props.data.title) {
        document.getElementById(props.data.title)?.classList.add("navcard-active")
    }
    else {
        document.getElementById(props.data.title)?.classList.remove("navcard-active")
    }

    const navigateItem = () => {
        props.clickHandler(props.data.title);
    }

    return (
        <div
            id={props.data.title}
            onClick={navigateItem}
            className='inline-flex md:flex cursor-pointer my-3 flex-col items-center justify-center text-center p-1 mx-auto w-[90%] h-[80px]'>
            <img
                className='mx-auto'
                src={props.data.image}
                alt={props.data.title} />
            
            <p className='text-[1rem]'>
                {props.data.title}
            </p>
        </div>
    )
}