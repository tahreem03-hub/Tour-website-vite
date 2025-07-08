import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import hero from '../assets/12.jpg'
import Destination from '../components/Destination/Destination'
import Trip from '../components/Trip/Trip'
import Footer from '../components/Footer/Footer'
// <> empty fragment
const Home = () => {

  return (
    <>
      <Navbar />
      <Hero 
      cName='hero'
      heroImg={hero}
      title='Your Journey Your Story'
      text='Choose Your Favourite Destination'
      buttontext='Travel Plan'
      url='/'
      btnClass='show'
      />
      <Destination/>
      <Trip/>
      <Footer/>
    </>
  )
}

export default Home
