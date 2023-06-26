import React, { useState } from 'react'
import Footer_more_bar from './Footer_more_bar'
import {GrFormDown,GrFormUp} from 'react-icons/gr'
const Footer = () => {
  const [isMore,setIsMore]=useState('More')
  function toggleMore(){
    isMore==='More'?setIsMore('Less'):setIsMore('More')
  }
  const isMoreSymbol=isMore==='More'?<GrFormUp />:<GrFormDown/>
  return (
    <div className="sticky bottom-0 py-4 font-medium bg-slate-400 border-cyan-500">
        <div className='items-center justify-around '>
          <div className='flex flex-row flex-grow space-x-5 text-sm justify-evenly'>
              <p className=''>&copy;2023 Fool-Apple</p>
              <button className='hover:text-amber-200 '>Terms</button>
              <button className='hover:text-amber-200'>Privacy</button>
              <button className='hover:text-amber-200' onClick={()=>toggleMore()}><div className='flex items-center gap-2 '>{isMore} {isMoreSymbol}</div></button>
          </div>
          
          {isMore==='Less'&&<Footer_more_bar/>}
        </div>
    </div>
  )
}

export default Footer
