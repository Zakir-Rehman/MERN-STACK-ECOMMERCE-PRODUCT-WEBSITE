import React from 'react'
import { TbLayoutGridAdd } from "react-icons/tb";
import './CardsofCard.css'
function CardsOfCard({ heading, para, logo }) {
    return (
        <div className="CARD-CUSTOM bg-[#0000005c] hover:bg-[#000] text-white hover:text-black  p-6 rounded-lg shadow-md transform transition-transform duration-200 ease-in-out  hover:scale-110 cursor-pointer outline-1-black outline-offset-1 " style={{ maxWidth: '300px'}}
        >
    <div className="card-body d-flex flex-column gap-3">
        <div className="fs-2 mb-2">{logo}</div>
        <h5 className="card-title fs-4 fw-semibold">{heading}</h5>
        <p className="card-text">
          {para}
        </p>
    </div>
        </div >
    )
}

export default CardsOfCard
