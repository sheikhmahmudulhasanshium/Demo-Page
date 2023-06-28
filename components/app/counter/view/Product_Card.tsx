import React, { FunctionComponent, useState } from 'react'
import {MdVerified} from 'react-icons/md'
import {GoStar, GoStarFill} from 'react-icons/go'
import {TiMessage} from 'react-icons/ti'
import { IProducts } from '../type'
import { products } from '../../../data'
//import Image from 'next/image'

const Product_Card:FunctionComponent<{products:IProducts}> = ({products:{ID,Name,Description,Category,PictureURL,Rating,ServiceCount}}) => {
  const [showStar, setShowStar]=useState('hide')
  
  function toogleStar(){
    showStar==='hide'?setShowStar('show'):setShowStar('hide')
    
  }
  const isStarClicked= showStar==='hide'?<GoStar className=''/>:<GoStarFill className=''/>
  return (
    
      <div className="flex flex-col items-center p-3 m-1 bg-blue-800 rounded-2xl">
            <div className='mt-2 text-xl text-blue-400 '>
              <MdVerified className='absolute my-2 mx-14'/>
            </div>
            <img className=' rounded-2xl' src="/Full-Apple.png" alt="product-icon" height={180} width={180}/> 
            
            
            <div className='px-2 my-2 text-center text-white rounded-2xl bg-slate-900'>
                <p className='px-2 text-base font-bold '>{Name}</p>
                <div className='flex flex-row items-center justify-center space-x-1 text-sm'>
                    <div onClick={toogleStar}>{isStarClicked}</div>  
                    <p>{Rating}</p>
                    <TiMessage className=''/>
                    <p>{ServiceCount}</p><p> Consultation</p>
                </div>
            </div>
        </div>
  )
}

export default Product_Card
