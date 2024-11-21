import { propTypes } from "react-bootstrap/esm/Image";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavbarBrand, NavItem } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'

export function Header ( props ) {
    return (
        <Navbar expand="lg" bg="light">
            <Container>
                <Navbar.Brand href="/">
                <img alt="logo" src="/public/images/wine-glass.png" width="30" height="30" className="d-inline-block align-top"/>{' '}
                    { props.text }
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-nav" />
                <Navbar.Collapse id="main-nav">
                    <Nav variant="underline" defaultActiveKey="/home">
                        <NavItem>
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        </NavItem>
                        <NavItem>
                            <NavDropdown href="/wine" title="Products" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/red-wine">Red wine</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/white-wine">White wine</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="new-trends">
                                    News & Trends
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="accessories">Accessories</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="sales-events">
                                    Sales/Events
                                </NavDropdown.Item>
                            </NavDropdown>
                        </NavItem>
                        {/* <Nav.Link href="/wines">Wines</Nav.Link> */}
                        <NavItem>
                            <Nav.Link as={Link} to="/about">Our history</Nav.Link>
                        </NavItem>
                        <NavItem>
                            <Form inline>
                                <Row>
                                    <Col xs="auto">
                                        <Form.Control type="text" placeholder="Search" className=" mr-sm-2"/>
                                    </Col>
                                    <Col xs="auto">
                                        <Button variant="outline-primary" type="submit">Submit</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </NavItem>
                        <NavItem>
                            <Nav.Link as={Link} to="/login">Sign in</Nav.Link>
                        </NavItem>
                        <NavItem>
                            <Nav.Link as={Link} to="/register">Sign up</Nav.Link>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}