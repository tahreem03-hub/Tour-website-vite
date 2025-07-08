import React from 'react'
import { Routes, Route } from 'react-router-dom'
//import '../src/components/Navbar'
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import About from './Routes/About'
import Services from './Routes/Services'

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={ <About />}/>
        <Route path="/service" element={<Services/>}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </div>
  )
}

export default App
