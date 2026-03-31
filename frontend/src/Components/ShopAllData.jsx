import React from 'react'
import ShopSlide from './ShopSlide'
import ShopDataDiv from './ShopDataDiv'
import ShopCartSlideBar from './ShopCartSlideBar'

function ShopAllData() {
  return (
    <div className="main flex w-[100%] flex-col mt-[20px]">
      <div className="heading">
        <h1 className='text-center text-[1.5rem]'>Everything You Need, Right Here</h1>
        <p className='text-center px-[20px] pt-[5px] pb-[20px]'>Explore our wide range of high-quality products — from stylish clothing to everyday essentials. Whether you’re shopping for yourself or your loved ones, you’ll find something special for every taste and occasion. Enjoy the best prices and trusted quality, all in one place.</p>
      </div>
      <div className="content flex">
        <ShopSlide />
        <ShopDataDiv />
      </div>
        <ShopCartSlideBar/>
    </div>
  )
}

export default ShopAllData
