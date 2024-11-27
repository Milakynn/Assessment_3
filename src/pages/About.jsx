import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import BreadcrumbItem from 'react-bootstrap/BreadcrumbItem'
import { Link } from 'react-router-dom'

export function About( props ) {
    document.title = "Who we are ?"
    return (
        <Container>
            <Breadcrumb className="mt-2">
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/"}}>Home</Breadcrumb.Item>
                <Breadcrumb.Item active>About us</Breadcrumb.Item>
            </Breadcrumb>
            <Row className="mt-4">
                <Col>
                    <h2>Our history</h2>
                </Col>
            </Row>
        </Container>
    )
}