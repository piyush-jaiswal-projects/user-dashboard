import React from 'react'

export default function Submit(props: {
    onSubmit: (e: any) => void
}) {
    return (
        <div className="shadow-3xl border-t-2 flex justify-center p-1 py-4">
        <button
          className="w-[90%] h-[50px] border border-[#1C4980] text-white font-bold 
          hover:text-[#0073E6] bg-[#0073E6] hover:bg-white rounded-lg p-2"
          onClick={(e) => props.onSubmit(e)}
        >
          Save
        </button>
      </div>
    )
}