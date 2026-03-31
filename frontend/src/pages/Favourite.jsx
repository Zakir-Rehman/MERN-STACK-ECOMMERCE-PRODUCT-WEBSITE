// import React, { useContext } from "react";
// import { MyContext } from "../Context/ContextApi";


function Favourite() {
    //  const { favourites } = useContext(MyContext); // 
  return (
    <div className='favourite-div pl-[30px] pt-[20px] font-sans-serif'>
     <h1 className='text-[2rem] font-roboto font-bold'>My Wishlist</h1>
     <p className='text-[1.1rem] font-light opacity-[0.7] my-[7px]'>1 items saved</p>
      {/* {favourites.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg p-3 shadow hover:shadow-lg transition-shadow duration-200 bg-white"
            >
              <img
                src={item.img}
                alt={item.para1}
                className="w-full h-[200px] object-cover rounded-lg"
              />
              <p className="mt-3 text-lg font-semibold">{item.para1}</p>
              <p className="text-gray-600">{item.para2}</p>
              <p className="text-[#FFCE12] font-bold mt-2">
                {item.price || "Price N/A"}
              </p>
            </div>
          ))} */}
    </div>
  )
}

export default Favourite
