import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export function SalesEvents( props ) {
    document.title = "Special occassion!"
    return (
        <Container>
            <Row>
                <Col>
                    <h2>Sales & Events</h2>
                </Col>
            </Row>
        </Container>
    )
}