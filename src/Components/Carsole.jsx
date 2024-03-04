import React,{useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "../Style/swiper.css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/autoplay';

const Carsole = () => {
    const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  return (
    <>
    <Swiper 
    ref={swiperRef}
      
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper"
    onMouseEnter={handleMouseEnter}
        onClick={handleClick}
   
  >
    
    
    <SwiperSlide><img src='https://ps-beautyshop.myshopify.com/cdn/shop/files/Slider_banner_2_2ce7b884-55c4-4340-86b2-6ee5332c3356.png?v=1613696346'   
            alt='slide1'/></SwiperSlide>
    <SwiperSlide><img src='https://ps-beautyshop.myshopify.com/cdn/shop/files/Slider_banner_1_2bc6d970-e7ca-43c4-a86b-fc9b25020f62.png?v=1613696346' alt='slide2'/></SwiperSlide>
    <SwiperSlide><img src='https://ps-beautyshop.myshopify.com/cdn/shop/files/Slider_banner_1_2bc6d970-e7ca-43c4-a86b-fc9b25020f62.png?v=1613696346' alt='silde3' /></SwiperSlide>
    
  </Swiper>
    </>
  )
}

export default Carsole
