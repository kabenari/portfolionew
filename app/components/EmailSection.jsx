import React from 'react'
import githubicon from "../../public/github-icon.svg";
import linkdinicon from "../../public/linkedin-icon.svg";
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => { 
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
        <div>
            <h5 className='text-xl font-cold text-white my-2'>Connect With Me!</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                {" "}
                Well I'm currently active heavely on instagram and linkdin so feel free to connect
                with me and get inb touch with more people like me arigato kosaimas!
            </p>
            <div className="socials flex flex-row gap-2">
                <Link href="github.com">
                    <Image src={githubicon}/>
                </Link>
                <Link href="linkedin.com">
                    <Image src={linkdinicon}/>
                </Link>
            </div>
        </div>
        <div className="">
            <form className='flex flex-col gap-4'>
                <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>Your Email</label>
                <input type='email' id='email' required className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5' placeholder='swarup@gmail.com'/>
                <label htmlFor="subject" className='text-white block mb-2 text-sm font-medium'>Your subject</label>
                <input type='subject' id='subject' required className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5' placeholder='Hi!'/>
                <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>Message</label>
                <textarea type='message' id='message' required className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5'/>
                <button type='submit' className='bg-blue-600 hover:to-blue-400 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                    Send Message!
                </button>
            </form>
        </div>
    </section>
  )
}

export default EmailSection;
