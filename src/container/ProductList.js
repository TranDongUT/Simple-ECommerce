import { useContext, useEffect } from "react";
import { StoreContext } from "../store";
import axios from "axios";
import productsAPI from "../API";
import { Container, Row, Button, Spinner } from "react-bootstrap";
import { callApi } from "../store/actions";
import Product from "./Product";

function ProductList() {
  const [state, dispatch] = useContext(StoreContext);
  //console.log(state);
  const fetchProducts = async () => {
    const respone = await axios.get(productsAPI);
    dispatch(callApi(respone.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  //console.log(allProducts);

  return (
    <Container>
      {Object.keys(state.products).length === 0 ? (
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
          <Product />
        </Row>
      )}
    </Container>
  );
}

export default ProductList;
