import React from "react";
import ProductList from "./ProductList/ProductList";
import productsJson from "../../products.json";

export default function ProductPage() {
  console.log(productsJson);
  return (
    <div className="col-sm-8">
      <ProductList products={productsJson} />
    </div>
  );
}
