import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
function CardOfSec2({ img, para1, para2, span }) {
    return (
        <div className="card w-[260px] px-[21px] py-[11px] cursor-pointer  hover:font-semibold hover:scale-130 transition-transform flex flex-col justify-between">
            <img src={img} alt="" className='w-[100%]' />
            <p className='mt-[20px] text-[16px] leading-[22px]'>{para1}</p>
            <p className='font-semibold text-[25px]'>{para2} <sub className='font-light text-[18px] line-through'>{span}</sub></p>
            <button className="btn mt-[10px] rounded-[20px] flex justify-center items-center gap-x-[10px] bg-[#FFCE12]">Add to cart <FiShoppingCart className='text-[20px] font-semibold' /></button>
        </div>
    )
}

export default CardOfSec2
