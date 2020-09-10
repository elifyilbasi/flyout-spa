import React from "react";
import Product from "./Product/Product";

export default function ProductList({ products }) {
  return (
    <div style={{ display: "flex" }}>
      {products.map((product) => {
        return <Product productItem={product} />;
      })}
    </div>
  );
}
