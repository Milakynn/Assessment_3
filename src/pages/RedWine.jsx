import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export function RedWine( props ) {
    document.title = "Red like rouge"
    return (
        <Container>
            <Row>
                <Col>
                    <h2>Red wine</h2>
                </Col>
            </Row>
        </Container>
    )
}