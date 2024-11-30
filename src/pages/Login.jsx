import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import BreadcrumbItem from 'react-bootstrap/BreadcrumbItem'
import { Link } from 'react-router-dom'

export function Login(props) {
    document.title = "Login ?"
    return (
        <Container>
            <Breadcrumb className="mt-2">
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Log in</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <h2 className="mt-4">Sign in</h2>
                <Col md={{ span: 7, offset: 2 }}>
                    <Form>
                        <Form.Group className="mt-2">
                            <Form.Label>Username</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPretend">@</InputGroup.Text>
                                <Form.Control name="User" type="text" placeholder="Lindyrella11" aria-describedby="inputGroupPretend" required />
                                <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mt-2">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name="email" type="email" placeholder="user@gmail.com" required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mt-2">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name="password" type="password" placeholder="minimum 8 characters" required />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mt-2 mb-1" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" id="autoSizingCheck" label="Remember me" />
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