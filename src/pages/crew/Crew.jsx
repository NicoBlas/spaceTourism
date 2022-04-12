import React from 'react'
import "./crew.css"
import anoushehImage from "../../assets/crew/image-anousheh-ansari.webp"
import douglasImage from "../../assets/crew/image-douglas-hurley.webp"
import markImage from "../../assets/crew/image-mark-shuttleworth.webp"
import victorImage from "../../assets/crew/image-victor-glover.webp"


const Crew = () => {

  const DATA = [
    {
      name: "Douglas Hurley",
      images:douglasImage ,
      role: "Commander",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."

    },
    {
      name: "Mark Shuttleworth",
      images:markImage ,
      role: "Mission Specialist",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."

    },
    {
      name: "Victor Glover",
      images:victorImage ,
      role: "Pilot",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."

    },
    {
      name: "Anousheh Ansari",
      images:anoushehImage ,
      role: "Flight Engineer",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."

    }
  ]
  const [crewNumber, setCrewNumber] = React.useState(0)

  return (
    <div className='crew'>
      <p className='crew__title'>MEET YOUR CREW</p>
      <div className='crew__image-container-line'>
        <div className='crew__image-container'>
          <img src={DATA[crewNumber].images} alt="imageCrew" />
        </div>
      </div>
      <div className='crew__circles'>
        <div id={crewNumber==0?"crew-option-selected":null} onClick={()=> setCrewNumber(0)} className='crew__circles-circle' />
        <div id={crewNumber==1?"crew-option-selected":null} onClick={()=> setCrewNumber(1)} className='crew__circles-circle' />
        <div id={crewNumber==2?"crew-option-selected":null} onClick={()=> setCrewNumber(2)} className='crew__circles-circle' />
        <div id={crewNumber==3?"crew-option-selected":null} onClick={()=> setCrewNumber(3)} className='crew__circles-circle' />
      </div>
      
      <p className='p-crewRole'>{DATA[crewNumber].role.toUpperCase()}</p>
      <p className='p-crewName'>{DATA[crewNumber].name.toUpperCase()}</p>
      <p className='p-crewBio'>{DATA[crewNumber].bio}</p>

    </div>
  )
}

export default Crew