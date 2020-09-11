import React from "react";
import "./cartPopoverItem.css";

export default function CartPopoverItem({ name, price, url }) {
  return (
    <div className="cart-popover-item-wrapper">
      <div>
        <img className="rounded" src={url} height="50px" width="50px" alt="" />
      </div>
      <div className="in-cart-item-name">{name}</div>
      <div className="in-cart-item-price">{price}</div>
    </div>
  );
}
