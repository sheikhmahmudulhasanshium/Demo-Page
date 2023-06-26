import React, { useState } from 'react'
import {CgMenu} from 'react-icons/cg'
import Searchbar from './Searchbar'
import {RxCross2} from 'react-icons/rx'
import Nav_Menu_Bar from '../view/Nav_Menu_bar'
import Cat_Menu_bar from './Cat_Menu_bar'
import {GrFormUp,GrFormDown} from 'react-icons/gr'
const Navbar = () => {
  const [showCat, setShowCat]=useState('hide')
  const [showMenu,setShowMenu]=useState('hide')
  function toggleShowMenu(showMenu: string){
    showMenu==='hide'?setShowMenu('show'):setShowMenu('hide')
  }
  const menuIcon=(showMenu==='hide')?<CgMenu className='hover:text-cyan-900'/>:<RxCross2 className='hover:text-red-900'/>
  function toggleShowCat(){
    showCat==='hide'?setShowCat('show'):setShowCat('hide')
  }
  const catIcon=(showCat==='hide')?<GrFormDown/>:<GrFormUp/>
  return (
    <div className='sticky top-0'>
        <div className="flex flex-row items-center flex-grow h-16 gap-2 p-2 space-x-4 bg-green-100 justify-evenly">
            <div className="flex flex-row w-2/12 h-10 space-x-2 sm:w-5/12">
                <img className="h-8 bg-green-200 rounded-lg" src="../Full-Apple.png" alt="logo"/>
                <h3 className="text-lg font-extrabold lg:text-xl">Fool-Apple</h3>
            </div>
            <div className='p-2 text-base font-bold sm:w-4/12 hover:text-red-900 lg:text-l'>
              <div className='flex items-center gap-2' onClick={()=>{toggleShowCat()}}><p>Categories</p> <div className='py-1'>{catIcon}</div></div>
            </div>
            {showCat==='show'&&<Cat_Menu_bar/>}
            <Searchbar/>
              <button className="w-5/12 p-2 text-base bg-yellow-200 lg:w-2/6 lg:text-xl rounded-2xl hover:bg-cyan-100 hover:text-red-900">
                Download App
              </button>
              
            
           <button className='p-2 text-3xl hover:bg-cyan-100' onClick={()=>toggleShowMenu(showMenu)}>{menuIcon}</button>  
            {showMenu==='show'&&<Nav_Menu_Bar/>} 
    </div>
    </div>
  )
}

export default Navbar