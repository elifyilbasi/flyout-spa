const TYPES = {
  productAddedToCart: "cart/productAddedToCart",
  productRemovedFromCart: "cart/productRemovedFromCart",
};

export const productAddedToCart = (productId) => ({
  type: TYPES.productAddedToCart,
  payload: productId,
});

export const productRemovedFromCart = (productId) => ({
  type: TYPES.productRemovedFromCart,
  payload: productId,
});

const INITIAL_STATE = {
  cartProducts: null,
};

const reducer = function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPES.productAddedToCart: {
      const addedItemId = action.payload;
      const newList = state.products.filter(
        (productItem) => productItem.id !== addedItemId
      );
      return { ...state, cartProducts: newList };
    }
    case TYPES.productRemovedFromCart: {
      const removedItemId = action.payload;
      const newList = state.cartProducts.filter(
        (cartProductItem) => cartProductItem.id !== removedItemId
      );
      return { ...state, cartProducts: newList };
    }
    default: {
      return state;
    }
  }
};

export { reducer };
