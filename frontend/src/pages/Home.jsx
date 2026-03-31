import './Home.css'
import CardsOfCard from '../Components/CardsOfCard'
import { FaRegClone } from "react-icons/fa6";
import { GrShieldSecurity } from "react-icons/gr";
import { GoFileSymlinkFile } from "react-icons/go";
import { HiViewGridAdd } from "react-icons/hi";
import Section2Imgs from '../Components/Section2Imgs'; 
import {MyContext} from '../Context/ContextApi';
import { useContext } from 'react';
export default function Home() {
  let {products} = useContext(MyContext)
  let image = {
    backgroundImage: "url('https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "540px",
    width: "100%"
  }

  // let searchBar = document.querySelector('#GotoSearch')
  // searchBar.addEventListener('click', () => {
  //   console.log(searchBar.value)
  // })
  return (
    <div className="main">
      <div className="card" style={image}>
        <div className="card-img-overlay card-inner">
          <h1 className="font-montserrat font-bold text-white 
               text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
               tracking-wide leading-snug drop-shadow-lg mb-6 text-center">
            Explore millions of offerings
          </h1>

          <div className="search-box">
            <form action="/" className='flex justify-center w-100 items-center'>
              <input type="text" id='GotoSearch' placeholder="Search here..." />
              <button className='btn btn-primary h-100 fw-bold'>Search</button>
            </form>
          </div>
          <div className="cards-div flex-wrap flex lg:justify-center max-sm:justify-center items-center font-semibold justify-between mt-[100px] gap-[25px]">
            <label htmlFor="GotoSearch"> <CardsOfCard logo={<HiViewGridAdd />} heading='Millions of business offerings' para='Explore products and suppliers for your business from millions of offerings worldwide.' /></label>
            <label htmlFor=""> <CardsOfCard logo={<GrShieldSecurity />} heading='Assured quality and transactions' para='Ensure production quality from verified suppliers, with your orders protected from payment to delivery.' /></label>
            <label htmlFor=""><CardsOfCard logo={<GoFileSymlinkFile />} heading='One-stop trading solution' para='Order seamlessly from product/supplier search to order management, payment, and fulfillment.' /></label>
            <label htmlFor=""><CardsOfCard logo={<FaRegClone />} heading='Tailored trading experience' para='Get curated benefits, such as exclusive discounts, enhanced protection, and extra support, to help grow your business every step of the way.' /></label>
          </div>
        </div>


      </div>
      <div className="section-2">
        <Section2Imgs />
      </div>
    </div>
  )
};
