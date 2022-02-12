import { useContext } from "react";
import { StoreContext } from "../store";
import { Link } from "react-router-dom";
import style from "./ProductFilterStyle.module.scss";

function ProductFilter() {
  const [state] = useContext(StoreContext);
  const products = state.productFilter;
  return (
    <div className={style.listProduct}>
      <ul>
        {products.map((product) => (
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
        ))}
      </ul>
    </div>
  );
}

export default ProductFilter;
