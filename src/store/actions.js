import {
  CALL_API,
  SELECTED_PRODUCT,
  FILTER_PRODUCTS,
  IN_CATEGORY,
  ADD_TO_CART,
  UPDATE_CART,
} from "./constants";

export const callApi = (payload) => ({
  type: CALL_API,
  payload,
});

export const selectedProduct = (payload) => ({
  type: SELECTED_PRODUCT,
  payload,
});

export const filterProducts = (payload) => ({
  type: FILTER_PRODUCTS,
  payload: payload.toString().toLowerCase(),
});

export const inCategory = (payload) => ({
  type: IN_CATEGORY,
  payload,
});

export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload,
});

export const updateCart = (payload) => ({
  type: UPDATE_CART,
  payload,
});
