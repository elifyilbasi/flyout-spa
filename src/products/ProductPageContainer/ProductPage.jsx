import { connect } from "react-redux";
import ProductList from "./ProductList/ProductList";
import { productAddedToCart, productRemovedFromCart } from "../cartDucks";
import { fetchProducts } from "../productDucks";
import { initializeOptionalComps } from "./optionalComponetsDucks";

function mapStateToProps(state) {
  return {
    products: state.products.products,
    selectedFilters: state.products.selectedFilters,
    cartProducts: state.cartProducts.cartProducts,
  };
}

const mapDispatchToProps = {
  productAddedToCart,
  productRemovedFromCart,
  fetchProducts,
  initializeOptionalComps,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
