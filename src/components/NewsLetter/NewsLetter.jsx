import React from 'react'
import './Newsletter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exlusive Offers Via Email</h1>
        <p>Subsribe to Our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='You email Address' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter