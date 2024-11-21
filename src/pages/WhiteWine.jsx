import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export function WhiteWine( props ) {
    document.title = "White as blanc"
    return (
        <Container>
            <Row>
                <Col>
                    <h2>White wine</h2>
                </Col>
            </Row>
        </Container>
    )
}