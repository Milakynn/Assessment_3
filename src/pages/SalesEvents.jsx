import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import BreadcrumbItem from 'react-bootstrap/BreadcrumbItem'
import { Link } from 'react-router-dom'

export function SalesEvents( props ) {
    document.title = "Special occassion!"
    return (
        <Container>
            <Breadcrumb className="mt-2">
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/"}}>Home</Breadcrumb.Item>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/"}}>Products</Breadcrumb.Item>
                <Breadcrumb.Item active>Sales & Events</Breadcrumb.Item>
            </Breadcrumb>
            <Row className="mt-5">
                <Col>
                    <h2>Sales & Events</h2>
                </Col>
            </Row>
        </Container>
    )
}