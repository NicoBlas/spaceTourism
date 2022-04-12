import React,{useState} from 'react'
import "./navbar.css"
import iconClose from "../../assets/shared/icon-close.svg"
import iconHamburger from "../../assets/shared/icon-hamburger.svg"
import logo from "../../assets/shared/logo.svg"
import {Link} from "react-router-dom"

const Menu = () =>{
  return (
    <>
      
      <p><Link to='/'>HOME</Link></p>
      <p><Link to='/destination'>DESTINATION</Link></p>
      <p><Link to='/crew'>CREW</Link></p>
      <p><Link to='/technology'>TECHNOLOGY</Link></p>
    </>
  )
}


const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <img src={logo} alt="logo" />
      </div>
      <div className='navbar__links'>
        <Menu />
      </div>
      <div className='navbar__toggleMenu'>
        {toggleMenu
          ? <img src={iconClose} onClick={() => setToggleMenu(false)} />
          : <img src={iconHamburger}  onClick={() => setToggleMenu(true)}  />
        }
        {toggleMenu && (
            <div className='navbar_toggleMenu-container scale-up-hor-right'>
              <div className='navbar__toggleMenu-container-links'>
                <Menu />
              </div>
            </div>
        )}
      </div>
    </div>
  )
}

export default Navbar