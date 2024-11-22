import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export function NewsTrends( props ) {
    document.title = "News products and features"
    return (
        <Container>
            <Row>
                <Col>
                    <h2>News & trends</h2>
                </Col>
            </Row>
        </Container>
    )
}