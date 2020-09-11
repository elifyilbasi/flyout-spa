import React, { useState, useMemo } from "react";
import { Popover, PopoverHeader, PopoverBody } from "reactstrap";

export default function CartPopover({
  products,
  cartProducts,
  productRemovedFromCart,
}) {
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
        placement="bottom"
        isOpen={popoverOpen}
        target="Popover1"
        toggle={toggle}
      >
        <PopoverHeader>Popover Title</PopoverHeader>
        <PopoverBody>
          {cardItems.map((item) => {
            return <p>{item.name}</p>;
          })}
        </PopoverBody>
      </Popover>
    </div>
  );
}
