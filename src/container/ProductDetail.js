import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../store";
import axios from "axios";
import productAPI from "../API";
import { Col, Row, Button, Spinner } from "react-bootstrap";
import style from "./ProductDetailStyle.module.scss";
import { selectedProduct } from "../store/actions";

function ProductDetail() {
  const { productId } = useParams();
  //console.log(productId);

  const [state, dispatch] = useContext(StoreContext);
  const { category, description, id, image, price, rating, title } =
    state.selectedProduct;

  const fetchProductDetail = async () => {
    const respone = await axios.get(`${productAPI}/${productId}`);
    dispatch(selectedProduct(respone.data));
  };

  useEffect(() => {
    if (productId && productId != "") {
      fetchProductDetail();
    }
    return () => {
      //clean up function
      dispatch(selectedProduct(''));
    };
  }, [productId]);

  return (
    <>
        <h2 style={{marginTop: '20px'}}>Product Detail</h2>
        {Object.keys(state.selectedProduct).length === 0 ? (
            <Button variant="primary" disabled>
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
            <div className={style.product}>
            <Row>
            <Col sm={6}>
                <div className={style.productImg}>
                <img src={image} />
                </div>
            </Col>
            <Col sm={6}>
                <div className={style.productDetail}>
                <h4 className={style.productDetail, style.productCategory}>{category}</h4>
                <h2 className={style.productDetail, style.productTitle}>{title}</h2>
                <p className={style.productDetail, style.productDes}>{description}</p>
                <h1>${price}</h1>
                <Button onClick={e => e.preventDefault()} variant="primary">Add To Cart</Button>
                </div>
            </Col>
            </Row>
        </div>
        )}
    </>
  );
}

export default ProductDetail;
