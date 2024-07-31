import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import { db } from "./firebase.config";
import { collection, getDocs, addDoc } from "@firebase/firestore";
import Home from "./components/homepage/Home";
import Footer from "./components/footer/Footer";
import ProductPage from "./components/product-page/ProductPage";
import LoginForm from "./components/account/login/LoginForm"
import RegisterForm from "./components/account/register/RegisterForm";
import { AuthProvider } from "./context/authProvider";
import AccountDashboard from "./components/account/dashboard/AccountDashboard";
import PrivateRoute from "./components/private-route/PrivateRoute";


function App() {
  return (
    <>
    <AuthProvider>
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<LoginForm/>} />
      <Route path="/register" element={<RegisterForm/>} />
      <Route path="/products/:productId" element={<ProductPage />} />
      <Route path="/products" element={<Navigate to="/products/initialProductId" />} />
      <Route path="/account" element={<PrivateRoute Component={AccountDashboard} />} />
      </Routes>
      <Footer />
      </AuthProvider>
    </>    
);
}
export default App;
