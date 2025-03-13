import React from 'react'
import EmptyImage from "../assets/empty.png"
const Empty = () => {
  return (
<div className='flex justify-center items-center w-full h-full '> 
      <img src={EmptyImage} alt='empty' className='object-cover'/>
    </div>
  )
}

export default Empty
