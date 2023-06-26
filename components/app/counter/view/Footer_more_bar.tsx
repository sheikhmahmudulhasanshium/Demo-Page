import React from 'react'

const Footer_more_bar = () => {
  return (
    <div className='grid py-4 my-4 bg-red-200  grid-row-12'>
    
    <div className='flex flex-grow gap-4 justify-items-stretch'>
        {/**left */}
        <div className='flex flex-col '>
            <div className='flex items-center justify-center space-x-3 text-2xl font-extrabold'>
                <img src="/Full-Apple.png" alt="logo" className='w-10 rounded-xl'/>
                <p >Fool-Apple</p>
            </div>
            <p className='px-2'>The slogan of the service will be mentioned here. It should be small but effective.</p>
        </div>
        <div className='flex flex-grow w-11/12 justify-evenly'>
          {/**middle */}
          
          <div className='flex flex-col col-span-2 font-semibold '>
                        <p className='text-xl font-bold'>Main</p>
                        <a className='hover:text-green-900 hover:underline underline-offset-auto' href='https://www.google.com' target='_blank'>Featured Expert</a>
                        <a className='hover:text-green-900 hover:underline underline-offset-auto' href='https://www.google.com' target='_blank'>Become an Expert</a>
                        <a className='hover:text-green-900 hover:underline underline-offset-auto' href='https://www.google.com' target='_blank'>
                            <div className='flex space-x-1'><p>Online Booking</p> <p className='p-1 text-sm font-light text-white bg-red-800 rounded-xl'>New</p></div>
                        </a>
                        <a className='hover:text-green-900 hover:underline underline-offset-auto' href='https://www.google.com' target='_blank'>Download App</a>
          </div>
          
          {/**right */}
          <div className='flex flex-col col-span-2 px-4 font-semibold'>
                  <p className='text-xl font-bold'>Info</p>
                  <a className='hover:text-green-900 hover:underline underline-offset-auto' href='https://www.google.com' target='_blank'>About Us</a>
                  <a className='hover:text-green-900 hover:underline underline-offset-auto' href='https://www.google.com' target='_blank'>FAQ</a>
                  <a className='hover:text-green-900 hover:underline underline-offset-auto' href='https://www.google.com' target='_blank'>Privacy Policy </a>
                  <a className='hover:text-green-900 hover:underline underline-offset-auto' href='https://www.google.com' target='_blank'>Terms & Conditions</a>
          </div>
        </div>
    </div> 
</div>
  )
}

export default Footer_more_bar
