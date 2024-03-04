import React from 'react'

const Compo = () => {
    return (
    //   <section className="p-70">
    //   <div className="w-full h-screen flex flex-col md:flex-row justify-center items-center bg-white shadow-lg rounded-lg px-40 mb-4  ">
    //  {/* <img src="https://ps-beautyshop.myshopify.com/cdn/shop/files/beauty_trand_1_a42f410a-0900-4e5f-9ea7-b05be96f5d9b_900x.png?v=1613681498" alt="Product Image" className="w-[70%] h-[70%] md:w-[100% ]  object-cover rounded-lg"/> */}
    //   <div className="ml-4 p-16 pt-20" >
    //     <h2 className="text-xl font-bold mb-2">BEAUTY TRENDS</h2>
    //     <p className="text-gray-600 font-semibold">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
    //   </div>
    // </div>
    // </section>

<section className="p-70 relative z-10">
  <div className="relative w-full h-screen flex flex-col md:flex-row justify-center items-center bg-white bg-opacity-50 shadow-lg rounded-lg px-40 mb-4 overflow-y-auto">
    {/* <img
    //   src="https://ps-beautyshop.myshopify.com/cdn/shop/files/beauty_trand_1_a42f410a-0900-4e5f-9ea7-b05be96f5d9b_900x.png?v=1613681498"
      alt="Product Image"
      className="w-[70%] h-[70%] md:w-[100%] md:h-auto object-cover rounded-lg md:sticky md:top-0"
    /> */}
    <div className="ml-4 p-16 pt-20 flex-1">
      <h2 className="text-xl font-bold mb-2">BEAUTY TRENDS</h2>
      <p className="text-gray-600 font-semibold">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
      </p>
      {/* Add more content if needed */}
    </div>
  </div>
</section>












    )
  }

export default Compo;
