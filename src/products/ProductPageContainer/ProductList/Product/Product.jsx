import React from "react";
import "./product.css";

export default function Product({
  productItem,
  productAddedToCart,
  products,
  cartProducts,
  productRemovedFromCart,
}) {
  return (
    <div className="card sm-4 shadow-sm m-3">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal card-header-text">
          {productItem.name}
        </h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">
          <small className="text-muted">{productItem.price}</small>
        </h1>
        <ul className="product-item-description mt-3 mb-4">
          <li>{productItem.gender}</li>
          <li>{productItem.color}</li>
        </ul>
        <img
          src={productItem.url}
          className="card-img-top rounded"
          alt={productItem.name}
        ></img>
        {cartProducts.includes(productItem.id) ? (
          <button
            onClick={() => productRemovedFromCart(productItem.id)}
            type="button"
            className="btn btn-danger btn-lg w-100 mt-2"
          >
            Remove From Cart
          </button>
        ) : (
          <button
            onClick={() => productAddedToCart(productItem.id)}
            type="button"
            className="btn btn-secondary btn-lg w-100 mt-2"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}
