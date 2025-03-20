import React from 'react'
import { BiMailSend } from "react-icons/bi";
import { MdCallMissedOutgoing } from "react-icons/md";

const Navbar = () => {
  return (
    <div className=' fixed top-0 w-full z-[99]'>
        <div className='w-10/12 flex mx-auto p-5 bg-transparent'>
             <nav className=' flex justify-between items-center w-full'>
                  <div>
                        <h1>LOGO</h1>
                  </div>
                  <div className='flex gap-x-8'>
                        <ul className='flex items-center gap-x-3 tracking-wide text-xl'>
                             <li className=' cursor-pointer'>Home</li>
                             <li className=' cursor-pointer'>About Us</li>
                             <li className=' cursor-pointer'>Our Verticals</li>
                             <li className=' cursor-pointer'>Career</li>
                             <li className=' cursor-pointer'>Contact Us</li>
                        </ul>
                        <div className='flex gap-x-3'>
                             <button className=' flex items-center gap-x-2 border p-2 rounded-xl'> <BiMailSend size={25} className=' animate-pulse'/> Send To Mail</button>
                             <button className=' flex items-center gap-x-2 border p-2 rounded-xl bg-black text-white capitalize'><MdCallMissedOutgoing size={25} className=' animate-pulse'/> Contact to team</button>
                        </div>
                  </div>
             </nav>
        </div>
    </div>
  )
}

export default Navbar
