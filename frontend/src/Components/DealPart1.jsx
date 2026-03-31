import React from 'react'
import { useContext,useState } from 'react';
import DealPart2 from './DealPart2'
import { MyContext } from '../Context/ContextApi';
function DealPart1(
  // {selectedCategory,setSelectedCategory}
) {
  const { products } = useContext(MyContext);
  console.log(products)
  const [selectedCategory, setSelectedCategory] = useState("all");
  return (
    <section className='flex w-100 flex-col justify-center items-center py-3 font-[Poppins]'>
      <h1 className='text-[2rem]'>Nextfly Deal</h1>
      <DealPart2 selectedCategory={selectedCategory} products={products} />
    </section>
  )
}

export default DealPart1
