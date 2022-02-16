import {
  CALL_API,
  CLEAR_FILTER,
  FILTER_PRODUCTS,
  SELECTED_PRODUCT,
} from "./constants";

export const initState = {
  products: [],
  selectedProduct: "",
  productFilter: [],
  inCategory: [],
};

export function reducer(state, action) {
  switch (action.type) {
    case CALL_API:
      return {
        ...state,
        products: action.payload,
      };
    case SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      };
    case FILTER_PRODUCTS:
      const fill = [...state.products].filter((product) => {
        return (
          product.title.toString().toLowerCase().includes(action.payload) ||
          product.price.toString().toLowerCase().includes(action.payload)
        );
      });
      return {
        ...state,
        productFilter: [...fill],
      };
    default:
      throw new Error("invalid action");
  }
}
