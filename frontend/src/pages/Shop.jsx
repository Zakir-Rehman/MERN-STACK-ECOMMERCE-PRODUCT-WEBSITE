// import { MyContext } from "../Context/ContextApi";
// import React, { useContext } from "react";
// import CardOfSec2 from "../Components/CardOfSec2";
// import ShopAllData from "../Components/ShopAllData";
// export default function Shop() {
//   const { categoriesData, products } = useContext(MyContext);
//   console.log(products)
//   return (
//     <div className="cards-div-categorie flex justify-between flex-wrap">
//       <ShopAllData/>
//       {/* {products.length > 0 ?
//         (
//           products.map((item, id) => {
//             return (
//               <CardOfSec2
//                 key={id}
//                 img={item.img}
//                 para1={item.title}
//                 para2={item.realPrice}
//                 span={item.discountPrice}
//               />
//             );
//           })
//         ) : null} */}
//     </div>
//   );
// }
// src/Pages/Shop.jsx
import { MyContext } from "../Context/ContextApi";
import React, { useContext, useState } from "react";
import ShopDataDiv from "../Components/ShopDataDiv";
import ShopSlide from "../Components/ShopSlide"; // left radios

export default function Shop() {
  const { products } = useContext(MyContext);
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="flex w-full">
      
      {/* Left side: radios */}
      
      <ShopSlide
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Right side: filtered data */}
      <ShopDataDiv
        products={products}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}
