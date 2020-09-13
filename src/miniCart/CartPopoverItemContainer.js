import { connect } from "react-redux";
import CartPopoverItem from "./CartPopoverItem";
import { productRemovedFromCart } from "../products/cartDucks";

function mapStateToProps(state) {
  return {
    products: state.products.products,
    cartProducts: state.cartProducts.cartProducts,
  };
}

const mapDispatchToProps = {
  productRemovedFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPopoverItem);
