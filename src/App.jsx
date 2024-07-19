import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc } from "@firebase/firestore";
import Home from "./components/HomePage/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
