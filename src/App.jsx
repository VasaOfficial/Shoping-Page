import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Homepage";
import Navbar from "./components/NavBar/Navbar";
import CoinsShop from "./components/ShopPage/CoinsShop/CoinsShop";
import PaintingsShop from "./components/ShopPage/PaintingsShop/PaintingsShop";
import MasksShop from "./components/ShopPage/MaskShop/MaskShop";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ShopPage/CoinsShop" element={<CoinsShop />} />
        <Route path="/ShopPage/PaintingsShop" element={<PaintingsShop />} />
        <Route path="/ShopPage/MaskShop" element={<MasksShop />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
