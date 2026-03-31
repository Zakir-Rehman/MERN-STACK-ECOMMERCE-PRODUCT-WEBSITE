// src/Context/ContextApi.jsx
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MyContext = createContext();

export default function ContextApi({ children }) {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all"); // <-- selected category state

  // ✅ API se data fetch
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5050/");
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  // ✅ Category ke hisaab se filter karo
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(
          (item) =>
            item.category?.toLowerCase() === selectedCategory.toLowerCase()
        );

  const categoriesData = {
    categoriesHead: "Check Special Categories",
    categoriesPara: "Our special categories is available. Try them!",
    dealsHead: "Special Deals for a specific time",
    dealsPara:
      "Discover amazing deals and discounts on your favorite products — shop smart and save more every day!",
  };

  return (
    <MyContext.Provider
      value={{
        categoriesData,
        products,
        filteredProducts, // ✅ filtered products provide
        selectedCategory,
        setSelectedCategory, // ✅ to change category from other components
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
