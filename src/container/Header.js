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

import style from './HeaderStyle.module.scss';
import ProductFilter from "./ProductFilter";
import { useContext, useState } from "react";
import {filterProducts, clearFilter} from '../store/actions';
import { StoreContext } from "../store";
import { logDOM } from "@testing-library/react";

function Header() {

  const [state, dispatch] = useContext(StoreContext);
  const [showFilter, setShowFilter] = useState(false);

  const handleFilter = (e)=>{
      if(e.target.value.trim() !== ''){
        dispatch(filterProducts(e.target.value))
      }
      else{
        dispatch(clearFilter());
      }
  }

  const handleShowFilter = (e)=>{
    if(e.target.value.trim() == ''){
        setShowFilter(false)
    }
  }

  return (
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
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className={style.headerInput}>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={e => handleFilter(e)}
                onFocus={e => setShowFilter(true)}
                onBlur={e => handleShowFilter(e)}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            {/* component products filter */}
            {
              showFilter ? <ProductFilter/> : ''
            }
            {/*  */}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
