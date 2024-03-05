import React from 'react'

const Heading = () => {
  return (
    <div className="p-4 text-center bg-white relative">
  <p className="font-italianno font-cursive text-pink-500 text-3xl">EXCLUSIVE PRODUCT</p>
  <h1 className="text-pink-500 text-4xl md:text-6xl"></h1>
  <h1 className="text-black font-bold text-4xl md:text-6xl">SHOP NOW</h1>
  <div className="absolute top-10 right-10 hidden md:block">
    {/* Content to be displayed only on medium and larger screens */}
    {/* <p className="text-lg">This content will be shown on medium and larger screens.</p> */}
  </div>
</div>
  

  )
}

export default Heading
