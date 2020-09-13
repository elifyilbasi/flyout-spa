import React from "react";
import "./cartPopoverItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default function CartPopoverItem({
  name,
  price,
  url,
  id,
  productRemovedFromCart,
}) {
  const onProductRemoveFromCart = () => {
    productRemovedFromCart(id);
  };
  return (
    <div className="cart-popover-item-wrapper">
      <div>
        <img className="rounded" src={url} height="50px" width="50px" alt="" />
      </div>
      <div className="in-cart-item-name">{name}</div>
      <div className="in-cart-item-price">{price}</div>
      <div className="in-cart-remove-from-button">
        <button id="Popover1" className="btn" type="button">
          {" "}
          <FontAwesomeIcon
            icon={faTimesCircle}
            onClick={onProductRemoveFromCart}
          />
        </button>
      </div>
    </div>
  );
}
