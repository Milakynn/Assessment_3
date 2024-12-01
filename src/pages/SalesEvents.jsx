import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import BreadcrumbItem from 'react-bootstrap/BreadcrumbItem'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

export function SalesEvents( props ) {
    document.title = "Special occassion!"
    return (
        <Container>
            <Breadcrumb className="mt-2">
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/"}}>Home</Breadcrumb.Item>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/"}}>Products</Breadcrumb.Item>
                <Breadcrumb.Item active>Sales & Events</Breadcrumb.Item>
            </Breadcrumb>
            <Card className="bg-dark text-black">
                <Card.Img src="/images/bottles.jpg" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>
                        <img alt="logo" src="/public/images/wine-glass.png" width="30" height="30" className="d-inline-block align-top"/>{' '}
                        The best drink in town !
                    </Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Row className="mt-5">
                <Col>
                    <h2>Sales & Events</h2>
                </Col>
            </Row>
        </Container>
    )
}