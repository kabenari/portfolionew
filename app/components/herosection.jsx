"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-12 pb-9">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-44 pb-10">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-600 pb-10">
                        Hello, I'm{" "}
                    </span>
                    <br></br>
                    <TypeAnimation className="pb-10"
                    sequence={[
                        'Swarup',
                        1000,
                        'Web Developer',
                        1000,
                        'Full Stack Blockchain Dev',
                        1000,
                        'React Dev',
                        1000
                    ]}
                    wrapper="span"
                    speed={60}
                    repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, 
                    ducimus necessitatibus explicabo saepe ex vel fugiat amet tenetur quae similique.
                </p>
                <div>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white text-black hover:bg-transparent hover:text-white border border-white">Hire Me</button>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent text-white hover:bg-slate-300 hover:text-black border border-white mt-4">Contact Me</button>
                </div>
            </div>  
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#000000] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative lg:ml-9" >
                    <Image  
                    src="/images/gif2.gif"
                    alt=".hero"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-0"
                    width={500}
                    height={500}
                    />
                </div>
            </div>
        </div>

    </section>
  );
};

export default HeroSection;
