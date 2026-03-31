import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
function ShopCartSlideBar() {
    return (
        <div className='slide-bar-main-div fixed bg-[black] top-0 right-0 w-100'>
            <div className="slide-bar bg-[white] text-black">
                <div className="div-top-heading">
                    <p>
                        <FiShoppingCart className='text-[20px] font-semibold' /> Shopping Cart
                    </p>
                    <p>&time;</p>
                </div>
                <div className="item-div">
                    <img src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500" alt="" />
                    <p> Premium Wireless Headphones</p>
                    <p>$299.99</p>
                    <div className="incresser-div">
                        s
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ShopCartSlideBar
