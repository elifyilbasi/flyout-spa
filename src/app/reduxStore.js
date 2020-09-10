import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as productsReducer } from "../products/productDucks";
import { reducer as cartReducer } from "../products/cartDucks";

const rootReducer = combineReducers({
  products: productsReducer,
  cartProducts: cartReducer,
});

export default createStore(rootReducer, composeWithDevTools());
