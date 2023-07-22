import React, {ChangeEvent, ReactNode} from 'react'

type select = {
    title: string;
    text: string;
  value: string;
    changeHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
  children: ReactNode
}

export default function Select(props: select) {
    return (
        <div className="mb-2">
          <label htmlFor={props.title} className="w-[100%]">
            {props.text}
          </label>
          <select
            className="w-[100%] h-[50px] border border-[#1C4980] rounded-lg mb-2 p-2"
            name={props.title}
            value={props.value}
                onChange={(e) => {
                    props.changeHandler(e)
                }}
            >
                {props.children}
          </select>
        </div>
    )
}