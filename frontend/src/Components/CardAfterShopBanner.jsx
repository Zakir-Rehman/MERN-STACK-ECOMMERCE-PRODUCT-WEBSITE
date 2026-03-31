import React from 'react'

function CardAfterShopBanner({h11,para,button,img}) {
  return (
      <div className="card bg-dark text-white w-[50%] max-lg:w-[100%]  ">
  <img src={img} className="card-img h-[350px] " alt="..."/>
  <div className="card-img-overlay flex flex-col items-start justify-end gap-2">
    <h1 className="card-title fs-1 font-semibold leading-none font-sans-serif">{h11}</h1>
    <p className="card-text font-semibold leading-none mb-2">{para}</p>
    <button className='btn btn-light'>{button}</button>
  </div>
</div>
  )
}

export default CardAfterShopBanner
