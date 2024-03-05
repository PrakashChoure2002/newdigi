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



const Home = () => {
  
    return (
    <>
    <div className="bg-Img relative z-10">
    <Carsole/>
    <BeautyImage/>
    <Heading/>
    <ActiveSlider/>
    <Heading/>
   <ProductList/>
        <Layer/>
        {/* <Assets/> */}
        <Heading/>

        <Bottom/>
        <NewsLetter/>

    </div>








  </>
  )
}

export default Home
