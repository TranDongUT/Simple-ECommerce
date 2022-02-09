import {Link} from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import ProductList from './ProductList'
function Header(){
    return(
        <Navbar bg="light" expand="lg">
        <Container>
            <Link to={'/'} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <Navbar.Brand >E-Commerce TranDongUT</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link to={'/'} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <Nav.Link href='#products'>Products</Nav.Link>
            </Link>
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