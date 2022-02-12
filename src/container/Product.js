import { Link } from "react-router-dom";
import { Col, Card, Button } from "react-bootstrap";
import style from "./ProductStyle.module.scss";
import { useContext } from "react";
import { StoreContext } from "../store";

function Product() {
  const [state] = useContext(StoreContext);
  const { products } = state;

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
              <Button onClick={(e) => e.preventDefault()} variant="primary">
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
