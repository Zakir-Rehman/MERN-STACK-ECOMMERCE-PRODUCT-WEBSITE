import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';
function ShopCard({img ,para1,para2,span,idx}) {
 let cartButtonHandler = ()=>{
 console.log('done')
 }
    return (
        <div className="card w-[347px] h-max px-[21px] py-[11px] relative" key={idx} >
           <Link to='/favourited'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="absolute right-[18px] top-[15px] hover:scale-110 text-black bg-[#FFCE12] rounded-full shadow-[0_0_2px_7px_#FFCE12] [text-shadow:1px_1px_1px_white]" aria-hidden="true"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
           </Link>
            <img src={img} alt=""  className='w-[100%]' />
            <p className='mt-[20px] text-[21px] leading-[22px]'>{para1}</p>
            <p>10K+ bought in past month</p>
            <p className='font-semibold text-[25px]'>{para2} <sub className='font-light text-[18px] line-through'>{span}</sub></p>
            <p>Delivery : Thu, Oct 23</p>
            <p>Ships to Pakistan</p>
            <button onClick={cartButtonHandler} className="btn mt-[10px] rounded-[20px] flex justify-center items-center gap-x-[10px] bg-[#FFCE12]">Add to cart <FiShoppingCart className='text-[20px] font-semibold' /></button>
        </div>
    )
}

export default ShopCard





// import React, { useContext } from "react";
// import { FiShoppingCart } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import { MyContext } from "../Context/ContextApi"; // 👈 context import

// function ShopCard({ img, para1, para2, span, idx }) {
//   const { addToFavourite } = useContext(MyContext); // 👈 context function use

//   const handleFavouriteClick = async (e) => {
//     e.preventDefault(); // link navigate na kare jab click ho
//     await addToFavourite(idx); // backend se data fetch kar ke context me add
//   };
// a
//   return (
//     <div
//       className="card w-[347px] h-max px-[21px] py-[11px] relative"
//       key={idx}
//     >
//       {/* ❤️ FAVOURITE ICON */}
//       <Link to="/favourited" onClick={handleFavouriteClick}>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="absolute right-[18px] top-[15px] hover:scale-110 transition-transform duration-200 text-black bg-[#FFCE12] rounded-full shadow-[0_0_2px_7px_#FFCE12] [text-shadow:1px_1px_1px_white] p-[3px]"
//           aria-hidden="true"
//         >
//           <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
//         </svg>
//       </Link>

//       {/* 🖼 IMAGE + CONTENT */}
//       <img src={img} alt="" className="w-[100%]" />
//       <p className="mt-[20px] text-[21px] leading-[22px]">{para1}</p>
//       <p>10K+ bought in past month</p>
//       <p className="font-semibold text-[25px]">
//         {para2}{" "}
//         <sub className="font-light text-[18px] line-through">{span}</sub>
//       </p>
//       <p>Delivery : Thu, Oct 23</p>
//       <p>Ships to Pakistan</p>

//       {/* 🛒 BUTTON */}
//       <button className="btn mt-[10px] rounded-[20px] flex justify-center items-center gap-x-[10px] bg-[#FFCE12] hover:bg-[#e6b810] transition-colors duration-200">
//         Add to cart{" "}
//         <FiShoppingCart className="text-[20px] font-semibold" />
//       </button>
//     </div>
//   );
// }

// export default ShopCard;
