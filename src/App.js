import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home/home";
import ProductDisplay from "./screens/ProductDisplay";
import ProductDetails from "./screens/ProductDetails";
import Login from "./screens/Login";
import Otpvarify from "./screens/Otpvarify";
import LensPricing from './screens/LensPricing'
import Testing from './screens/Testing'
import ChekOutPage from './screens/ChekOutPage'

import "./App.css";

export const GlobleInfo = createContext();

function App() {
  const [productCount, setProductCount] = useState("0");
  const [checkoutData, setCheckoutData] = useState({}); // Store checkout data

  const getProductCount = (count) => {
    setProductCount(count);
    // console.log("Updated count from child:", count);
  };

  const updateProductCount = () => {
    try {
      const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];
      const length = cartItemsFromLocalStorage.length;
      setProductCount(length);
      console.log("Updated length in App.js", length);
    } catch (error) {
      console.error("Error updating product count:", error);
    }
  };

  useEffect(() => {
    // On component mount, set the initial product count
    updateProductCount();

    // Listen for storage changes
    const handleStorageChange = (event) => {
      if (event.key === "cart") {
        updateProductCount();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Save checkout data
  const saveCheckoutData = (data) => {
    setCheckoutData(data);
    console.log("Checkout Data Saved:", data); // Debugging purposes
  };

  return (
    <GlobleInfo.Provider
      value={{
        getProductCount,
        productCount,
        saveCheckoutData, // Pass this function to the context
        checkoutData, // Provide the checkout data
      }}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/lense/power/:product_id" element={<LensPricing />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/otp-varify" element={<Otpvarify />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/testing" element={<Testing />} />
          <Route exact path="/product-display/:category" element={<ProductDisplay />} />
          <Route exact path="/product-item/:product_id" element={<ProductDetails />} />
          <Route path="/ChekOutPage" element={<ChekOutPage />} />
          
        </Routes>
      </BrowserRouter>
    </GlobleInfo.Provider>
  );
}

export default App;
