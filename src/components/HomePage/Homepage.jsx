import React from "react";
import { useNavigate } from "react-router-dom";
import "./homepage.css";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("./ShopPage/CoinsShop");
  };
  return (
    <div className="homepage">
      <div className="card" onClick={handleClick}>
        <h3>Ancient Coins</h3>
      </div>
      <div className="card">
        <h3>Paintings</h3>
      </div>
      <div className="card">
        <h3>Masks</h3>
      </div>
    </div>
  );
};

export default Home;
