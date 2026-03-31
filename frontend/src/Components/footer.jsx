import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { BsBookHalf } from "react-icons/bs";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa";
import FotterCard from './FotterCard';
function footer() {
  let font = {
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 900,
    fontStyle: 'normal',

  };
  return (
    <>
      <FotterCard h1='Join with us' btn1='Login' btn2='Sign Up' />
      <nav className='flex flex-col mt-[40px] mb-0 border-top  pt-[5rem]'>
        <div className="footer text-black text-center py-4 flex px-2   max-lg:flex-col pt-[20px] ">
          <div className="left-div-footer w-[25%] pl-3 leading-1 max-lg:w-[100%] max-sm:justify-center">
            <Link to='/' className="fs-1 font-bold text-blue-600 cursor-pointer">Nextfly</Link>
            <p className='text-start'>Thank you for visiting Nextfly, where quality meets trust.
              May your every purchase bring comfort, joy, and blessings to your home.</p>
            <div className="icons flex justify-evenly w-[100%] mt-[20px]">
              <FaFacebook className='fs-2 hover:text-sky-500 hover:scale-150 hover:translate-y-5 transition-transform duration-300' />
              <RiInstagramFill className='fs-2 hover:text-orange-500 hover:scale-150 hover:translate-y-5 transition-transform duration-300' />
              <FaYoutube className='fs-2 hover:text-red-600 hover:scale-150 hover:translate-y-5 transition-transform duration-300' />
              <FaTiktok className='fs-2 hover:text-green-900 hover:scale-150 hover:translate-y-5 transition-transform duration-300' />
              <FaTwitter className='fs-2 hover:text-blue-500 hover:scale-150 hover:translate-y-5 transition-transform duration-300' />
            </div>
           <p className=' border py-[20px] px-[15px] w-max text-center rounded  mt-3 font-semibold' >Created by Zakir Rehman Mala </p>

          </div>
          <div className="right-div-footer flex w-[75%] justify-between max-lg:justify-evenly  max-lg:flex-wrap max-sm:flex-wrap max-lg:mt-[30px] max-lg:w-[100%] max-lg:text-wrap max-md:justify-between max-md:gap-y-[40px] max-md:pl-[10px] " >
            <div className="sec-1-right-div flex flex-column gap-3 items-start max-lg:justify-center  max-md:flex-row">
              <h1 className='fs-5 text-nowrap'>Routes of Nextfly</h1>
              <Link className='hover:text-orange-500 hove:font-semibold hover:scale-110 transition-transform duration-300 hover:-translate-x-5 flex gap-2 items-center' to='/'>Home <AiFillHome /></Link>
              <Link className='hover:text-orange-500 hove:font-semibold hover:scale-110 transition-transform duration-300 hover:-translate-x-5 flex gap-2 items-center' to='/shop'>Shop <FaCartShopping /></Link>
              <Link className='hover:text-orange-500 hove:font-semibold hover:scale-110 transition-transform duration-300 hover:-translate-x-5 flex gap-2 items-center' to='/categories'>Categories <BiSolidCategoryAlt /></Link>
              <Link className='hover:text-orange-500 hove:font-semibold hover:scale-110 transition-transform duration-300 hover:-translate-x-5 flex gap-2 items-center' to='/deals'>Deals <BsBookHalf /></Link>
              <Link className='hover:text-orange-500 hove:font-semibold hover:scale-110 transition-transform duration-300 hover:-translate-x-5 flex gap-2 items-center' to='/cart'>Cart <FaCartArrowDown /></Link>
            </div>
            <div className="sec-2-right-div  flex flex-column gap-3 items-start max-lg:justify-center max-lg:justify-center">
              <h1 className='fs-5 text-nowrap'>About / Company</h1>
              <a href="" className='hover:text-orange-500 hove:font-semibold hover:scale-110 transition-transform duration-300 hover:-translate-x-5'>About Us</a>
              <a href="" className='hover:text-orange-500 hove:font-semibold hover:scale-110 transition-transform duration-300 hover:-translate-x-5'>Contact Us </a>
              <a href="" className='hover:text-orange-500 hove:font-semibold hover:scale-110 transition-transform duration-300 hover:-translate-x-5'>Privacy Policy  </a>
              <a href="" className='hover:text-orange-500 hove:font-semibold hover:scale-110 transition-transform duration-300 hover:-translate-x-5'>Terms & Conditions </a>
              <a href="" className='hover:text-orange-500 hove:font-semibold hover:scale-110 transition-transform duration-300 hover:-translate-x-5'>Return & Refund Policy</a>
            </div>
            <div className="sec-3-right-div flex flex-column gap-3 items-start max-lg:justify-center max-lg:justify-center">
              <h1 className='fs-5 text-nowrap'>Customer Service</h1>
              <a href="" className='hover:text-orange-500 hove:font-semibold hover:scale-110 transition-transform duration-300 hover:-translate-x-5'>Help center</a>
              <a href="" className='hover:text-orange-500 hove:font-semibold hover:scale-110 transition-transform duration-300 hover:-translate-x-5'>Track Your Order</a>
              <a href="" className='hover:text-orange-500 hove:font-semibold hover:scale-110 transition-transform duration-300 hover:-translate-x-5'>Shipping Information </a>
              <a href="" className='hover:text-orange-500 hove:font-semibold hover:scale-110 transition-transform duration-300 hover:-translate-x-5'>Payment Methods  </a>
              <a href="" className='hover:text-orange-500 hove:font-semibold hover:scale-110 transition-transform duration-300 hover:-translate-x-5'>FAQs</a>
            </div>
            <div className="sec-4-right-div flex flex-column gap-3 items-start max-lg:justify-center max-lg:justify-center">
              <h1 className='fs-5 text-nowrap'>Follow Us / Social Media</h1>
              <a href="" className='hover:text-orange-500 hove:font-semibold hover:scale-110 transition-transform duration-300 hover:-translate-x-5 flex items-center gap-2'>Facebook <FaFacebook className='hover:text-sky-500 hover:scale-120' /></a>
              <a href="" className='hover:text-orange-500 hove:font-semibold hover:scale-110 transition-transform duration-300 hover:-translate-x-5 flex items-center gap-2'>Instagram <RiInstagramFill className='hover:text-orange-500 hover:scale-120' /></a>
              <a href="" className='hover:text-orange-500 hove:font-semibold hover:scale-110 transition-transform duration-300 hover:-translate-x-5 flex items-center gap-2'>Yourtube <FaYoutube className='hover:text-red-600 hover:scale-120' /></a>
              <a href="" className='hover:text-orange-500 hove:font-semibold hover:scale-110 transition-transform duration-300 hover:-translate-x-5 flex items-center gap-2'>Tiktok <FaTiktok className='hover:text-black hover:scale-120' /></a>
              <a href="" className='hover:text-orange-500 hove:font-semibold hover:scale-110 transition-transform duration-300 hover:-translate-x-5 flex items-center gap-2'>Twitter <FaTwitter className='hover:text-blue-500 hover:scale-120' /></a>
            </div>
          </div>
        </div>
        <h1 className='text-[#2563EB] text-[20vw] text-center uppercase leading-none first-letter:text-[orange]  first-letter:text-[25vw] pb-0' style={font}>Nextfly</h1>
      </nav>
    </>
    //     justify-content: space-between;
    // row-gap: 31px;
    // padding: 0 21px;
  )
}

export default footer
