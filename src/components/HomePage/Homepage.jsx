import React from "react";
import { useNavigate } from "react-router-dom";
import "./homepage.css";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(`./ShopPage/${route}`);
  };

  return (
    <div className="homepage">
      <div className="card" onClick={() => handleClick("CoinsShop")}>
        <h3>Ancient Coins</h3>
      </div>
      <div className="card" onClick={() => handleClick("PaintingsShop")}>
        <h3>Paintings</h3>
      </div>
      <div className="card" onClick={() => handleClick("MaskShop")}>
        <h3>Masks</h3>
      </div>
    </div>
  );
};

export default Home;
