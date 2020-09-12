import React, { useEffect, useMemo } from "react";
import Firebase from "../../../firebase/firebaseConfig";
import ProductContainer from "./Product/ProductContainer";
import mockProductList from "../../../products.json";
import "./productList.css";

export default function ProductList({
  products,
  fetchProducts,
  selectedFilters,
  initializeOptionalComps,
}) {
  useEffect(() => {
    fetchProducts(mockProductList);
  }, [fetchProducts]);

  useEffect(() => {
    Firebase.getOptionalComponents().then((snapshot) => {
      const optionalComps = snapshot.val();
      initializeOptionalComps(optionalComps);
    });
  }, [initializeOptionalComps]);

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
    <div className="product-list">
      {filteredProducts &&
        filteredProducts.map((product) => {
          return <ProductContainer productItem={product} key={product.id} />;
        })}
    </div>
  );
}
