import React from 'react'
import './Form.css'
const Form = () => {
  return (
    <div className='form-container'>
      <h1>Send a message to us!</h1>
      <form>
        <input type="text" placeholder='Enter your name' />
        <input type="text" placeholder='Enter your email' />
        <input type="text" placeholder='Enter your subject' />
        <textarea name="" id="" placeholder='Enter your message' rows='4'></textarea>
        <button>Send Message</button>

      </form>
    </div>
  )
}

export default Form
