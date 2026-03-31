import SecurityForSec2 from './SecurityForSec2'
import SingleCard from './SingleCard'
import CardOfSec2 from './CardOfSec2'
import CardAfterShopBanner from './CardAfterShopBanner'
import { MyContext } from "../Context/ContextApi";
import React, { useContext } from "react";
import BlinkingCard from './BlinkingCard';
import CartPopup from './CartPopup';
function Section2Imgs() {

    // const { categoriesPara,categoriesHead,dealsHead,dealsPara } = useContext(MyContext);
    const { categoriesData, products } = useContext(MyContext);
    // console.log(products)
    // let data = products.slice(0, 5);
    // console.log(data)
    return (
        <>
            <div className='flex mt-[100px] px-[20px]  rounded p-[38px]'>
                <SecurityForSec2 />
                <CartPopup />
            </div>
            {/* <label htmlFor="GotoSearch w-[100%]"> */}
            <SingleCard img='https://i.ebayimg.com/images/g/naMAAOSwgR9n0~rv/s-l1600.webp' button='Explore now' h1="There's a deal for you, too" para="Don't miss a chance to save on items you've been looking for." commandOnPage='GotoSearch' />
            {/* </label> */}
            <div className="mx-2   mt-[50px]">
                <h1 className='fs-1 ml-5  font-semibold'>Special Deal's</h1>
                <p className='font-semibold ml-5 mb-2'>Enjoy with special deal's.</p>
                <div className="specialDeals flex justify-evenly gap-y-5 rounded flex-wrap items-center ">
                    {products.length > 0 ? (
                        products.slice(0, 5).map((item, id) => {
                            return (
                                <CardOfSec2
                                    key={id}
                                    img={item.img}
                                    para1={item.title}
                                    para2={item.realPrice}
                                    span={item.discountPrice}
                                />
                            );
                        })
                    ) : (
                        <div className="blink-data flex justify-between gap-x-2">
                            <BlinkingCard />
                            <BlinkingCard />
                            <BlinkingCard />
                            <BlinkingCard />
                        </div>
                    )}
                </div>
            </div>
            <SingleCard img='https://i.ebayimg.com/images/g/eagAAOSwMTxl4Ygl/s-l1600.webp' h1="Fits your ride, every time" para="Get the right parts or your money back." button='Shop now' command='/shop' />
            <div className="div-1 flex flex-column mt-10 ">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-3 ml-3 text-center font-100 uppercase  leading-none">
                    Best quality is our identity
                </h1>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed ml-3 mb-4 fs-6  text-center leading-none">
                    High-performance car tire designed for durability, superior grip, and a smooth driving experience. Perfect for all road conditions with long-lasting tread life.
                </p>


                <div className="div-1-inner-div flex justify-evenly gap-2 mx-2 max-lg:flex-wrap max-lg:w-[100%]">
                    <CardAfterShopBanner img='https://images.unsplash.com/photo-1444947295498-07f60c19a4ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGlyZXxlbnwwfHwwfHx8MA%3D%3D' h11='Add tire installation to your order ' para='Have your new set installed locally by our network of experts' button='Shop top brands' />
                    <CardAfterShopBanner img='https://images.unsplash.com/photo-1556195332-95503f664ced?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyZHN8ZW58MHx8MHx8fDA%3D' h11='Collect with PSA Vault' para='Seamlessly buy, store, and sell with eBays official vault' button='Learn More' />
                </div>

            </div>
            <div className="mx-2   mt-[50px]">
                <h1 className='fs-1 ml-5  font-semibold'>{categoriesData.categoriesHead}</h1>
                <p className='font-semibold ml-5 mb-2'>{categoriesData.categoriesPara}</p>
                <div className="cards-div-categorie flex justify-between flex-wrap">
                    {products.length > 0 ? (
                        products.slice(0, 5).map((item, id) => {
                            return (
                                <CardOfSec2
                                    key={id}
                                    img={item.img}
                                    para1={item.title}
                                    para2={item.realPrice}
                                    span={item.discountPrice}
                                />
                            );
                        })
                    ) : (
                        <div className="blink-data flex justify-between gap-x-2">
                            <BlinkingCard />
                            <BlinkingCard />
                            <BlinkingCard />
                            <BlinkingCard />
                        </div>
                    )}
                </div>
            </div>
            <SingleCard img='https://images.unsplash.com/photo-1533134486753-c833f0ed4866?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFyayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000' h1="We have one of the best Categories." para=" Discover a wide range of product categories tailored to your needs ." button='Categories' command='/categories' />
            <div className="mx-2   mt-[50px]">
                <h1 className='fs-1 ml-5  font-semibold'>{categoriesData.dealsHead}</h1>
                <p className='font-semibold ml-5 mb-2'>{categoriesData.dealsPara}</p>
                <div className="specialDeals flex justify-evenly gap-y-5 rounded flex-wrap items-center ">
                    {products.length > 0 ? (
                        products.slice(0, 5).map((item, id) => {
                            return (
                                <CardOfSec2
                                    key={id}
                                    img={item.img}
                                    para1={item.title}
                                    para2={item.realPrice}
                                    span={item.discountPrice}
                                />
                            );
                        })
                    ) : (
                        <div className="blink-data flex justify-between gap-x-2">
                            <BlinkingCard />
                            <BlinkingCard />
                            <BlinkingCard />
                            <BlinkingCard />
                        </div>
                    )}

                    {/* <CardOfSec2 img='https://i.ebayimg.com/images/g/NQIAAeSwVRVowYdA/s-l500.webp' para1='BISSELL Steam Shot Handheld Steam' para2='$19.99' span='$39.99' />
                    <CardOfSec2 img='https://i.ebayimg.com/images/g/b9AAAOSwPRZnWi3t/s-l500.webp' para1='Apple iPhone 14 Pro Max 256GB Unlocked Very' para2='$504.99' span='$999.99' />
                    {products[0] ? (<CardOfSec2 img={products[0].img} para1={products[0].title} para2={products[0].realPrice} span={products[0].discountPrice} />) : null}
                    <CardOfSec2 img='https://i.ebayimg.com/images/g/AuQAAeSwBGRo27bi/s-l500.webp' para1='https://i.ebayimg.com/images/g/AuQAAeSwBGRo27bi/s-l500.webp' para2='$158.99' span='$269.9' />
                    <CardOfSec2 img='https://i.ebayimg.com/images/g/1EgAAOSwvk5mhIjo/s-l500.webp' para1='Fila Axilus 2 Energized Tennis Mens White' para2='$34.92' span='
$37.55' /> */}

                </div>
            </div>
            <SingleCard img='https://images.unsplash.com/photo-1533134486753-c833f0ed4866?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFyayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000' h1="We have a some best Deals for our customers." para={categoriesData.dealsPara} button='Deals' command='/deals' />
        </>
    )
}

export default Section2Imgs
