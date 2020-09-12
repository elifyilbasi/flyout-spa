import { connect } from "react-redux";
import Header from "./Header";

function mapStateToProps(state) {
  return {
    cartProducts: state.cartProducts.cartProducts,
    optionalComponents: state.optionalComponents.optionalComponents,
  };
}

export default connect(mapStateToProps)(Header);
