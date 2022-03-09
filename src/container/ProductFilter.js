import { useContext, useEffect } from "react";
import { StoreContext } from "../store";
import { callApi } from "../store/actions";
import { Link } from "react-router-dom";
import style from "./style/ProductFilterStyle.module.scss";
import axios from "axios";
import productsAPI from "../API";
import { Button, Spinner } from "react-bootstrap";

function ProductFilter() {
  const [state, dispatch] = useContext(StoreContext);
  const products = state.productFilter;

  const fetchProduct = async () => {
    const respone = await axios.get(productsAPI);
    dispatch(callApi(respone.data));
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className={style.listProduct}>
      <ul>
        {Object.keys(state.products).length === 0 ? (
          <Button
            // style={{
            //   position: "fixed",
            //   top: "50%",
            //   left: "50%",
            //   transform: "translate(-50%,-50%)",
            // }}
            variant="primary"
            disabled
          >
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        ) : (
          products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              style={{ color: "inherit", textDecoration: "inherit" }}
              key={product.id}
            >
              <li className={style.productItem} key={product.id}>
                <div className={style.productImg}>
                  <img src={product.image} alt="" />
                </div>
                <p className={style.productTitle}>{product.title}</p>
              </li>
            </Link>
          ))
        )}
      </ul>
    </div>
  );
}

export default ProductFilter;
