import { Container, InputGroup } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
// import InputGroup from 'react-bootstrap/InputGroup'

export function Register( props ) {
    document.title = "Sign up to go"

    // const [validated, setValidated] = useState(false);

    // const handleSubmit = (event) => {
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     }

    //     setValidated(true);
    // };


    return (
        <Container>
            <Row>
            <h2 className="mt-4">Sign up</h2>
                {/* <Col md = {{ span: 4, offset: 4}}> */}
                    <Form>
                        {/* <h2>Sign up</h2> */}
                        <Form.Group className="mt-2">
                            <Form.Label>First name</Form.Label>
                            <Form.Control name="first name" type="text" placeholder="First name" required/>
                        </Form.Group>
                        <Form.Group className="mt-2">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control name="Last name" type="text" placeholder="Last name" required/>
                        </Form.Group>
                        <Form.Group className="mt-2">
                            <Form.Label>Username</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPretend">@</InputGroup.Text>
                                <Form.Control name="User" type="text" placeholder="Username" aria-describedby="inputGroupPretend" required/>
                                <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mt-2">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="user@gmail.com" required/>
                        </Form.Group>
                        <Form.Group className="mt-2">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="minimum 8 characters" required/>
                        </Form.Group>
                        <Form.Group className="mt-2">
                            <Form.Label>City</Form.Label>
                            <Form.Control name="City" type="text" placeholder="City" required/>
                        </Form.Group>
                        <Form.Select className="mt-2" aria-label="Default select example">
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
                        <Form.Group className="mt-2 mb-1" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Agree you are over 18 years old" feedback="You must agree before submitting" feedbackType="invalid" required/>
                        </Form.Group>
                        <Button className="mt-3" variant="outline-info" type="submit">
                            Sing up
                        </Button>
                    </Form>
                {/* </Col> */}
            </Row>
        </Container>
    )
}