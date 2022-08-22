import React from "react";
import { Product } from "../component/Product";

export const Home = () => {
  return (
    <>
      <h2 className="heading">Welcome To The Redux ToolKit Store</h2>
      <section>
        <h3>PRODUCTS</h3>
        <Product />
      </section>
    </>
  );
};
