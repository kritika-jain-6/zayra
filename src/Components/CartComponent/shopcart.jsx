import React from "react";
import "../styles/shopcart.css";

function ShopCart({ item, handleClick }) {
  if (!item) return null;

  const { title, price, img } = item;

  return (
    <div className="cards">
      <div className="image_box">
        <img className="imgbottle" src={img} alt={title} />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>Price: $ {price}</p>
        <button onClick={() => handleClick(item)}>Add to cart</button>
      </div>
    </div>
  );
}

export default ShopCart;
