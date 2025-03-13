import React from 'react'
import { BsFlag } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'
import { RiFootballLine } from 'react-icons/ri'
import player from "../assets/player.png"
const PlayerListItem = ({name, continent, country}) => {

    let continentBg 
    switch(continent) {
      case 'Europe' :
      bgClasses = "bg-gradient-to-r from-blue-500 to-red-500"
     break
   case "Aasia" :
      bgClasses = "bg-gradient-to-r from-green-500 to-red-500" 
      break
      case "Africa" :
      bgClasses = "bg-gradient-to-r from-yellow-500 to-red-500" 
      break
      case "America" :
        bgClasses = "bg-gradient-to-r from-cyan-500 to-red-500" 
        break
    }
  return (
    <div className= {`p-4 rounded-md shadow-lg grid grid-cols-2 items-center relative ${bgClasses}`}>
    <div className="flex flex-col space-y-2">
      <div className="flex items-center gap-1">
        <RiFootballLine className="w-6 h-6" />
        <p className="font-bold text-xl">{name}</p>
      </div>
      <div className="flex items-center gap-1">
        <BsFlag className="w-6 h-6" />
        <p className="font-bold text-xl">{country}</p>
      </div>
    </div>
    <img className="w-20 h-20 ml-auto" src={player} alt="player"  />
    <span className="absolute -right-2 -top-4 bg-slate-300 rounded-full p-1 hover:bg-slate-400  transition-all"
     role="button"
    >
      <MdClose  className="h-5 w-5"/>
    </span>
  </div>
  )
}

export default PlayerListItem
