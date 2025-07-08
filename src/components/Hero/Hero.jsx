import React from 'react'
import './Hero.css'
const Hero = (props) => {
  return (
    <div className={props.cName}>
      <img src={props.heroImg} alt="Hero" />
      <div className='hero-text'>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>
        {props.buttontext}</a>
      </div>
    </div>
  )
}

export default Hero
