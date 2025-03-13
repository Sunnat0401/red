import React, { useEffect } from "react";
import { RiFootballLine } from "react-icons/ri";
import { BsFlag } from "react-icons/bs";
import player from "../assets/player.png";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useHttps } from "../hooks/use-http";
import { playersFetched, playersFetching, playersFetchingError } from "../actions";
import Spinner from "./spinner";
import Error from "./error.jsx"
import Empty from "./empty.jsx";
import PlayerListItem from "./player-list-items.jsx";
const PlayersList = () => {
  const {players, playersLaodingStatus} = useSelector(state => state)
  const dispatch = useDispatch()
  const {request} = useHttps()


  useEffect(()=>{
  dispatch(playersFetching())
  request("http://localhost:3000/players")
  .then(data =>
    dispatch(playersFetched(data ,  console.log(data))))
  .catch(()=> dispatch(playersFetchingError()))
  } , [])


  if (playersLaodingStatus === "loading") {
    return <Spinner classNames={'w-8 h-8 block mx-auto text-white'} />
  }
   else if (playersLaodingStatus === "error") {
    return <Error />
  }
const renderPlayers = () =>{
  if (!players.length) { 
    return <Empty />;
  }
  return players.map(({id , ...props} ) =>{
    <PlayerListItem key={id} {...props }/>
  })
}

  console.log(players);
  return (
    <div className="flex flex-col space-y-3">
    { renderPlayers() }
    </div>
  );
};

export default PlayersList;
