import React, { useState } from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { IoIosCloseCircle } from "react-icons/io";
function CartPopup() {
    const [count, setCount] = useState(1);
    return (

        <div className='hidden fixed top-0 left-0 bg-[#ffffff00] z-[200] w-100 h-100  backdrop-blur-[18px]'>

            <div className='w-[387px] h-100 bg-[white] absolute right-0 '>
                <div className='flex justify-between mt-[20px] items-center px-3 '>
                    <div className='flex gap-3 items-center'>
                        <FiShoppingCart className='text-[20px]' />
                        <p className='text-[25px]'>
                            Shopping Cart
                        </p>
                        <p>3</p>
                    </div>
                    <IoIosCloseCircle className='text-[20px]' />
                </div>
                <div className="flex h-[100px] mt-[20px] gap-x-2 px-2 ">
                    <img width='100' className='rounded-[5px]' src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500" alt="" />
                    <div className="flex flex-col gap-y-1">
                        <h2>Premium Wireless Headphones</h2>
                        <p>$299.99</p>
                        <div className="flex items-center border rounded overflow-hidden w-[100px] h-[40px]">
                            <button
                                onClick={() => setCount(count > 1 ? count - 1 : 1)}
                                className="bg-white hover:bg-[orange] text-black  text-xl w-[35px] h-full flex justify-center items-center"
                            >
                                -
                            </button>

                            <div className="flex-1 text-center text-[16px] font-semibold">{count}</div>

                            <button
                                onClick={() => setCount(count + 1)}
                                className="bg-white hover:bg-[orange] text-black border-l text-xl w-[35px] h-full flex justify-center items-center"
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPopup
