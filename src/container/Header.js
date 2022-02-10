import {Link} from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import ProductList from './ProductList'
function Header(){
    return(
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href='https://trandongut.github.io/Simple-ECommerce/' >E-Commerce TranDongUT</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            {/* <Link to={'/product'} style={{ color: 'inherit', textDecoration: 'inherit'}}>
            </Link> */}
                <Nav.Link href='/product'>Products</Nav.Link>
                <Nav.Link href="https://www.facebook.com/profile.php?id=100004428967428">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default Header;
