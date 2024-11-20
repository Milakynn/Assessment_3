import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export function About( props ) {
    document.title = "Who we are ?"
    return (
        <Container>
            <Row>
                <Col>
                    <h2>Our history</h2>
                </Col>
            </Row>
        </Container>
    )
}