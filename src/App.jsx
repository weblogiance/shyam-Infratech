import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './page/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactPage from './page/ContactPage'
import Aboutus from './page/Aboutus'

function App() {
  return (
      <div>
          <Navbar />
          <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='/contact-us' element={<ContactPage/>} />
              <Route path='/about-us' element={<Aboutus/>} />
          </Routes>
          <Footer/>
      </div>
  )
}

export default App
