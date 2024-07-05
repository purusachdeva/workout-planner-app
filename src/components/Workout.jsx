import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExerciseCard from './ExerciseCard'

export default function Workout(props) {
    const { workout } = props
    return (
        <SectionWrapper id={'workout'} header={"welcome to"} title={['The', 'DANGER', 'zone']}>
            <div className='flex flex-col gap-4'>
                {workout.map((exercise, i) => {
                    return (
                        <ExerciseCard i={i} exercise={exercise} key={i} />
                    )
                })}
            </div>

            {/* <div className='flex items-center justify-center'>
                <button className='flex items-center justify-center border-[1.5px] border-solid border-blue-900 gap-2 px-4 py-2 rounded-md bg-slate-900 hover:bg-slate-950'>
                    <p className='text-lg'>Share</p>
                    <i className='fa-solid fa-envelope'></i>
                </button>
            </div> */}
        </SectionWrapper>
    )
}