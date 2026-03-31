import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import './Navbar.css'
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#ffffffc0] shadow-sm sticky top-0 z-50 h-[80px] flex">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link
          to="/"
          className="text-xl font-bold text-blue-600"
        >
          Nextfly
        </Link>

        {/* Hamburger (Mobile) */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          <RxHamburgerMenu />
        </button>

        {/* Links + Search + Buttons */}
        <div
          className={`flex-col  lg:flex-row lg:flex items-center gap-6 lg:static absolute left-0 w-full lg:w-auto bg-transparent lg:bg-transparent transition-all duration-300 ${open ? "top-14" : "top-[-490px]"
            }`}
        >
          {/* Links */}
          <ul className="flex flex-col max-lg:bg-white lg:flex-row items-center gap-4 lg:gap-6 p-4 lg:p-0">
            <li>
              <Link className="hover:text-blue-600" to="/">Home</Link>
            </li>
            <li>
              <Link className="hover:text-blue-600" id="GotoShop" to="/shop">Shop</Link>
            </li>
            <li>
              <Link className="hover:text-blue-600" to="/deals">Deals</Link>
            </li>
            <li>
              <Link className="hover:text-blue-600" to="/favourite">Favourite</Link>
            </li>
            <li>
              <Link className="hover:text-blue-600 flex items-center gap-1" to="/cart">
                Cart <FiShoppingCart />
              </Link>
            </li>
          </ul>

          {/* Search */}
          <form className="flex items-center border rounded-lg px-2 py-1 w-full form-cus">
            <input
              type="search"
              placeholder="Search products..."
              className="outline-none px-2 flex-grow"
            />
            <IoSearchOutline className="text-blue-600 text-xl" />
          </form>

          {/* Auth Buttons */}
          <div className="btn-div">
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded"  >
              <button>

                Login
              </button>
            </Link>
            <Link
              to="/signup"
              className="border border-blue-600 text-blue-600  rounded-lg hover:bg-blue-50"
            >
              <button>
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
