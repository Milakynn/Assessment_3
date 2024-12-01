import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import BreadcrumbItem from 'react-bootstrap/BreadcrumbItem'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Card from 'react-bootstrap/Card';

export function Login(props) {
    document.title = "Login ?"

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
                <Breadcrumb.Item active>Log in</Breadcrumb.Item>
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
                
                <Col md={{ span: 6, offset: 2 }}>
                <h2 className="mt-4">Sign in</h2>
                    <Form className="mb-5" noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mt-2" controlId="validationCustomUsername">
                            <Form.Label>Username</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPretend">@</InputGroup.Text>
                                <Form.Control name="User" type="text" placeholder="Lindyrella11" aria-describedby="inputGroupPretend" required />
                                <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
                                <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
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
                                <Form.Group className="mt-2" controlId="validationCustomPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name="password" type="password" placeholder="minimum 8 characters" required />
                                    <Form.Control.Feedback type="invalid">Please provide a password.</Form.Control.Feedback>
                                    <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mt-2 mb-1" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" id="autoSizingCheck" label="Remember me" />
                        </Form.Group>
                        <Button as="input" className="mt-3" type="submit" value="Sign up" variant="outline-info" />
                        {/* <Button className="mt-3" variant="outline-info" type="submit">
                            Sing up
                        </Button> */}
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}