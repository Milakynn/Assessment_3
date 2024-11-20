import { propTypes } from "react-bootstrap/esm/Image";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavbarBrand } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';

export function Header ( props ) {
    return (
        <Navbar expand="lg" bg="light">
            <Container>
                <Navbar.Brand href="/">{ props.text }</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-nav" />
                <Navbar.Collapse id="main-nav">
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown href="/wine" title="Wine" id="basic-nav-dropdown">
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
                        <Nav.Link href="/wines">Wines</Nav.Link>
                        <Nav.Link href="/about">Our history</Nav.Link>
                        <Nav.Link href="/login">Sign in</Nav.Link>
                        <Nav.Link href="/register">Sign up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}