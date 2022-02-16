import { CALL_API, SELECTED_PRODUCT, FILTER_PRODUCTS} from "./constants";

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
