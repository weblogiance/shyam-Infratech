import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './page/HomePage'
import Navbar from './components/Navbar'

function App() {
  return (
      <div>
          <Navbar />
          <Routes>
              <Route path='/' element={<HomePage/>} />
          </Routes>
      </div>
  )
}

export default App
