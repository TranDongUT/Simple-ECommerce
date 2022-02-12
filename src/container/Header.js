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
<<<<<<< HEAD
import { useContext, useEffect, useState } from "react";
=======
import { useContext, useState } from "react";
>>>>>>> 4214906dca6c4f933850d367956ed5e05655fb8b
import { filterProducts } from "../store/actions";
import { StoreContext } from "../store";

function Header() {
<<<<<<< HEAD
  const [state, dispatch] = useContext(StoreContext);
  const [showFilter, setShowFilter] = useState(false);


=======
  const [, dispatch] = useContext(StoreContext);
  const [showFilter, setShowFilter] = useState(false);
>>>>>>> 4214906dca6c4f933850d367956ed5e05655fb8b

  const handleFilter = (e) => {
    setShowFilter(true);
    dispatch(filterProducts(e.target.value.trim()));
  };

  const handleShowFiler = (e)=>{
      if(e.target.value.trim() === ''){
          setShowFilter(false)
      }
      else{
        handleFilter(e)
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
            <Form onFocus={()=> setShowFilter(true)} className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
<<<<<<< HEAD
                aria-label="Search"qweDSAS
                onChange={(e) => handleFilter(e)}
                onFocus={(e) => handleShowFiler(e)}
                onBlur={(e) => handleShowFiler(e)}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            {showFilter ? <ProductFilter/> : ""}
=======
                aria-label="Search"
                onFocus={() => setShowFilter(true)}
                onChange={(e) => handleFilter(e)}
                onBlur={() => setShowFilter(false)}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            {showFilter && <ProductFilter />}
>>>>>>> 4214906dca6c4f933850d367956ed5e05655fb8b
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
