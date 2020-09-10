import { connect } from "react-redux";
import ProductList from "./ProductList/ProductList";
import { productAddedToCart, productRemovedFromCart } from "../cartDucks";
import { fetchProducts } from "../productDucks";

function mapStateToProps(state) {
  return { products: state.products.products };
}

const mapDispatchToProps = {
  productAddedToCart,
  productRemovedFromCart,
  fetchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
