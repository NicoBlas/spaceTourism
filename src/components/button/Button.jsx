import React from 'react'
import "./button.css"
import {Link} from "react-router-dom"

const Button = () => {
  return (
    <div className='buttomClass'>
      <Link to='/destination'><button type='button'>EXPLORE</button></Link>
    </div>
  
  )
}

export default Button