import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import BreadcrumbItem from 'react-bootstrap/BreadcrumbItem'
import { Link } from 'react-router-dom'

export function NewsTrends( props ) {
    document.title = "News products and features"
    return (
        <Container>
            <Breadcrumb className="mt-2">
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/"}}>Home</Breadcrumb.Item>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/"}}>Products</Breadcrumb.Item>
                <Breadcrumb.Item active>News & Trends</Breadcrumb.Item>
            </Breadcrumb>
            <Row className="mt-5">
                <Col>
                    <h2>News & Trends</h2>
                </Col>
            </Row>
        </Container>
    )
}