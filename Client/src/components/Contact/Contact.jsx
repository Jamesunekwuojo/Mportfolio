import {Container, Row, Col, Form} from "react-bootstrap";


const Contact = () => {
    return ( 

        <Container>
            <Row>
                <Col lg={6}>

                </Col>
                <Col>
                <Form>
                    <Form.Group>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control placeholder="Enter name"></Form.Control>

                        <Form.Label>Email:</Form.Label>
                        <Form.Control placeholder="Enter email addrresses"></Form.Control>
                    </Form.Group>
                </Form>
                </Col>
            </Row>
        </Container>

    );
}

export default Contact; 