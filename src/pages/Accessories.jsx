import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export function Accessories( props ) {
    document.title = "Some accessories to go with it"
    return (
        <Container>
            <Row>
                <Col>
                    <h2>Accessories</h2>
                </Col>
            </Row>
        </Container>
    )
}