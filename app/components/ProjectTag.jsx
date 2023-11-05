import React from 'react'

const ProjectTag = ({name , onClick , isSelected}) => {

    const buttonstyles = isSelected ? "text-white border-blue-600" : "text-[#ADB7BE] border-slate-600 hover:border-white"

  return (
    <button className={`rounded-full border-2 ${buttonstyles} px-6 py-3 text-xl cursor-pointer`} onClick={()=>
        onClick(name)}>{name}</button>
  )
}

export default ProjectTag;
