import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../store";
import axios from "axios";
import productAPI from "../API";
import { Col, Row, Button, Spinner } from "react-bootstrap";
import style from "./style/ProductDetailStyle.module.scss";
import { selectedProduct, clearFilter } from "../store/actions";

function ProductDetail() {
  
  const { productId } = useParams();

  const [state, dispatch] = useContext(StoreContext);
  const { category, description, image, price, title } = state.selectedProduct;

  const fetchProductDetail = async () => {
    const respone = await axios.get(`${productAPI}/${productId}`);
    dispatch(selectedProduct(respone.data));
  };

  useEffect(() => {
    if (productId) {
      fetchProductDetail();
    }
    return () => {
      dispatch(selectedProduct(""));
    };
  }, [productId]);

  return (
    <>
      <h2 style={{ marginTop: "20px" }}>Product Detail</h2>
      {Object.keys(state.selectedProduct).length === 0 ? (
        <Button
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
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
        <Row>
          <div className={style.product}>
            <Col sm={5}>
              <div className={style.productImg}>
                <img src={image} alt="" />
              </div>
            </Col>
            <Col sm={5}>
              <div className={style.productDetail}>
                <h4 className={(style.productDetail, style.productCategory)}>
                  {category}
                </h4>
                <h2 className={(style.productDetail, style.productTitle)}>
                  {title}
                </h2>
                <p className={(style.productDetail, style.productDes)}>
                  {description}
                </p>
                <h1>${price}</h1>
                <Button
                  style={{ width: "100%" }}
                  onClick={(e) => e.preventDefault()}
                  variant="primary"
                >
                  Add To Cart
                </Button>
              </div>
            </Col>
          </div>
        </Row>
      )}
    </>
  );
}

export default ProductDetail;
