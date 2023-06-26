import React from 'react'
import {BsSearch} from 'react-icons/bs'
const Searchbar = () => {
  return (
    
    <div className='flex flex-grow p-2 bg-white rounded-full lg:w-11/12 hover:bg-cyan-100 hover:text-red-900'>
    <BsSearch className='w-8 h-5'/>
    <p className='font-semibold text-l'>Search...</p>
  </div>
  
  )
}

export default Searchbar
