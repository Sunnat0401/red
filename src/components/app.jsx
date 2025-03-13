import React, { useEffect } from 'react'
import PlayersList from "./players-list"
import PlayerAddForm from "./players-add-form"
import PlayersFilter from "./players-filter"
const App = () => {

// 	useEffect(()=>{
// console.log( window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// 	} , [])
  return (
	<div className='h-screen w-full  relative app'>
		<div className='absolute bg-black/60 inset-0 blur-3xl -10'></div>
		<div className='grid grid-cols-2 gap-4 container max-w-6xl mx-auto h-full z-50  relative pt-12 '>
			<div>
         <PlayersList/>
			</div>
			<PlayerAddForm/>
			<PlayersFilter/>
		</div>
	
	</div>
  )
}

export default App
