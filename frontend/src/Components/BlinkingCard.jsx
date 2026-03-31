import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
function BlinkingCard() {
    return (
        <div className="card w-[320px] px-[21px] py-[11px] flex flex-col justify-between animate-pulse">
            <div className="w-[100%] h-[200px] bg-gray-300 rounded-lg"></div>
            <p className="mt-[20px] h-[20px] bg-gray-300 w-[80%] rounded"></p>
            <p className="h-[20px] mt-[20px] bg-gray-300 w-[60%] rounded"></p>
            <p className="h-[20px] mt-[20px] bg-gray-300 w-[40%] rounded"></p>
            <button className="btn mt-[20px] rounded-[20px] flex justify-center items-center gap-x-[10px] bg-[#FFCE12] opacity-[0.4]">
                Add to cart <FiShoppingCart className="text-[20px] font-semibold" />
            </button>
        </div>
    )
}

export default BlinkingCard
