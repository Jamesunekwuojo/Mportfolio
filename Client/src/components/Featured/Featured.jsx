import {Container, Row} from "react-bootstrap";
import "./Featured.css"

const Featured = () => {
    return (
        <Container className='w-80 mt-4 ' style={{height:'70vh'}}>
            <Row>
                <div className="d-flex flex-row justify-content-between   ">
                    <img className="imagediv" src="fut.png" alt="" />
                    <img className="imagediv" src="lead.png" alt="" />
                    <img className="imagediv" src="German.png" alt="" />
                   
                </div>

                <div className="d-flex flex-row justify-content-center mt-4">
                    <img src="visi.png" alt="" />
                </div>
            </Row>

        </Container>
    )

}
export default Featured;