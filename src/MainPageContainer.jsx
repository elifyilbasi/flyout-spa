import React from "react";

import ProductPageContainer from "./products/ProductPageContainer/ProductPageContainer";
import HeaderContainer from "./header/HeaderContainer";

export default function MainPageContainer() {
  return (
    <>
      <HeaderContainer />
      <ProductPageContainer />
    </>
  );
}
