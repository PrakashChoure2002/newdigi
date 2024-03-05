import React from 'react'

const NewsLetter = () => {
  return (
    <section className=" bg-left p-8 bg-white">
  <div className="m-4 grid grid-cols-1 gap-3 md:grid-cols-2">
    <div className="">
      <img className='w-[40%] h-[80%] object-cover' src="https://ps-beautyshop.myshopify.com/cdn/shop/files/eyes_image_1.png?v=1613681484"/>
    </div>
    <div className="flex flex-col items-start justify-center">
      <h4 className="text-left text-5xl mt-2">Sale up to 20% off for</h4>
      <h2 className="text-left text-2xl mt-2">Join Our Newsletter</h2>
      <div className="flex mt-2">
        <input className="border border-gray-300 rounded p-1 mr-2 flex-grow" type="text" inputmode="email" placeholder="enter your email"/>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">subscribe</button>
      </div>
    </div>
  </div>
</section>


  )
}

export default NewsLetter
