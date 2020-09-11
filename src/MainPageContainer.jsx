import React from "react";

import ProductPageContainer from "./products/ProductPageContainer/ProductPageContainer";
import Header from "./header/Header";

export default function MainPageContainer() {
  return (
    <>
      <Header />
      <ProductPageContainer />
    </>
  );
}
