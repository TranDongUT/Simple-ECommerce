import { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Product from "./Product";
import productsAPI from "../API";
import { StoreContext } from "../store";
import { callApi, inCategory } from "../store/actions";
import { Nav, Row, Button, Spinner } from "react-bootstrap";
import style from "./style/CategoryStyle.module.scss";

function Category() {
  const { type } = useParams();
  const [state, dispatch] = useContext(StoreContext);

  const fetchCategory = async () => {
    const respone = await axios.get(`${productsAPI}/category/${type}`);
    dispatch(inCategory(respone.data));

  };

  useEffect(() => {
    fetchCategory();
    return () => {};
  }, [type]);

  return (
    <>
      <h2>Category</h2>
      <Row className={style.category}>
        <Nav justify variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link>
              <Link to={"/product/category/electronics"}>Electronics</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to={"/product/category/jewelery"}>Jewelery</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to={"/product/category/men's clothing"}>
                Men's clothing
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to={"/product/category/women's clothing"}>
                Women's clothing
              </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {Object.keys(state.inCategory).length === 0 ? (
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
          <Row style={{ marginTop: "90px" }}>
            <Product category={state.inCategory}/>
          </Row>
        )}
      </Row>
    </>
  );
}

export default Category;
