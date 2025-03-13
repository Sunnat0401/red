import React from 'react'
import errorImage from "../assets/error.png"

const Error = () => {
  return (
    <div className='flex justify-center items-center w-full h-full '> 
      <img src={errorImage} alt='error' className='object-cover'/>
    </div>
  )
}

export default Error
