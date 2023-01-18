import React from "react";
import { useNavigate } from "react-router-dom";
import "./homepage.css";

const Home = () => {
  const navigate = useNavigate();

  // refacture this bullshit 
  const handleClickCoins = () => {
    navigate("./ShopPage/CoinsShop");
  };

  const handleClickPaintings = () => {
    navigate("./ShopPage/PaintingsShop");
  };

  const handleClickMask = () => {
    navigate("./ShopPage/MaskShop");
  };

  return (
    <div className="homepage">
      <div className="card" onClick={handleClickCoins}>
        <h3>Ancient Coins</h3>
      </div>
      <div className="card" onClick={handleClickPaintings}>
        <h3>Paintings</h3>
      </div>
      <div className="card" onClick={handleClickMask}>
        <h3>Masks</h3>
      </div>
    </div>
  );
};

export default Home;
