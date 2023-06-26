import React from 'react'

const Nav_Menu_bar = () => {
  return (
    <div className='absolute px-4 py-4 mt-48 bg-red-200 rounded-lg right-3'>
              <div className='flex flex-col font-semibold '>
                  <a className='hover:text-green-900 hover:underline underline-offset-auto' href='https://www.google.com' target='_blank'>Download App</a>
                  <a className='hover:text-green-900 hover:underline underline-offset-auto' href='https://www.google.com' target='_blank'>Become an Expert</a>
                  <a className='hover:text-green-900 hover:underline underline-offset-auto' href='https://www.google.com' target='_blank'>About us</a>
                  <a className='hover:text-green-900 hover:underline underline-offset-auto' href='https://www.google.com' target='_blank'>FAQ</a>
              </div> 
          </div>
  )
}

export default Nav_Menu_bar
