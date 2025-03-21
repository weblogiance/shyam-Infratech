import React , {useState} from 'react'
import { BiMailSend } from "react-icons/bi";
import { MdCallMissedOutgoing } from "react-icons/md";




const Navbar = () => {
     const [scroll,setscroll] = useState(false)
    

     window.onscroll = () =>{
         setscroll(window.pageYOffset === 0 ? false : true)
         return () => (window.onscroll === null)
     }
  return (
    <div className={`fixed top-2 w-full  transition-all duration-400 ease-linear z-[99]`}>
        <div className={`w-10/12 flex mx-auto p-5 bg-transparent ${scroll ? " shadow-md rounded-2xl bg-white text-gray-500": " text-black"} transition-all duration-500 ease-in-out `}>
             <nav className=' flex justify-between items-center w-full'>
                  <div>
                        <h1>LOGO</h1>
                  </div>
                  <div className='flex gap-x-8'>
                        <ul className='flex items-center gap-x-5  tracking-wide text-xl'>
                             <li className=' cursor-pointer'>Home</li>
                             <li className=' cursor-pointer'>About Us</li>
                             <li className=' cursor-pointer'>Our Verticals</li>
                             <li className=' cursor-pointer'>Career</li>
                             <li className=' cursor-pointer'>Contact Us</li>
                        </ul>
                        <div className='flex gap-x-3'>
                             <button className=' flex items-center gap-x-2 border p-2 rounded-xl'> <BiMailSend size={25} className=' animate-pulse'/> Send To Mail</button>
                             <button className=' flex items-center gap-x-2 border p-2 rounded-xl bg-gradient-to-r from-blue-500 to-gray-500 text-white capitalize'><MdCallMissedOutgoing size={25} className=' animate-pulse'/> Contact to team</button>
                        </div>
                  </div>
             </nav>
        </div>
    </div>
  )
}

export default Navbar
