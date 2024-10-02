import {Container, Row} from "react-bootstrap";
import "./Featured.css"

const Featured = () => {
    return (
        <Container className='w-80 mt-4 '>
            <Row>
                <div className="d-flex flex-row justify-content-center   align-item-center imagediv">
                    <img src="fut.png" alt="" />
                    <img src="German.png" alt="" />
                    <img src="lead.png" alt="" />
                </div>

                <div>
                    <img src="visi.png" alt="" />
                </div>
            </Row>

        </Container>
    )

}
export default Featured;