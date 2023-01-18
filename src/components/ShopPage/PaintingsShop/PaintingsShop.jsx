import React from "react";
import "./paintings.css";
import clocks from "../../../assets/PaintingsShopImg/clocks.jpg";
import night from "../../../assets/PaintingsShopImg/night.jpg";
import wave from "../../../assets/PaintingsShopImg/wave.png";

const PaintingsShop = () => {
  const products = [
    {
      id: 1,
      img: `${clocks}`,
      name: "The Persistence of Memory",
      description:
        "This painting is made by Salvador Dali and it is one of the most recognizable works of Surrealism.",
      price: "170$",
    },
    {
      id: 2,
      img: `${night}`,
      name: "The Starry Night",
      description:
        "The Starry Night is an oil-on-canvas painting by the Dutch Post-Impressionist painter Vincent van Gogh painted in June 1889 and depicts his asylum room.",
      price: "300$",
    },
    {
      id: 3,
      img: `${wave}`,
      name: "The Great Wave off Kanagawa",
      description:
        "The Great Wave off Kanagawa is a woodblock print by Japanese artist Hokusai, created in late 1831 during the Edo period of Japanese history.",
      price: "800$",
    },
  ];

  return (
    <div className="painting-page">
      {products.map((product) => (
        <div key={product.id} className="painting-cards">
          <img src={product.img} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default PaintingsShop;
