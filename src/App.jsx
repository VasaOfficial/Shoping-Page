import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Homepage.jsx";
import Navbar from "./components/NavBar/Navbar.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
