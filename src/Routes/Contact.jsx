import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import about from '../assets/14.jpg'
import Footer from '../components/Footer/Footer'
import Form  from '../components/Form/Form'

const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName='hero-mid'
        heroImg={about}
        title='Contact'
        btnClass='hide'
      />
      <Form/>
      <Footer/>
    </>
  )
}

export default Contact
