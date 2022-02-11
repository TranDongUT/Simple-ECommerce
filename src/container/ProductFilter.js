import { useContext } from "react";
import { StoreContext } from "../store";
import {Link} from 'react-router-dom'
import style from "./ProductFilterStyle.module.scss";

function ProductFilter() {
  const [state, dispatch] = useContext(StoreContext);
  const { products } = state.productFilter;
  console.log(state.productFilter);
  return (
    <div className={style.listProduct}>
      <ul>
        {state.productFilter.map((product) => {
          if (product != null) {
            return (
              <Link to={`/product/${product.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <li className={style.productItem} key={product.id}>
                  <div className={style.productImg}>
                    <img src={product.image} />
                  </div>
                  <p className={style.productTitle}>{product.title}</p>
                </li>
              </Link>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default ProductFilter;