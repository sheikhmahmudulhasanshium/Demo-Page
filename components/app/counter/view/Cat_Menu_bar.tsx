import React from 'react'
import { categories } from '../../../data'
import Cat_Menu_bar_controller from '../controller/cat_menu_bar_controller'
const Cat_Menu_bar = () => {
  return (
    <div className='absolute p-3 m-4 text-lg bg-red-200 rounded-2xl left-16 top-12 '>
                <div className='grid grid-cols-2 gap-1 p-1 '>
                        {categories.map(categories=>(
                          <div className=' rounded-xl bg-slate-600 hover:text-red-400' >
                              <div className='flex flex-row rounded-xl bg-slate-100' >

                                  <Cat_Menu_bar_controller category={categories}  />       
                              </div>
                          </div>
                      ))}
                    
                </div>
                
            </div>
            
  )
}

export default Cat_Menu_bar
