"use client";
import React , {useTransition,useState} from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title:"Skills",
    id:"skills",
    content:(
      <ul className='list-disc pl-2'>
        <li>Solidity</li>
        <li>Ethers.js</li>
        <li>React</li>
        <li>Firebase</li>
        <li>TailWind</li>
      </ul>
    )
  },
  {
    title:"Projects",
    id:"Projects",
    content:(
      <ul className='list-disc pl-2'>
        <li>Decentralised Twitter</li>
        <li>NFT MarketPlace</li>
        <li>Portfolio</li>
        <li>Parallax Website</li>
      </ul>
    )
  },
  {
    title:"Education",
    id:"Education",
    content:(
      <ul className='list-disc pl-2'>
        <li>AIT CSE(2027)</li>
        <li>Youtube</li>
        <li>Forums</li>
      </ul>
    )
  },
]

const AboutSection = () => {
  const[tab,setTab] = useState("skills");
  const[isPending, startTransition] = useTransition();

  const handleTabChange = (id) =>{
    startTransition(()=>{
      setTab(id);
    });
  };

  return ( 
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 mb-28">
        <Image className='rounded-full' src="/images/main.png" width={500} height={500}/>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-extrabold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg '>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, mollitia?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, earum?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet velit 
            sint dolores quas at molestias voluptates assumenda, cum necessitatibus pariatur?
          </p>
          <div className="flex flex-row mt-8">
            <TabButton selectTab={()=>handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
            <TabButton selectTab={()=>handleTabChange("Projects")} active={tab === "Projects"}>Projects</TabButton>
            <TabButton selectTab={()=>handleTabChange("Education")} active={tab === "Education"}>Education</TabButton>
          </div>
          <div className='mt-8'>
            {TAB_DATA.find((t)=>t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
