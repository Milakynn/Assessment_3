import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export function Login( props ) {
    document.title = "Sign in for more"
    return (
        <Container>
            <Row>
                <Col>
                    <h2>Sign in</h2>
                </Col>
            </Row>
        </Container>
    )
}