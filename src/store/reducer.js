import {
  ADD_TO_CART,
  CALL_API,
  CLEAR_FILTER,
  FILTER_PRODUCTS,
  IN_CATEGORY,
  SELECTED_PRODUCT,
} from "./constants";

const productInCart = JSON.parse(localStorage.getItem("productInCart"));

export const initState = {
  products: [],
  selectedProduct: "",
  productFilter: [],
  inCategory: [],
  productInCart: productInCart ? productInCart : [],
};

export function reducer(state, action) {
  switch (action.type) {
    case CALL_API:
      return {
        ...state,
        products: action.payload,
      };
    case SELECTED_PRODUCT:
      console.log('ok');
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
    case IN_CATEGORY:
      return {
        ...state,
        inCategory: action.payload,
      };
    case ADD_TO_CART:
      let inCart = state.productInCart; ///old product in cart
      let product = action.payload; ///new product to add/update

      const updateCart = inCart.findIndex(
        (oldProduct) => oldProduct.id == product.id
      );

      if (updateCart != -1) {
        inCart[updateCart].quantity += 1;
      } else {
        inCart = [...inCart, product];
      }

      localStorage.setItem("productInCart", JSON.stringify(inCart));

      return {
        ...state,
        ///conver to array
        productInCart: Object.keys(inCart).map((key) => {
          return inCart[key];
        }),
      };
    default:
      throw new Error("invalid action");
  }
}
