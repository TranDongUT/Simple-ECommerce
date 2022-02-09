import { CALL_API, SELECTED_PRODUCT } from "./constants";

export const callApi = (payload)=>({
    type: CALL_API,
    payload
})

export const selectedProduct = (payload)=>({
    type:SELECTED_PRODUCT,
    payload
})