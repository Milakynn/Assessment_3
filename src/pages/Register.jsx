import { Container } from "react-bootstrap";
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
                <Col md = {{ span: 4, offset: 4}}>
                    <Form>
                        {/* <h2>Sign up</h2> */}
                        <Form.Group className="mt-2">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="user@gmail.com" required/>
                        </Form.Group>
                        <Form.Group className="mt-2">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="minimum 8 characters" required/>
                        </Form.Group>
                        <Form.Group className="mt-2 mb-1" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
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