// import { MyContext } from "../Context/ContextApi";
// import React, { useContext } from "react";
import React from "react";
import ShopCard from "./ShopCard";
// // import { Routes, Route } from "react-router-dom";
// // import All from "./All";
// // import Baby from "./Baby";
// // import Baba from "./Baba";
// // import Gents from "./Gents";
// // import Lady from "./Lady";
// // import Cars from "./Cars";
// // import Bikes from "./Bikes";
import BlinkingCard from "./BlinkingCard";

// function ShopDataDiv() {
//     const { products } = useContext(MyContext);
//     console.log(products.category);

//     return (
//         <div className="right-data-div w-[85%] flex flex-wrap flex-row gap-x-3 gap-y-5 rounded-3 py-[10px] justify-evenly">

//             {/* <Routes>
//                 <Route path="/shop/all" element={<All />} />
//                 <Route path="/shop/baby" element={<Baby />} />
//                 <Route path="/shop/baba" element={<Baba />} />
//                 <Route path="/shop/gents" element={<Gents />} />
//                 <Route path="/shop/lady" element={<Lady />} />
//                 <Route path="/shop/cars" element={<Cars />} />
//                 <Route path="/shop/bikes" element={<Bikes />} />
//             </Routes> */}
//             {products && products.length > 0 ? (
//                 products
//                     .filter((item) => item.category === "baby") // ← sirf 'baby' category ka data
//                     .map((item, id) => (
//                         <ShopCard
//                             key={id}
//                             img={item.img}
//                             para1={item.title}
//                             para2={item.realPrice}
//                             span={item.discountPrice}
//                         />
//                     ))
//             ) : (
//                 <div className="blink-data flex justify-between gap-x-2">
//                     <BlinkingCard />
//                     <BlinkingCard />
//                     <BlinkingCard />
//                 </div>
//             )}
//         </div>
//     );
// }

// export default ShopDataDiv;



export default function ShopDataDiv({ products, selectedCategory }) {
  // filter products by category
  const filtered =
    selectedCategory === "all"
      ? products
      : products.filter(
          (item) =>
            item.category &&
            item.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="w-[85%] flex flex-wrap gap-4 p-4">
      {filtered.length > 0 ? (
        filtered.map((item, id) => (
          <ShopCard
            key={id}
            img={item.img}
            para1={item.title}
            para2={item.realPrice}
            span={item.discountPrice}
          />
        ))
      ) : (
        <div className="flex gap-3">
          <BlinkingCard />
          <BlinkingCard />
          <BlinkingCard />
        </div>
      )}
    </div>
  );
}
