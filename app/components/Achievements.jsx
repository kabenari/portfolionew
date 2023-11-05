"use client";
import React from 'react'
import dynamic from 'next/dynamic';


const animatednumbers = dynamic(()=>{return import ("react-animated-numbers")}, {ssr:false}   );


const Achievement = [
    {
        metric:"Projects",
        value:"10",
    },
    {
        metric:"Users",
        value:"1",
    },
    {
        metric:"Clubs",
        value:"I & E CELL",
    },
    {
        metric:"Years",
        value:"0.3",
    },
    
];



const Achievements = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm-py16 xl:px-16'>
        <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-row items-center justify-between">
        {Achievement.map((Achievement,Index)=>{
            return(
                <div key={Index} className='flex flex-col items-center mx-4'>
                    <h2 className='text-white text-4xl font-bold'>{Achievement.value}</h2>
                <p className='text-base text-[#ADB7BE]'>{Achievement.metric}</p>

                </div>
            )
        })}
        </div>

    </div>
    
  )
}

export default Achievements
