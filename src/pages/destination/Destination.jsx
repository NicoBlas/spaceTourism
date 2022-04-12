import React, { useState } from 'react'
import "./destination.css"
import imageMoonPNG from "../../assets/destination/image-moon.png"
import imageMoonWEBP from "../../assets/destination/image-moon.webp"
import imageMarsPNG from "../../assets/destination/image-mars.png"
import imageMarsWEBP from "../../assets/destination/image-mars.webp"
import imageEuropaPNG from "../../assets/destination/image-europa.png"
import imageEuropaWEBP from "../../assets/destination/image-europa.webp"
import imageTitanPNG from "../../assets/destination/image-titan.png"
import imageTitanWEBP from "../../assets/destination/image-titan.webp"

const Destination = () => {
  const DestinationDATA = [
    {
    name: "MOON",
    images:{
      png: imageMoonPNG,
      webp: imageMoonWEBP
    },
    description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days"
  },
  {
    name: "MARS",
    images:{
      png: imageMarsPNG,
      webp: imageMarsWEBP
    },
    description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months"
  },
  {
    name: "EUROPA",
    images:{
      png: imageEuropaPNG,
      webp: imageEuropaWEBP
    },
    description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years"
  },
  {
    name: "TITAN",
    images:{
      png: imageTitanPNG,
      webp: imageTitanWEBP
    },
    description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years"
  },


]
  const [destination,setDestination] = useState(0)

  return (
    <div className='destination'>
      <div className='destination__selection'>
        <p id='destination-pick'>PICK YOUR DESTINATION</p>
        <img src={DestinationDATA[destination].images.png} alt="imageDestination"/>
        <div className='destination__selection__options'>
          <p id={destination==0?"option-selected":null} onClick={()=> setDestination(0)} >MOON</p>
          <p id={destination==1?"option-selected":null} onClick={()=>setDestination(1)} >MARS</p>
          <p id={destination==2?"option-selected":null} onClick={()=>setDestination(2)} >EUROPA</p>
          <p id={destination==3?"option-selected":null} onClick={()=>setDestination(3)} >TITAN</p>
        </div>
      </div>
      <div className='destination__info'>
        <p id='p-destination'>{DestinationDATA[destination].name}</p>
        <p id="p-description">{DestinationDATA[destination].description}</p>
      </div>
      <div className='destination__data'>
        <div className='destination__data-distance'>
          <p id="p-description">AVG. DISTANCE</p>
          <p id="p-dataWhite">{DestinationDATA[destination].distance.toUpperCase() } </p>
        </div>
        <div className='destination__data-time'>
          <p id="p-description">EST. TIME TRAVEL</p>
          <p id="p-dataWhite">{DestinationDATA[destination].travel.toUpperCase() }</p>
        </div>
      </div>

    </div>
  )
}

export default Destination