import React from "react";

export default function Product({ productItem, onAddToCart }) {
  return (
    <div className="card sm-4 shadow-sm m-3">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">{productItem.name}</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">
          <small className="text-muted">{productItem.price}</small>
        </h1>
        <ul className="list-unstyled mt-3 mb-4">
          <li>10 users included</li>
          <li>2 GB of storage</li>
        </ul>
        <img
          src={productItem.url}
          className="card-img-top"
          alt={productItem.name}
        ></img>
        <button
          onClick={() => onAddToCart(productItem.id)}
          type="button"
          className="btn btn-lg btn-block btn-outline-primary"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
