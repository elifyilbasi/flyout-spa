import React from "react";
import CardPopoverContainer from "../miniCart/CartPopoverContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "reactstrap";

export default function Header({ cartProducts }) {
  return (
    <div>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">Flyout SPA</h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <button id="Popover1" className="btn" type="button">
            {" "}
            <Badge className="cart-item-count-badge" color="secondary">
              {cartProducts.length}
            </Badge>
            <FontAwesomeIcon
              icon={faShoppingCart}
              color="Dodgerblue"
              size="2x"
            />
          </button>
        </nav>
        <CardPopoverContainer />
      </div>
    </div>
  );
}
