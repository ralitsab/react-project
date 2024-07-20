import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import { db } from "./firebase.config";
import { collection, getDocs, addDoc } from "@firebase/firestore";
import Home from "./components/HomePage/Home";
import Footer from "./components/Footer/Footer";
import ProductPage from "./components/product-page/ProductPage";
import LoginForm from "./components/account/login/LoginForm"
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<LoginForm/>} />
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path="/products" element={<Navigate to="/products/initialProductId" />} />
      </Routes>
      <Footer />
    </>
);
}
export default App;
