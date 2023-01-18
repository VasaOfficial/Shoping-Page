import React from "react";
import "./masks.css";
import aztec from "../../../assets/MaskShopImg/aztec.jpg";
import tut from "../../../assets/MaskShopImg/tut.jpg";
import agamemnon from "../../../assets/MaskShopImg/agamemnon.jpg";

const MasksShop = () => {
  const products = [
    {
      id: 1,
      img: `${aztec}`,
      name: "The Aztec Mask",
      description: "Aztec mask of Xiuhtecuhtli from around 1500.",
      price: "170$",
    },
    {
      id: 2,
      img: `${tut}`,
      name: "Mask of Tutankhamun",
      description:
        "The mask of Tutankhamun is a gold mask of the 18th-dynasty ancient Egyptian pharaoh Tutankhamun and it was made around 1325 BC.",
      price: "1900$",
    },
    {
      id: 3,
      img: `${agamemnon}`,
      name: "Mask of Agamemnon",
      description:
        "Mask of Agamemnon is the name given to a gold funeral mask discovered at the ancient Greek site of Mycenae and it was made around 1500 BC.",
      price: "1600$",
    },
  ];

  return (
    <div className="mask-page">
      {products.map((product) => (
        <div key={product.id} className="mask-cards">
          <img src={product.img} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default MasksShop;