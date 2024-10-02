import {Container, Row} from "react bootstrap"

const Featured = () => {
    return (
        <Container className='w-80 mt-4 '>
            <Row>
                <div className="d-flex flex-row">
                    <img src="fut.png" alt="" />
                    <img src="German-cooperation-tenders.png" alt="" />
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