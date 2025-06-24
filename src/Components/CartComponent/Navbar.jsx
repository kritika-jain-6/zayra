import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../styles/navbar.css";

function Navbar({ setshow, size }) {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setshow(true)}>
          My shop
        </span>
        <div className="cart" onClick={() => setshow(false)}>
          <span>
            <ShoppingCartIcon />
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
