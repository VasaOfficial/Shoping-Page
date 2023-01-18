import React from "react";
import "./coins.css";
import roman from "../../../assets/CoinsShopImg/roman.jpg";
import spanish from "../../../assets/CoinsShopImg/spanish.jpg";
import chinese from "../../../assets/CoinsShopImg/chinese.jpg";

const CoinsShop = () => {
  const products = [
    {
      id: 1,
      img: `${roman}`,
      name: "Roman Coin",
      description:
        "This ancient gold Roman coin is a beautiful piece of history. It features the image of a powerful Roman emperor and its made of solid gold.",
      price: "2000$",
    },
    {
      id: 2,
      img: `${spanish}`,
      name: "Spanish Coin",
      description:
        "Spanish coin made of pure gold from 16th century is a treasure like no other. The coin dates back to the reign of Philip II.",
      price: "1200$",
    },
    {
      id: 3,
      img: `${chinese}`,
      name: "Chinese Coin",
      description: "Old Chinese coins of unknow origin.",
      price: "100$",
    },
  ];

  return (
    <div className="coin-page">
      {products.map((product) => (
        <div key={product.id} className="coin-cards">
          <img src={product.img} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CoinsShop;
