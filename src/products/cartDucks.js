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
  cartProducts: [],
};

const reducer = function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPES.productAddedToCart: {
      const itemToBeAdded = action.payload;
      const newList = [...state.cartProducts, itemToBeAdded];
      console.log(action.payload);
      return { ...state, cartProducts: newList };
    }
    case TYPES.productRemovedFromCart: {
      const removedItemId = action.payload;
      const newList = state.cartProducts.filter(
        (cartProductItem) => cartProductItem !== removedItemId
      );
      return { ...state, cartProducts: newList };
    }
    default: {
      return state;
    }
  }
};

export { reducer };
