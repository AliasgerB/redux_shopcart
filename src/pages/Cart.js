import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../features/cartSlice";

export const Cart = () => {
  const dispatch = useDispatch();
  const product = useSelector((store) => store.cart);
  return (
    <>
      <h3>CART</h3>
      <div className="cartWrapper">
        {product.map((items) => {
          return (
            <div className="cartCard" key={items.id}>
              <img src={items.image} alt="" />
              <h4>{items.title}</h4>
              <h5>{items.price}</h5>
              <button
                className="btn"
                onClick={() => dispatch(remove(items.id))}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
