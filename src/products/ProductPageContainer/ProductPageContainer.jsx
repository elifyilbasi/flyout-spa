import React from "react";
import ProductPage from "./ProductPage";
import FilterGroupContainer from "../filter/FilterGroupContainer";

export default function ProductPageContainer() {
  return (
    <div className="row">
      <FilterGroupContainer />
      <ProductPage />
    </div>
  );
}
