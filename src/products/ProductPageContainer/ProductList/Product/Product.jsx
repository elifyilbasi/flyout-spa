import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "reactstrap";
import "./product.css";

export default function Product({
  productItem,
  productAddedToCart,
  cartProducts,
  productRemovedFromCart,
  optionalComponents,
  showLoading,
  hideLoading,
}) {
  const onProductAddedToCart = (id) => {
    showLoading();
    productAddedToCart(id);
    setTimeout(() => {
      hideLoading();
    }, 500);
  };

  const onProductRemovedFromCart = (id) => {
    showLoading();
    productRemovedFromCart(id);
    setTimeout(() => {
      hideLoading();
    }, 500);
  };

  return (
    <div className="card sm-4 shadow-sm m-3">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal card-header-text">
          {productItem.name}
        </h4>
      </div>
      <div className="card-body">
        {optionalComponents.likeBadge && (
          <div className="product-item-likes-badge-wrapper">
            <FontAwesomeIcon icon={faHeart} size="2x" color="Tomato" />
            <Badge className="product-item-likes-badge" color="secondary">
              {productItem.likes}
            </Badge>
          </div>
        )}
        <h2 className="card-title pricing-card-title">
          <small className="text-muted">{productItem.price}</small>
        </h2>
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
            onClick={() => onProductRemovedFromCart(productItem.id)}
            type="button"
            className="btn btn-danger btn-lg w-100 mt-2"
          >
            Remove From Cart
          </button>
        ) : (
          <button
            onClick={() => onProductAddedToCart(productItem.id)}
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
