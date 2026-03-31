import React from 'react'
import './customCssComponents.css'
import { Link } from "react-router-dom";
function SingleCard({ h1, para, button, img, command,commandOnPage }) {
    return (
        // <div className='single-card-div'>
        <div className="card bg-dark text-white mt-[40px] mx-2 ">
            <img src={img} className="card-img h-[300px]" alt="..." />
            <div className="pl-6 card-img-overlay flex flex-column items-start justify-center gap-1 leading-none">
                <h1 className="card-title fs-1 leading-non font-semibold">{h1}</h1>
                <p className="card-text font-semibold">{para}</p>
                <button className="btn btn-light rounded mt-4 ">
                    
                        <Link to={command}>
                            {button}
                        </Link>

                    
                </button>

            </div>
        </div>
        // </div>
    )
}

export default SingleCard
