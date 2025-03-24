import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './page/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactPage from './page/ContactPage'
import Aboutus from './page/Aboutus'
import Homepage1 from './page/Homepage1'

function App() {
  return (
      <div>
          <Navbar />
          <Routes>
              <Route path='/' element={<Homepage1/>} />
              <Route path='/contact-us' element={<ContactPage/>} />
              <Route path='/about-us' element={<Aboutus/>} />
          </Routes>
          <Footer/>
      </div>
  )
}

export default App
