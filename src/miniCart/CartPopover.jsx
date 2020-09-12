import React, { useState, useMemo } from "react";
import CartPopoverItem from "./CartPopoverItem";
import "./cartPopover.css";
import { Popover, PopoverHeader, PopoverBody } from "reactstrap";

export default function CartPopover({ products, cartProducts }) {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);

  const cardItems = useMemo(() => {
    return cartProducts.map((id) =>
      products.find((product) => product.id === id)
    );
  }, [products, cartProducts]);

  return (
    <div>
      <Popover
        placement="left"
        isOpen={popoverOpen}
        target="Popover1"
        toggle={toggle}
      >
        <PopoverHeader className="popover-header">Cart</PopoverHeader>
        <PopoverBody>
          {cartProducts.length > 0 ? (
            <ul className="popover-body-list-items">
              {cardItems.map((item) => {
                return (
                  <li className="popover-body-list-item">
                    <CartPopoverItem
                      name={item.name}
                      price={item.price}
                      url={item.url}
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>Cart is empty</p>
          )}
        </PopoverBody>
      </Popover>
    </div>
  );
}
