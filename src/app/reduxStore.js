import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as productsReducer } from "../products/productDucks";
import { reducer as cartReducer } from "../products/cartDucks";
import { reducer as optionalComponentsReducer } from "../products/ProductPageContainer/optionalComponetsDucks";

const rootReducer = combineReducers({
  products: productsReducer,
  cartProducts: cartReducer,
  optionalComponents: optionalComponentsReducer,
});

export default createStore(rootReducer, composeWithDevTools());
