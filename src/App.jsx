
import './App.css'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactPage from './page/ContactPage'
import Aboutus from './page/Aboutus'

import Home from './page/Home'

function App() {
  return (
      <div>
          <Navbar />
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/contact-us' element={<ContactPage/>} />
              <Route path='/about-us' element={<Aboutus/>} />
              <Route path='/contact-us' element={<ContactPage/>} />
          </Routes>
          <Footer/>
      </div>
  )
}

export default App
