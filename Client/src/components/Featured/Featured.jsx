import {Container, Row} from "react-bootstrap";
import "./Featured.css"

const Featured = () => {
    return (
        <Container className='w-80 mt-4 h-100 '>
            <Row>
                <div className=" imageDiv1  ">
                    <img className="imagediv " src="fut.png" alt="" />
                    <img className="imagediv" src="lead.png" alt="" />
                    <img className="imagediv" src="German.png" alt="" />
                   
                </div>

                <div className="  imageDiv2">
                    <img className="imagediv" src="visi.png" alt="" />
                </div>
            </Row>

        </Container>
    )

}
export default Featured;