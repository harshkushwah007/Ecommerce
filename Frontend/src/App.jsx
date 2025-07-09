import React from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Product from "./Pages/Product";
import ProductDetail from "./Pages/ProductDetail";
import Checkout from "./Pages/Checkout";
import Order from "./Pages/Order";
import Login from "./Pages/SignUp";
import Signup from "./Components/Signup/AuthSection";
import { CartProvider } from "./Components/Cart/CartContext/CartContext";

const App = () => {
  return (
    <div>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </CartProvider>
    </div>
  );
};

export default App;
