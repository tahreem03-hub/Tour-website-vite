import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import about from '../assets/13.jpg'
import Footer from '../components/Footer/Footer'
import Trip from '../components/Trip/Trip'
const Services = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName='hero-mid'
        heroImg={about}
        title='Service'
        btnClass='hide'
      />
      <Trip/>
      <Footer/>
    </>
  )
}

export default Services
