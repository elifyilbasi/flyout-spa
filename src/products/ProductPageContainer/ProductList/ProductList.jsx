import React, { useEffect, useMemo } from "react";
import Product from "./Product/Product";
import mockProductList from "../../../products.json";

export default function ProductList({
  products,
  fetchProducts,
  selectedFilters,
}) {
  useEffect(() => {
    fetchProducts(mockProductList);
  }, [fetchProducts]);

  const filteredProducts = useMemo(() => {
    if (!products) {
      return products;
    }

    return products.filter((product) => {
      return (
        (selectedFilters.size.length === 0 ||
          selectedFilters.size.includes(product.size)) &&
        (selectedFilters.color.length === 0 ||
          selectedFilters.color.includes(product.color)) &&
        (selectedFilters.gender.length === 0 ||
          selectedFilters.gender.includes(product.gender))
      );
    });
  }, [products, selectedFilters]);

  return (
    <div style={{ display: "flex" }}>
      {filteredProducts &&
        filteredProducts.map((product) => {
          return <Product productItem={product} key={product.id} />;
        })}
    </div>
  );
}
