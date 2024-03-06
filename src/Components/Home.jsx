import React from 'react'
import Carsole from './Carsole'
//  import { Product } from './project/project'
// import CarsoleProduct from './CarsoleProduct'
import BeautyImage from './BeautyImage'
import Layer from './Layer'
// import Assets from './Assets'
import Bottom from './Bottom'
import NewsLetter from './NewsLetter'
import ActiveSlider from './ActiveSlider'
 import ProductList from './ProductList'
import Heading from './Heading'
import Background from './Background'








const Home = () => {
  
    return (
    <>
  
   <div className="relative">
            <Background/>
            <div className="relative z-10">
                <Carsole/>
                <BeautyImage/>
                <Heading/>
                <ActiveSlider/>
                <Heading/>
                <ProductList/>
                <Layer/>
                <Heading/>
                <Bottom/>
                <NewsLetter/>
            </div>
        </div>
        
 








  </>
  )
}

export default Home
