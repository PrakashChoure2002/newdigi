import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoClose, IoSettingsOutline } from "react-icons/io5";
import { CiShoppingBasket } from "react-icons/ci";
import { IoCall } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineMenu } from 'react-icons/ai';
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
// import Cart from './Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
 import { useSelector } from 'react-redux';
//  import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
     const Selector=useSelector(state=>state.cart)
    const [toggle, settoggle] = useState(false)

    const [isOpen, setIsOpen] = useState(false);

    const openDropdown = () => {
        setIsOpen(true);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <div className='bg-[#FFFFFF] relative z-10'>
            <div className="hidden md:flex justify-between px-[100px] py-2 bg-[#F8F8F8]  cursor-pointer">
            <div className="flex gap-6">
                    <h5 className='text-sm'>Announce something here</h5>
                    <h5 className='text-sm'><IoCall className='inline-block mr-1 text-pink-400' /> CALL US: +918319384910</h5>
                </div>
                <div className="flex gap-3 text-sm text-[#9e9d9d]">
                    <h5> <FaHeart className='inline-block mr-1 text-pink-400 cursor-pointer' /> Wishlist </h5>
                    <div className="relative cursor-pointer" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
                        <h5><MdAccountCircle className='inline-block mr-1 text-pink-400 cursor-pointer' /> My Account <IoIosArrowDown className='inline-block cursor-pointer' /></h5>
                        {isOpen && (
                            <div className="absolute z-10 mt-2 w-32 text-center rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <a href="#" className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" role="menuitem">Login</a>
                                    <a href="#" className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" role="menuitem">Register</a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="max-w-full py-3 flex items-center justify-between px-2  md:px-[100px] ">
                <div className="logo">
                    <img className='w-[100px] md:w-[200px]' src='/' alt="" />
                </div>
                <div className="links">
                    <ul className={`gap-14 capitalize text-lg ${toggle ? 'block' : 'hidden'} md:flex cursor-pointer`}>
                   <Link to="/"> <li className='p-5 text-black'>home</li></Link>
                        <li className='p-5'>shop</li>
                        <li className='p-5'>product</li>
                        <li className='p-5'>features</li>
                        <li className='p-5'>pages</li>
                        <li className='p-5'>blog</li>
                    </ul>
                    <div className="md:hidden">
                        {toggle ? <IoClose onClick={() => settoggle(!toggle)} className='text-black text-2xl' />
                            : <AiOutlineMenu onClick={() => settoggle(!toggle)} className='text-black text-2xl' />
                        }
                    </div>
                </div>
                <div className="flex items-center justify-center text-2xl gap-3 cursor-pointer">
                    <CiSearch />
                    <IoSettingsOutline />
                    {/* <FaShoppingCart /> */}
                    <Link to="/cart" className="flex items-center gap-1 text-black">
  <FontAwesomeIcon icon={faShoppingCart} />
  <span className="text-sm ml text-black">{Selector.length}</span>
</Link>
                {/* <Link to ={"/cart"} className="flex items-center gap-1">  <FaShoppingCart /></Link><span className='text-sm ml'>{Selector.length}</span>  */}
                    
                </div>
            </div>
        </div>
    );
}

export default Navbar;
