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

export function Register(props) {
    document.title = "Sign up to go"

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
                <Breadcrumb.Item active>Register</Breadcrumb.Item>
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
                <h2 className="mt-4">Sign up</h2>
                <Col md={{ span: 7, offset: 2 }}>
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
                                <Form.Group className="mt-2" controlId="validationCustom01">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control name="first name" type="text" placeholder="Lindsay" required />
                                    <Form.Control.Feedback type="invalid">Please enter your first name.</Form.Control.Feedback>
                                    <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mt-2" controlId="validationCustom02">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control name="Last name" type="text" placeholder="Kuilagi" required />
                                    <Form.Control.Feedback type="invalid">Please enter your last name.</Form.Control.Feedback>
                                    <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mt-2" controlId="validationCustomGender">
                            <Form.Label>Gender</Form.Label>
                            <Form.Select aria-label="Default select example" required>
                                <option>-</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                <option value="3">Non-binary</option>
                                <option value="4">Prefer not to say</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">Please select an option.</Form.Control.Feedback>
                            <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mt-2" controlId="validationCustomEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="user@gmail.com" required />
                            <Form.Control.Feedback type="invalid">Please provide an email.</Form.Control.Feedback>
                            <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Row className="align-middle">
                            <Col md={6}>
                                <Form.Group className="mt-2" controlId="validationCustomPassword01">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name="password" type="password" placeholder="minimum 8 characters" required />
                                    <Form.Control.Feedback type="invalid">Please provide a password.</Form.Control.Feedback>
                                    <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mt-2" controlId="validationCustomPassword02">
                                    <Form.Label>Confirm password</Form.Label>
                                    <Form.Control name="password" type="password" placeholder="minimum 8 characters" required />
                                    <Form.Control.Feedback type="invalid">Please confirm password.</Form.Control.Feedback>
                                    <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mt-2" controlId="validationCustom03">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control name="phone number" type="text" placeholder="0420-455-259" required />
                            <Form.Control.Feedback type="invalid">Please provide a valid phone number.</Form.Control.Feedback>
                            <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Row className="align-middle">
                            <Col md={6}>
                                <Form.Group className="mt-2" controlId="validationCustom04">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control name="address" type="text" placeholder="18 Albert St" required />
                                    <Form.Control.Feedback type="invalid">Please provide a valid address.</Form.Control.Feedback>
                                    <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mt-2" controlId="validationCustom05">
                                    <Form.Label>Suburb</Form.Label>
                                    <Form.Control name="suburb" type="text" placeholder="Chastwood" required />
                                    <Form.Control.Feedback type="invalid">Please provide a valid suburb.</Form.Control.Feedback>
                                    <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="align-middle">
                            <Col md={6}>
                                <Form.Group className="mt-2" controlId="validationCustom06">
                                    <Form.Label>Post code</Form.Label>
                                    <Form.Control name="post code" type="text" placeholder="2193" required />
                                    <Form.Control.Feedback type="invalid">Please provide a valid post code.</Form.Control.Feedback>
                                    <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mt-2" controlId="validationCustomState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Select aria-label="Default select example" required>
                                        <option>Select a state</option>
                                        <option value="1">NT</option>
                                        <option value="2">QLD</option>
                                        <option value="3">NSW</option>
                                        <option value="4">ACT</option>
                                        <option value="5">VIC</option>
                                        <option value="6">SA</option>
                                        <option value="7">WA</option>
                                        <option value="8">TAS</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">Please select an option.</Form.Control.Feedback>
                                    <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mt-2 mb-1" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Agree you are over 18 years old" feedback="You must agree before submitting" feedbackType="invalid" required />
                        </Form.Group>
                        <Row className="align-items-center">
                            <Col md={6}>
                                <Button as="input" className="mt-3" type="submit" value="Sign up" variant="outline-info" />
                                {/* <Button className="mt-3" variant="outline-info" type="submit">
                                    Sing up
                                </Button> */}
                            </Col>
                            <Col md={6}>
                                <Button as="input" className="mt-3" type="reset" value="Reset" variant="outline-info" />
                                {/* <Button className="mt-3" variant="outline-info" type="reset">
                                    Reset
                                </Button> */}
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}