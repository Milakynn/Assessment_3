import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom'

export function Home( props ) {
    document.title = "The best drinks in town"
    return (
        <Container>
            {/* <Row>
                <Col>
                    <h2>Home</h2>
                </Col>
            </Row> */}
            <Card className="bg-dark text-black">
                <Card.Img src="/images/bottles.jpg" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>The best drink in town !</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Row className="mt-5 mb-5">
                <Col>
                    <Card border="info" >
                        <Card.Img variant="top" src="/images/red.jpg" />
                        <Card.Header><Card.Title>Red wine</Card.Title></Card.Header>
                        <Card.Body>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="outline-info"as={Link} to="/red-wine">Let's go find out more!</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card border="info" >
                        <Card.Img variant="top" src="/images/white.jpg" />
                        <Card.Header><Card.Title>White wine</Card.Title></Card.Header>
                        <Card.Body>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="outline-info" as={Link} to="/white-wine">Let's go find out more!</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}