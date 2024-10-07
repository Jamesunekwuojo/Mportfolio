import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Footer = () => {

    return (
        <div className="bg-dark" style={{width:'100%'}}>
            <Row>
                <Row>
                    <Col>
                    <Form>
                        {/* <Form.Group>
                            <Form.Control><span><Button></Button></span></Form.Control>
                        </Form.Group> */}

                    </Form>
                    </Col>
                </Row>

                <Row >
                    <Col lg={3}>
                    <h6>Home</h6>
                    <p><Link>About</Link></p>
                    <p><Link>Highlight</Link></p>
                    <p><Link>Featured</Link></p>
                    <p><Link>Testimonials</Link></p>
                    <p><Link>Podcast</Link></p>
                    <p><Link>Subscribe</Link></p>
                    </Col>

                    <Col lg={3}> 
                    <h3>Resources</h3>
                    <Link>Blogs</Link>
                    <Link>Books</Link>
                    </Col>
                   
                </Row>
            </Row>
         
        </div>

    );

}
export default  Footer;