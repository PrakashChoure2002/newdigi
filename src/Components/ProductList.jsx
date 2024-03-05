import React from 'react'
import { Product } from './project/project'

const ProductList = () => {
  return (
    <>
    
   
    
    
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-white'>
    
    {Product.map((item) => (
        <div key={item.id} className='relative flex flex-col rounded-xl bg-white shadow-lg overflow-hidden'>
            <img src={item.img} alt={item.Name} className='w-full h-60 object-cover rounded-t-xl' />
            <div className='p-4'>
                <h3 className='text-lg font-semibold'>{item.Name}</h3>
                <p className='text-gray-700 mt-2'>Price: RS.{item.Price}</p>
                <p className='text-gray-700 mt-2'>{item.des}</p>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600'>ADD TO CART</button>
            </div>
        </div>
    ))}
</div>

</>

  )
}

export default ProductList
