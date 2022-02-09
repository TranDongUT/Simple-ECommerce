import { CALL_API, SELECTED_PRODUCT } from "./constants"

export const initState = {
    products: [],
    selectedProduct: ''
}

export function reducer(state, action){
    switch(action.type){
        case CALL_API:
            return{
                ...state,
                products: action.payload
            }
        case SELECTED_PRODUCT:
            return{
                ...state,
                selectedProduct: action.payload
            }
        default:
            throw new Error('invalid action')
    }
}