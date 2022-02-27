import { useContext, useRef } from "react";
import { StoreContext } from "../store";
import { updateCart } from "../store/actions";
import { Table } from "react-bootstrap";
import style from "./style/CartStyle.module.scss";

function Cart() {
  const [state, dispatch] = useContext(StoreContext);
  const products = state.productInCart;
  //console.log(products);

  const handleQuantity = (product, quantity) => {
    dispatch(
      updateCart({
        ...product,
        quantity: quantity,
      })
    );
  };

  const removeCart = (product) => {
    dispatch(
      updateCart({
        ...product,
        quantity: -1,
      })
    );
  };

  const handleTotal = () => {
    let total = 0;
    products.forEach((product) => {
      return (total += Number(product.quantity) * product.price);
    });
    return total.toFixed(2);
  };

  const refQuantity = useRef();

  return (
    <>
      <h1 style={{ marginTop: "100px" }}>Cart</h1>
      <div className={style.tableCart}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Trash</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              return (
                <tr className={style.tableRow} key={index}>
                  <td>{index + 1}</td>
                  <td className={style.title}>
                    <img className={style.img} src={product.image} />
                    {product.title}
                  </td>
                  <td>$ {product.price}</td>
                  <td>
                    <input
                      className={style.quantity}
                      ref={refQuantity}
                      type="number"
                      min={1}
                      value={product.quantity}
                      onChange={(e) => handleQuantity(product, e.target.value)}
                    />
                  </td>
                  <td>$ {product.price * product.quantity}</td>
                  <td>
                    <div
                      onClick={() => removeCart(product)}
                      className={style.trashIcon}
                    >
                      <i className="bx bx-trash"></i>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>TOTAL</td>
              <td className={style.totalPrice} colSpan={5}>
                $ {handleTotal()}
              </td>
            </tr>
          </tfoot>
        </Table>
      </div>
    </>
  );
}
export default Cart;
