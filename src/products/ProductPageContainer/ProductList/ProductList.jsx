import React, { useEffect } from "react";
import Product from "./Product/Product";
import mockProductList from "../../../products.json";

export default function ProductList({ products, fetchProducts }) {
  useEffect(() => {
    fetchProducts(mockProductList);
  }, [fetchProducts]);

  return (
    <div style={{ display: "flex" }}>
      {products &&
        products.map((product) => {
          return <Product productItem={product} key={product.id} />;
        })}
    </div>
  );
}
