import React from 'react'
import Carsole from './Carsole'
import { Product } from './project/project'
import CarsoleProduct from './CarsoleProduct'
import BeautyImage from './BeautyImage'
import Layer from './Layer'
// import Assets from './Assets'
import Bottom from './Bottom'
import NewsLetter from './NewsLetter'



const Home = () => {
  
    return (
    <>
    <div className="bg-Img relative z-10">
    <Carsole/>
    <BeautyImage/>
    <CarsoleProduct/>
    <div className="flex flex-wrap items-center justify-between bg-white shadow-lg rounded-lg p-6 mb-4">
      {Product.map((p) => (
        <div key={p.id} className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg p-4">
            <img
              src={p.img}
              alt={p.Name}
              className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg"
              />
            <div className="mt-4 text-center">
              <p className="text-lg font-semibold">{p.Name}</p>
              <p className="text-gray-600">Rs. {p.Price}</p>
              <p className="text-sm text-gray-700 mt-2">{p.des}</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
        <Layer/>
        {/* <Assets/> */}
        <Bottom/>
        <NewsLetter/>

    </div>








  </>
  )
}

export default Home
