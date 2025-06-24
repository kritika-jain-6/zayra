import React from "react";
import list from "../data";
import Shopcart from "./shopcart";

const Amazon = ({ handleclick }) => {
  return (
    <section>
      {list.map((list) => (
        <Shopcart item={list} handleclick={handleclick} key={list.id} />
      ))}
    </section>
  );
};

export default Amazon;
