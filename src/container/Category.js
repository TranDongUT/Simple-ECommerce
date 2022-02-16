import { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Product from "./Product";
import productsAPI from "../API";
import { StoreContext } from "../store";
import { callApi } from "../store/actions";
import { Nav, Row } from "react-bootstrap";
import style from "./CategoryStyle.module.scss";

function Category() {
  const { type } = useParams();
  const [state, dispatch] = useContext(StoreContext);

  const fetchCategory = async () => {
    const respone = await axios.get(`${productsAPI}/category/${type}`);
    dispatch(callApi(respone.data));
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
              <Link to={"/product/category/men's clothing"}>Men's clothing</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to={"/product/category/women's clothing"}>Women's clothing</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Row style={{marginTop: '90px'}}>
          <Product />
        </Row>
      </Row>
    </>
  );
}

export default Category;
