import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import BreadcrumbItem from 'react-bootstrap/BreadcrumbItem'
import { Link } from 'react-router-dom'

export function Contact( props ) {
    document.title = "Talk to us"
    return (
        <Container>
            <Breadcrumb className="mt-2">
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/"}}>Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Contact us</Breadcrumb.Item>
            </Breadcrumb>
            <Row className="mt-3">
                <Col md = {{ span: 6, offset: 3}}>
                    <h2>Email us</h2>
                    <Form>
                        <Form.Group className="mt-2">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="user@gmail.com" required/>
                        </Form.Group>
                        <Form.Label className="mt-2">Enquiry type</Form.Label>
                        <Form.Select aria-label="Default select example" required>
                            <option>-</option>
                            <option value="1">Feedback</option>
                            <option value="2">Stores</option>
                            <option value="3">Loyalty/Giftcard</option>
                            <option value="4">Career/HR</option>
                            <option value="5">Catering</option>
                        </Form.Select>
                        <Form.Text>What is your email related to?</Form.Text>
                        <Form.Group className="mt-2">
                            <Form.Label>Full name</Form.Label>
                            <Form.Control name="full name" type="text" placeholder="Lindsay Kuilagi" required/>
                        </Form.Group>
                        <Form.Group className="mt-2">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control name="phone number" type="text" placeholder="0421-488-547" required/>
                        </Form.Group>
                        <Form.Group className="mt-2">
                            <Form.Label>Leave us a message</Form.Label>
                            <Form.Control name="Message" as="textarea" placeholder="Message..." required/>
                        </Form.Group>
                        <Button className="mt-3" variant="outline-info" type="submit">
                            Sing up
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}