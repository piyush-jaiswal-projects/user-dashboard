import React, {useState} from 'react'
import { CloseIcon } from '../../assets/icons'

type TimeFormat = `${string}:${string}:${string}`;

type Assessment = {
    name: string,
    purpose: string,
    description: string,
    skill: string,
    skillList: string[],
    duration: TimeFormat
}

export default function Form() {

    const [newAssessment, setAssessment] = useState<Assessment>({
        name: "Type Here",
        purpose: "",
        description: "",
        skill: "Type Here",
        skillList: [],
        duration: "HH:MM:SS"
    })

    return (
        <div id="form" className='absolute z-50 hidden w-[100vw] h-screen bg-gray-900 bg-opacity-25'>
            <div className='bg-white shadow-lg min-h-[700px] mx-auto my-3
            w-[90%] sm:w-[70%] md:w-[55%] lg:w-[45%] rounded-lg'>
            <div>
                <h1>Create new assessment</h1>
                <button
                        onClick={() => {
                            document.getElementById("form")?.classList.add("hidden")
                        }}>
                    <img src={CloseIcon} alt="close" />
                </button>
            </div>

            <form>

                <label htmlFor='name'>Name of assessment</label>
                <input
                    type='text'
                    name='name'
                    value={newAssessment.name}
                    onChange={(e) => {
                        setAssessment({...newAssessment, [e.target.name]: e.target.value})
                    }}
                />

                <label htmlFor='purpose'>Purpose of the test is</label>
                <select
                    name='purpose'
                    placeholder='Select'
                    value={newAssessment.purpose}
                    onChange={(e) => {
                        setAssessment({...newAssessment, [e.target.name]: e.target.value})
                    }}
                >
                    <option>Job</option>
                    <option>Intern</option>
                </select>

                <label htmlFor='description'>Description</label>
                <select
                    name='description'
                    placeholder='Select'
                    value={newAssessment.description}
                    onChange={(e) => {
                        setAssessment({...newAssessment, [e.target.name]: e.target.value})
                    }}
                >
                    <option>Desc 1</option>
                    <option>Desc 1</option>
                </select>

                <label htmlFor='skill'>Skills</label>
                <div>
                    <canvas>

                    </canvas>
                    <input
                    type='text'
                    name='skill'
                    value={newAssessment.skill}
                    onChange={(e) => {
                        setAssessment({...newAssessment, [e.target.name]: e.target.value})
                    }}
                />
                </div>

                <label htmlFor='duration'>Duration of assessment</label>
                <input
                    type='text'
                    name='duration'
                    value={newAssessment.duration}
                    onChange={(e) => {
                        setAssessment({...newAssessment, [e.target.name]: e.target.value})
                    }}
                />

                <div>
                    <button
                        className=''
                        type='submit'>
                        Save
                    </button>
                </div>

            </form>
        </div>
        </div>
    )
}