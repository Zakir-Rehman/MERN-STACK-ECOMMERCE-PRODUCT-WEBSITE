// import React from 'react'

// function ShopSlide() {
//     return (
        
//         <div className='w-[15%] '>
//             <h1 className='text-[1.3rem] pl-[5px]'>Department</h1>
//             <ol className="menu flex gap-x-5 flex-col px-[13px] ">
//                 <div className='flex gap-2'><input  className='' type="radio" name="filter" id="" />All</div>
//                 <div className='flex gap-2'><input value='baby'  className='' type="radio" name="filter" id="" />Baby</div>
//                 <div className='flex gap-2'><input  className='' type="radio" name="filter" id="" />Baba</div>
//                 <div className='flex gap-2'><input  className='' type="radio" name="filter" id="" />Gents</div>
//                 <div className='flex gap-2'><input  className='' type="radio" name="filter" id="" />Lady</div>
//                 <div className='flex gap-2'><input  className='' type="radio" name="filter" id="" />Cars</div>
//                 <div className='flex gap-2'><input  className='' type="radio" name="filter" id="" />Bikes</div>
//                 <div className='flex gap-2'><input  className='' type="radio" name="filter" id="" />Toys</div>
//                 <div className='flex gap-2'><input  className='' type="radio" name="filter" id="" />Books</div>
//                 <div className='flex gap-2'><input  className='' type="radio" name="filter" id="" />Electronics</div>
//                 <div className='flex gap-2'><input  className='' type="radio" name="filter" id="" />Mobile</div>
//                 <div className='flex gap-2'><input  className='' type="radio" name="filter" id="" />Laptop</div>
//                 <div className='flex gap-2'><input className='' type="radio" name="filter" id="" />Watches</div>
//                 <div className='flex gap-2'><input  className='' type="radio" name="filter" id="" />Jewellery</div>
//                 <div className='flex gap-2'><input className='' type="radio" name="filter" id="" />Perfumes</div>
//             </ol>
//         </div>
//     )
// }

// export default ShopSlide
// // import React, { useContext } from "react";
// // import { MyContext } from "../Context/contextApi2";

// // function ShopSlide() {
// //   const { selectedCategory, setSelectedCategory } = useContext(MyContext);

// //   const categories = ["All", "Baby", "Baba", "TV", "Bikes", "Car"];

// //   const handleCategoryChange = (category) => {
// //     setSelectedCategory(category.toLowerCase());
// //   };

// //   return (
// //     <div className="w-[15%] p-4 border-r border-gray-300">
// //       <h2 className="text-[1.3rem] mb-3">Department</h2>
// //       <ol className="flex flex-col gap-2">
// //         {categories.map((cat) => (
// //           <label key={cat} className="flex gap-2 items-center cursor-pointer">
// //             <input
// //               type="radio"
// //               name="filter"
// //               value={cat.toLowerCase()}
// //               checked={selectedCategory === cat.toLowerCase()}
// //               onChange={() => handleCategoryChange(cat)}
// //             />
// //             {cat}
// //           </label>
// //         ))}
// //       </ol>
// //     </div>
// //   );
// // }

// // export default ShopSlide;
/////////////////////////////////
// src/Components/ShopSlide.jsx
import React from "react";

export default function ShopSlide({ selectedCategory, setSelectedCategory }) {
  const categories = ["all","Monitors", "baby", "baba", "gents", "lady", "cars","bikes","toys","books","electronics","mobiles","laptop","watches","jewellery","perfumes", "bikes", "car"];

  return (
    <div className="w-[15%] p-4 border-r border-gray-300">
      <h2 className="text-[1.3rem] mb-3">Department</h2>
      <ol className="flex flex-col gap-2">
        {categories.map((cat) => (
          <label key={cat} className="flex gap-2 items-center cursor-pointer">
            <input
              type="radio"
              name="filter"
              value={cat}
              checked={selectedCategory === cat}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="accent-yellow-400"
            />
            <span className="capitalize">{cat}</span>
          </label>
        ))}
      </ol>
    </div>
  );
}
