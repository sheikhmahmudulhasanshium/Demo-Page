import React from 'react'
import Product_Card from '../components/app/counter/view/Product_Card'
import { products } from '../components/data'
const Body = () => {
  
  return (
    <div>
        <div className="flex justify-center p-2 text-4xl font-bold bg-white ">Browse Featured Experts</div>
        <div className='grid items-center justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-slate-400 rounded-2xl'>
          {products.map(products=>(
              <div key={products.ID} className=''>
                  <Product_Card products={products}/>
              </div>
          
          ))}
        </div>
        
    </div>
  )
}

export default Body
