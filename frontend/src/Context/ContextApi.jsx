// src/Context/ContextApi.jsx
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MyContext = createContext();

export default function ContextApi({ children }) {
  const [products, setProducts] = useState([]);
  const [favourites, setFavourites] = useState([]);

  // ✅ Products fetch
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res1 = await axios.get("http://localhost:5050/");
        setProducts(res1.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  // ✅ Favourites add karne ka function (useEffect ke bahar)
  const addToFavourite = async (idx) => {
    try {
      const res = await fetch(`http://localhost:5000/products/${idx}`);
      const data = await res.json();

      const exists = favourites.find((item) => item._id === data._id);
      if (!exists) {
        setFavourites((prev) => [...prev, data]);
        console.log("✅ Added to favourites:", data);
      } else {
        console.log("⚠️ Already in favourites");
      }
    } catch (err) {
      console.error("Error adding to favourites:", err);
    }
  };

  const categoriesData = {
    categoriesHead: "Check Special Categories",
    categoriesPara: "Our special categories is available, try.",
    dealsHead: "Special Deal's for a specific time",
    dealsPara:
      "Discover amazing deals and discounts on your favorite products — shop smart and save more every day!",
  };

  // ✅ Provide addToFavourite + favourites
  return (
    <MyContext.Provider
      value={{
        categoriesData,
        products,
        favourites,
        addToFavourite, // 👈 yeh zaroor include kar
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
