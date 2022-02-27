import {
  ADD_TO_CART,
  CALL_API,
  CLEAR_FILTER,
  FILTER_PRODUCTS,
  IN_CATEGORY,
  SELECTED_PRODUCT,
  UPDATE_CART,
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
  let inCart = state.productInCart; ///old product in cart
  let product = action.payload; ///new product to add/update
  let updateCart = "";

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

    case IN_CATEGORY:
      return {
        ...state,
        inCategory: action.payload,
      };

    case ADD_TO_CART:
      updateCart = inCart.findIndex(
        (oldProduct) => oldProduct.id == product.id
      );

      if (updateCart != -1) {
        inCart[updateCart].quantity = Number(inCart[updateCart].quantity) + 1;
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

    case UPDATE_CART:
      updateCart = inCart.findIndex(
        (oldProduct) => oldProduct.id == product.id
      );

      if (updateCart != -1 && product.quantity != 0) {
        inCart[updateCart].quantity = product.quantity;
      }
      let newInCart = [];
      if (product.quantity == -1) {
        inCart.splice(updateCart, 1);
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
