import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Homepage";
import Navbar from "./components/NavBar/Navbar";
import CoinsShop from "./components/ShopPage/CoinsShop";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ShopPage/CoinsShop" element={<CoinsShop />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
