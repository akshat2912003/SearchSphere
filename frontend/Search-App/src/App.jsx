import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import MainData from './components/MainData'

function App() {

  return <div className=' w-screen h-screen bg-blue-500 ' >
    <Navbar />
    {/* <MainData /> */}
  </div>
}

export default App
