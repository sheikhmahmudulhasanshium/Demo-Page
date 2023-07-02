import React, { useEffect, useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import {BsArrowRight} from 'react-icons/bs'
import { categories,products } from '../../../data'
import {AiFillStar} from 'react-icons/ai'
import {RxCross2} from 'react-icons/rx'
const Searchbar = () => {
  const [searchInput,setSearchInput]=useState('')
  //const [isTakeInput,setIsTakeInput]=useState(true) 
  const checkEnter=(event:any)=>{
    
    if(event.key==='Enter'){
      console.log('Enter key pressed ✅')
      //setIsTakeInput(false)
      //setSearchInput('')
      //console.log(searchInput)
      //isTakeInput?setIsTakeInput(false):setIsTakeInput(true)
      setHideResult(hideResult===true?false:true)

    }
  }
  const handleChangeInput=(event:any)=>{
   // while(isTakeInput===true)
   //{
      //setSearchInput('')
      //setIsTakeInput(true)
      setSearchInput(event.target.value)
      
    //}
    //setIsTakeInput(true)
    
  }
  
  //const inputValue=searchInput
  const [hideResult,setHideResult]=useState(false)
  function hideResultTray(){
    setHideResult(true)
  }
  return (
    <div className='flex items-center flex-grow bg-white rounded-full hover:bg-blue-400 ' >
     <div className='flex pr-1 border-none'>
      <input className='p-1 px-2 bg-white rounded-2xl'  type="text"   placeholder='Search...' id='message' name='message' onChange={handleChangeInput} onKeyDown={checkEnter}/> 
      
      {(searchInput==='')&&<BsSearch className='w-6 h-4 my-2 md:mr-2 lg:mr-3 hover:bg-blue-400 sm:mr-4'/>}
      {(searchInput!=='')&&<BsArrowRight className='w-5 h-5 m-2'/>}
      
      </div>
       
      
      {(hideResult===false)&&
      <div className='absolute flex flex-col items-center justify-center px-2 bg-red-100 top-16'><RxCross2 className='w-5 h-5 m-2 hover:text-red-900' onClick={hideResultTray}/>
          <div className=''>
                {products.map((product)=>
                {if(searchInput!==''&&product.Name!==searchInput && product.Category!==searchInput && product.ID==='50') return <div>No Results Found.</div>
                  else if((searchInput===''&& product.Name===searchInput||product.Category===searchInput)&&searchInput!=='')
                  {return <div className='flex items-center gap-2 px-2 my-2 text-xl font-bold rounded-md bg-slate-500 hover:text-red-900' key={product.ID}>
                            {product.Name}
                            <div className='flex items-center text-sm font-semibold text-green-400'>
                                <p>Rating: </p><AiFillStar className='ml-2 text-orange-400'/>{product.Rating}
                                
                            </div>
                          </div>
                  };
                  
                 
                  }
                        
                        )
                  }
                        
                
                        {/*searchInput*/}
        </div>
      </div>}
    </div>
    
  
  
  )
}

export default Searchbar
{/*<div className='flex flex-grow p-2 rounded-full bg-cyan-100 lg:w-11/12 hover:bg-white hover:text-red-900'>
    <input className='rounded-2xl' value={searchInput}  type='text'  id='message' onChange={HandleChangeInput}/>
    <BsSearch className='w-8 h-5'/>
    <div className='absolute flex flex-grow bg-amber-400 top-10'>{searchInput}</div>
  </div>*/}