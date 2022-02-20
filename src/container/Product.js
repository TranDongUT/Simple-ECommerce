import { Link } from "react-router-dom";
import { Col, Card, Button } from "react-bootstrap";
import style from "./style/ProductStyle.module.scss";
import { useContext } from "react";
import { StoreContext } from "../store";
import { addToCart } from "../store/actions";

function Product({ category }) {
  const [state, dispatch] = useContext(StoreContext);
  const products = category ? category : state.products;

  const handleAddtoCart = (e, product) => {
    e.preventDefault();
    dispatch(
      addToCart({
        ...product,
        quantity: 1,
      })
    );
  };

  return products.map((product) => (
    <Col key={product.id} className={style.productCol} sm>
      <Link
        to={`/product/${product.id}`}
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <div className={style.productItem}>
          <Card style={{ width: "18rem" }}>
            <div className={style.productImg}>
              <img variant="top" src={product.image} alt="" />
            </div>
            <Card.Body>
              <Card.Title>
                <p className={style.productTitle}>{product.title}</p>
              </Card.Title>
              <Card.Text>${product.price}</Card.Text>
              <Button
                onClick={(e) => handleAddtoCart(e, product)}
                variant="primary"
              >
                Add To Cart
              </Button>
            </Card.Body>
          </Card>
        </div>
      </Link>
    </Col>
  ));
}

export default Product;
