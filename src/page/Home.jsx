import React from 'react'
import mainI from '../assets/image/Mask group.png'
import Ourservice from '../components/Home/Ourservice'
import Future from '../components/Home/Future'
import Work from '../components/Home/Work'

const Home = () => {
  return (
    <div>
         {/* <section className='w-full p-6 mx-auto flex items-center justify-center h-screen '>        
            
         </section> */}
         <Ourservice/>
         <Future/>
         <Work/>
    </div>
  )
}

export default Home
