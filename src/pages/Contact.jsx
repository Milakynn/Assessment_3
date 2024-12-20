import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import BreadcrumbItem from 'react-bootstrap/BreadcrumbItem'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Card from 'react-bootstrap/Card';

export function Contact(props) {
    document.title = "Talk to us"

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Container>
            <Breadcrumb className="mt-2">
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Contact us</Breadcrumb.Item>
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
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h2 className="mt-3">Email us</h2>
                    <Form className="mb-5" noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mt-2" controlId="validationCustomEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name="email" type="email" placeholder="user@gmail.com" required />
                                    <Form.Control.Feedback type="invalid">Please provide an email.</Form.Control.Feedback>
                                    <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="mt-2" controlId="validationCustomEnquiry">Enquiry type</Form.Label>
                                    <Form.Select aria-label="Default select example" required>
                                        <option>-</option>
                                        <option value="1">Feedback</option>
                                        <option value="2">Stores</option>
                                        <option value="3">Loyalty/Giftcard</option>
                                        <option value="4">Career/HR</option>
                                        <option value="5">Catering</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">Please select an option.</Form.Control.Feedback>
                                    <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                    <Form.Text>What is your email related to?</Form.Text>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mt-2" controlId="validationCustom01">
                                    <Form.Label>Full name</Form.Label>
                                    <Form.Control name="full name" type="text" placeholder="Lindsay Kuilagi" required />
                                    <Form.Control.Feedback type="invalid">Please provide your full name.</Form.Control.Feedback>
                                    <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mt-2" controlId="validationCustom02">
                                    <Form.Label>Phone number</Form.Label>
                                    <Form.Control name="phone number" type="text" placeholder="0421-488-547" required />
                                    <Form.Control.Feedback type="invalid">Please provide a valid phone number.</Form.Control.Feedback>
                                    <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mt-2">
                            <Form.Label>Leave us a message</Form.Label>
                            <Form.Control name="Message" as="textarea" placeholder="Leave your comment here..." style={{ height: '160px' }} required />
                            <Form.Control.Feedback type="invalid">Please write us a message.</Form.Control.Feedback>
                        </Form.Group>
                        <Button as="input" className="mt-3" type="submit" value="Send" variant="outline-info" />
                        {/* <Button className="mt-3" variant="outline-info" type="submit">
                            Sing up
                        </Button> */}
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}