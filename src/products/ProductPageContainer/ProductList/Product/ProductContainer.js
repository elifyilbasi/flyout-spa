import { connect } from "react-redux";
import Product from "./Product";
import { productAddedToCart, productRemovedFromCart } from "../../../cartDucks";

function mapStateToProps(state) {
  return {
    products: state.products.products,
    cartProducts: state.cartProducts.cartProducts,
    optionalComponents: state.optionalComponents.optionalComponents,
  };
}

const mapDispatchToProps = {
  productAddedToCart,
  productRemovedFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
