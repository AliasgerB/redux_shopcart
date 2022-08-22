import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux/es/exports";
import { add } from "../features/cartSlice";

export const Product = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);

  let axiosProduct = async () => {
    const axiosData = await axios.get("https://fakestoreapi.com/products");
    setProduct(axiosData.data);
  };
  useEffect(() => {
    axiosProduct();
  });

  // const addToCart = (items) => {
  //   dispatch(add(items));
  // };
  return (
    <>
      <div className="productsWrapper">
        {product.map((items, index) => {
          return (
            <div className="card" key={index}>
              <img src={items.image} alt="" />
              <h4>{items.title}</h4>
              <h5>{items.price}</h5>
              <button className="btn" onClick={() => dispatch(add(items))}>
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
