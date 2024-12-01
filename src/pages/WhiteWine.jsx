import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import BreadcrumbItem from 'react-bootstrap/BreadcrumbItem'
import { Link } from 'react-router-dom'

export function WhiteWine(props) {
    document.title = "White as blanc"
    return (
        <Container>
            <Breadcrumb className="mt-2">
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Products</Breadcrumb.Item>
                <Breadcrumb.Item active>White wine</Breadcrumb.Item>
            </Breadcrumb>
            <Card className="bg-light text-danger">
                <Card.Img src="/images/green-grape.jpg" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>
                        <img alt="logo" src="/public/images/wine-glass.png" width="30" height="30" className="d-inline-block align-top" />{' '}
                        The best drink in town !
                    </Card.Title>
                    <Col md={4}>
                        <Card.Text>
                            Whether you're enjoying a glass on a warm summer day or pairing it with a delicious meal, white wine offers a delightful experience for the senses. Cheers! 🍷
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Col>
                </Card.ImgOverlay>
            </Card>
            <Row className="mt-5 mb-5">
                <Col>
                    <Card border="info">
                        <Card.Img variant="top" src="/images/white.jpg" />
                        <Card.Header><Card.Title>Red wine</Card.Title></Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="outline-info">
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Read me ! </Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}