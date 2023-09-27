import ActionTypes from "../constants/ActionTypes";
const intialState = {
  products: [],
};

const intialStateProduct = {
  product: {},
};
export const productReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (
  state = intialStateProduct,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, product: payload };
    case ActionTypes.REMOVED_SELECTED_PRODUCT:
      return { ...state, product: {} };
    default:
      return state;
  }
};
