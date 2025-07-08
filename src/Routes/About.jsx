import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import about from '../assets/night.jpg'
import Footer from '../components/Footer/Footer'
import AboutUs from '../components/About Us/AboutUs'

const About = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName='hero-mid'
        heroImg={about}
        title='About'
        btnClass='hide'
      />
      <AboutUs/>
      <Footer/>
    </>
  )
}

export default About
