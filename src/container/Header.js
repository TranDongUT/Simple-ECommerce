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

import style from "./HeaderStyle.module.scss";
import ProductFilter from "./ProductFilter";
import { useContext, useEffect, useState } from "react";
import { filterProducts } from "../store/actions";
import { StoreContext } from "../store";

function Header() {
  const [state, dispatch] = useContext(StoreContext);
  const [showFilter, setShowFilter] = useState(false);

  const handleFilter = (e) => {
    if(e.target.value.trim() == ""){
      setShowFilter(false);
    } else {
      setShowFilter(true);
      dispatch(filterProducts(e.target.value.trim()));
    }
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
                to={"/"}
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <Nav.Link href="#product">Products</Nav.Link>
              </Link>
              <Nav.Link href="https://www.facebook.com/profile.php?id=100004428967428">
                Link
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className={style.headerInput}>
              <Form onFocus={() => setShowFilter(true)} className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  qweDSAS
                  onChange={(e) => handleFilter(e)}
                  onFocus={() => setShowFilter(true)}
                />
                <Button variant="outline-success">Search</Button>
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
