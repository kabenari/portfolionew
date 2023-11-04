import React from 'react'
import {CodeBracketIcon , EyeIcon} from "@heroicons/react/24/outline";
import Link from 'next/link';

const ProjectCard = ({imageUrl,title,description,gitUrl,previewUrl}) => {
  return (
    <div>
        <div className='h-52 md:h-72 rounded-t-xl relative group' style={{background:`url(${imageUrl})`,backgroundSize:"cover"}}>

        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-60 transition-all duration-500">
            <Link href={gitUrl} className='h-14 w-14 mr-7 border-2 relative rounded-full border-[#ADB7BE] hover:border-white'>
                <CodeBracketIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2 text-white cursor-pointer"/>
            </Link>
            <Link href={previewUrl} className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white'>
                <EyeIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white cursor-pointer"/>
            </Link>
        </div>


        </div>
        <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
            <h5 className='text-xl font-semibold mb-2'>{title}</h5>
            <p className='text-[#ADB7BE]'>{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard
