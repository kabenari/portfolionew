"use client";
import Link from 'next/link';
import React,{useState} from 'react';
import NavLink from './NavLink';
import {Bars3Icon , NoSymbolIcon} from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';


const navLinks = [
    {
        title:"About",
        path:"#about",
    },
    {
        title:"Home",
        path:"#home",
    },
    {
        title:"Contact",
        path:"home",
    }
]

const NavBar = () => {

  const[navbarOpen , setNavbarOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#141414] bg-opacity-90'>
        <div className='flex flex-wrap items-center justify-between mx-auto p-4'>
            <Link href={'/'} className='text-3xl text-white font-semibold'>
                SWARUP
            </Link>
            <div className="mobile-menu block md:hidden">
                <div className="">
                    {!navbarOpen ? (
                        <button onClick={()=>{setNavbarOpen(true)}} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <Bars3Icon className='h-5 w-5'/>
                        </button>
                    ):(
                        <button onClick={()=>{setNavbarOpen(false)}} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <NoSymbolIcon className='h-5 w-5'/>
                        </button>
                    )
}
                </div>
            </div>
            <div className="menu hidden md:block md:w-auto" id='navbar'>
                <ul className='flex flex-row p-4 md:p-0 sm:p-0 md:flex-row md:space-x-8'>
                    {
                        navLinks.map((link , index)=>(
                            <li key={index} >
                                <NavLink href={link.path} title={link.title}/>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
      
    </nav>
  )
}

export default NavBar;
