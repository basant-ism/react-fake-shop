import { productReducer, selectedProductReducer } from "./reducers";
import { combineReducers } from "redux";

const reducer = combineReducers({
  allProducts: productReducer,
  selectedProduct: selectedProductReducer,
});

export default reducer;
