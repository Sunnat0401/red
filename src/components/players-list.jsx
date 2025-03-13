import React from "react";
import { RiFootballLine } from "react-icons/ri";
import { BsFlag } from "react-icons/bs";
import player from "../assets/player.png";
import { MdClose } from "react-icons/md";
const PlayersList = () => {
  return (
    <div>
      <div className="bg-white p-4 rounded-md shadow-lg grid grid-cols-2 items-center relative">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center gap-1">
            <RiFootballLine className="w-6 h-6" />
            <p className="font-bold text-xl">Mohammad Salah</p>
          </div>
          <div className="flex items-center gap-1">
            <BsFlag className="w-6 h-6" />
            <p className="font-bold text-xl">Egypt</p>
          </div>
        </div>
        <img className="w-20 h-20 ml-auto" src={player} alt="player"  />
        <span className="absolute -right-2 -top-4 bg-slate-300 rounded-full p-1 hover:bg-slate-400  transition-all"
		 role="button"
		>
          <MdClose  className="h-5 w-5"/>
        </span>
      </div>
    </div>
  );
};

export default PlayersList;
