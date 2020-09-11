import { connect } from "react-redux";
import CartPopover from "../miniCart/CartPopover";
import {
  productAddedToCart,
  productRemovedFromCart,
} from "../products/cartDucks";

function mapStateToProps(state) {
  return {
    products: state.products.products,
    cartProducts: state.cartProducts.cartProducts,
  };
}

const mapDispatchToProps = {
  productAddedToCart,
  productRemovedFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPopover);
