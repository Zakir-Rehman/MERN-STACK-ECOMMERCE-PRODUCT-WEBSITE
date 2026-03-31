import React from 'react'
import BlinkingCard from './BlinkingCard';
import ShopCard from './ShopCard';  
function DealPart2({ products, selectedCategory }) {

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
          <BlinkingCard/>
          <BlinkingCard/>
          <BlinkingCard/>
        </div>
      )}
    </div>
  )
}

export default DealPart2
