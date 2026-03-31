import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Favourite from "./pages/Favourite";
import Deals from "./pages/Deals";
import Cart from "./pages/cart";


function App() {
  return (
    <div className="main flex flex-col min-h-screen ">
      {/* <header className="relative"> */}
        <Navbar />
      {/* </header> */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
