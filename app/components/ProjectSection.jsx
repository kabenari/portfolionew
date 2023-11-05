"use client";
import React ,{useState} from 'react'
import ProjectCard from './ProjectCard'
import { TypeAnimation } from 'react-type-animation'
import ProjectTag from './ProjectTag';


const projectData = [
    {
        id:1,
        title:"Decentralised Twitter",
        description : "Twitter on Blockchain",
        image:"/images/projects/dapp.png",
        tag:["All" , "Blockchain"],
        gitUrl:"/",
        previewurl:"/",
    },
    {
        id:2,
        title:"Ecommrce Store",
        description : "Ecom store",
        image:"/images/projects/ecom.png",
        tag:["All" , "Web"],
        gitUrl:"/",
        previewurl:"/",

    },
    {
        id:3,
        title:"PortFolio on React",
        description : "My very Own Portfolio On React",
        image:"/images/projects/portfolio.png",
        tag:["All" , "Web"],
        gitUrl:"/",
        previewurl:"/",
    },
    {
        id:4,
        title:"Parallax Website",
        description : "Parallax Website Using Vanilla JS",
        image:"/images/projects/paralax.png",
        tag:["All" , "Web"],
        gitUrl:"/",
        previewurl:"/",
    },
    {
        id:5,
        title:"spotify Clone",
        description : "Clone of spotify",
        image:"/images/projects/spotify.png",
        tag:["All" , "Web"],
        gitUrl:"/",
        previewurl:"/",
    },
    
]

const ProjectSection = () => {

    const[Tag , setTag] = useState("All");

    const handletagchange = (newTag)=>{
        setTag(newTag);
    };

    const filter = projectData.filter((project)=>
        project.tag.includes(Tag)
    );



  return (
    <>
    {/* <h2 className='text-center text-4xl font-bold text-white mb-7 '>My Projects</h2> */}

    <h2 className='text-center text-4xl font-bold text-white mb-7 '>
    <TypeAnimation className='text-center text-4xl font-bold text-white mb-7 '
        sequence={[
            'Blockchain Projects',
            1000,
            'Web Projects',
            1000
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
    />
    </h2>
    <div className="flex flex-row text-white justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handletagchange} name="All" isSelected={Tag == "All"} />
        <ProjectTag onClick={handletagchange} name="Web" isSelected={Tag == "Web"} />
        <ProjectTag onClick={handletagchange} name="Blockchain" isSelected={Tag == "Blockchain"} />

    </div>


    <div className='grid md:grid-cols-3 gap-8 md:gap-12'>{filter.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imageUrl={project.image} tags={project} gitUrl={project.gitUrl} previewUrl={project.previewurl}/>)}</div>
    </>
  )
}

export default ProjectSection;
