import React, { useEffect, useState } from 'react'
import "./technology.css"
import vehicleLandscape from "../../assets/technology/image-launch-vehicle-landscape.jpg"
import vehiclePortrait from "../../assets/technology/image-launch-vehicle-portrait.jpg"
import spaceCapsuleLand from "../../assets/technology/image-space-capsule-landscape.jpg"
import spaceCapsulePortrait from "../../assets/technology/image-space-capsule-portrait.jpg"
import spaceportLand from "../../assets/technology/image-spaceport-landscape.jpg"
import spaceportPortrait from "../../assets/technology/image-spaceport-portrait.jpg"




const Technology = () => {

  const [number, setNumber] = useState(0)
  const DATATECH = [
    {
      name: "Launch vehicle",
      images: {
        portrait: vehiclePortrait,
        landscape: vehicleLandscape
      },
      description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      name: "Spaceport",
      images: {
        portrait: spaceCapsulePortrait,
        landscape: spaceCapsuleLand
      },
      description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      name: "Space capsule",
      images: {
        portrait: spaceportPortrait,
        landscape: spaceportLand
      },
      description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    },
  ]

  const mql = window.matchMedia('(min-width: 1281px)');
  {console.log(mql.matches)}
  const imagesPortrait = DATATECH[number].images.portrait
  const imagesLandscape = DATATECH[number].images.landscape


  return (
    <div className='technology'>
      <p className='technology__title'>SPACE LAUNCH 101</p>
      <div className='technology-container-line'>
        <div className='technology-container'>
          <img src={mql.matches?imagesPortrait:imagesLandscape} alt="imageTechnology" />
        </div>
      </div>
      <div className='technology__circles'>
        <div id={number==0?"technology-option-selected":null} onClick={()=> setNumber(0)} className='technology-circles-circle'>1</div>
        <div id={number==1?"technology-option-selected":null} onClick={()=> setNumber(1)} className='technology-circles-circle'>2</div>
        <div id={number==2?"technology-option-selected":null} onClick={()=> setNumber(2)} className='technology-circles-circle'>3</div>
      </div>
      <p className='p-technologySection'>THE TERMINOLOGY ...</p>
      <p className='p-technologyName'>{DATATECH[number].name.toUpperCase()}</p>
      <p className='p-technologyDesc'>{DATATECH[number].description}</p>

    </div>
  )
}

export default Technology