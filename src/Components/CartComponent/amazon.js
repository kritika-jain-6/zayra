import React from "react";
import list from "../data";
import Shopcart from "./shopcart.jsx";

const Amazon = ({ handleclick }) => {
  return (
    <section>
      {list.map((list) => (
        <Shopcart item={list} handleClick={handleclick} key={list.id} />
      ))}
    </section>
  );
};

export default Amazon;
