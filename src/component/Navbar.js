import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const Navbar = () => {
  const cart = useSelector((store) => store.cart);
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItem: "cenetr",
          justifyContent: "space-between",
        }}
      >
        <span className="logo">REDUX STORE</span>
        <div>
          <Link className="navLink" to="/">
            Home
          </Link>
          <Link className="navLink" to="/cart">
            Cart
          </Link>
          <span className="cartCount">Cart Item : {cart.length}</span>
        </div>
      </div>
    </>
  );
};
