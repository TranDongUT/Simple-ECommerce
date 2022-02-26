import { Link } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import style from "./style/HeaderStyle.module.scss";
import ProductFilter from "./ProductFilter";
import { useContext, useState } from "react";
import { filterProducts } from "../store/actions";
import { StoreContext } from "../store";

function Header() {
  const [state, dispatch] = useContext(StoreContext);
  const [showFilter, setShowFilter] = useState(false);

  const handleFilter = (e) => {
    if (e.target.value.trim() === "") {
      setShowFilter(false);
    } else {
      setShowFilter(true);
      dispatch(filterProducts(e.target.value.trim()));
    }
  };

  const quantityOfCart = () => {
    let quantity = 0;
    state.productInCart.forEach((product) => {
      quantity += Number(product.quantity);
    });
    return quantity;
  };

  return (
    <div className={style.header}>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="https://trandongut.github.io/Simple-ECommerce/">
            E-Commerce TranDongUT
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link
                className="nav-link"
                to={"/"}
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Product
              </Link>
              <Nav.Link href="https://www.facebook.com/profile.php?id=100004428967428">
                Link
              </Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <Link
                  className="dropdown-item"
                  to={"/product/category/electronics"}
                >
                  Electronics
                </Link>
                <Link
                  className="dropdown-item"
                  to={"/product/category/jewelery"}
                >
                  Jewelery
                </Link>
                <Link
                  className="dropdown-item"
                  to={"/product/category/men's clothing"}
                >
                  Men's clothing
                </Link>
                <Link
                  className="dropdown-item"
                  to={"/product/category/women's clothing"}
                >
                  Women's clothing
                </Link>
                <NavDropdown.Divider />
                <NavDropdown.Item>Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className={style.headerInput}>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => handleFilter(e)}
                  onFocus={() => setShowFilter(true)}
                />
                {/* <Button variant="outline-success">Search</Button> */}
                <Link
                  to={"/cart"}
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <div
                    className={style.cartIcon}
                  >
                    <i className="bx bx-cart-alt">
                      {quantityOfCart() > 0 && (
                        <span>({quantityOfCart()})</span>
                      )}
                    </i>
                  </div>
                </Link>
              </Form>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div
        className={showFilter ? style.filterList : ""}
        onClick={() => setShowFilter(false)}
      >
        {showFilter ? <ProductFilter /> : ""}
      </div>
    </div>
  );
}

export default Header;
