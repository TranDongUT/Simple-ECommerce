import { useContext } from "react";
import { StoreContext } from "../store";

function Cart(){

    const [state, dispatch] = useContext(StoreContext)
    const products = state.productInCart;
    console.log(products);

    return(
        <>
            <h1 style={{marginTop: '100px'}}>Cart</h1>
            <ul>
                
            </ul>
        </>
    )
}
export default Cart;