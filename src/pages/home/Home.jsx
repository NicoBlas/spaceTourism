import React from 'react'
import "./home.css"
import backgroundHomeMobile from "../../assets/home/background-home-mobile.jpg"
import Button from '../../components/button/Button'

const Home = () => {

  

  return (
    <div className='home'>
      
      <div className='home__info'>
        <p id="p-desc">SO, YOU WANT TO TRAVEL TO</p>
        <p id='p-title'>SPACE</p>
        <p id='lastP'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>

      <div className='home__buttom'>
        <Button />
      </div>
    </div>
  )
}

export default Home