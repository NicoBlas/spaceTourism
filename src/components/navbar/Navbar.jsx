import React,{useState} from 'react'
import "./navbar.css"
import iconClose from "../../assets/shared/icon-close.svg"
import iconHamburger from "../../assets/shared/icon-hamburger.svg"
import logo from "../../assets/shared/logo.svg"

const Menu = () =>{
  return (
    <>
      
      <p><a href='#home'>Home</a></p>
      <p><a href='#destination'>Destination</a></p>
      <p><a href='#crew'>Crew</a></p>
      <p><a href='#technology'>Technology</a></p>
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