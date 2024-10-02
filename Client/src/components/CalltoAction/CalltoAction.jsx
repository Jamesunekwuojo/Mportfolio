import {Container, Row} from 'react-bootstrap';
import "./CalltoAction.css"

const CalltoAction = () => {

    return (
        <Container style={{height:'80vh'}}>
            <Row >
                <div className='d-flex flex-row justify-content-between' >
                    <div>
                      <img className='imageItem' src='image3.jpg' alt='abiodun image'/>

                    </div>

                    <div>

                      <img className='imageItem' src="speak.jpg" alt="abiodun image" />
                        
                    </div>

                    <div>

                     <img className='imageItem' src='highlight1.jpg' alt='abiodun image'/>
                        
                    </div>
                    
                    
                  
                </div>

           
            </Row>

        </Container>

    );

}

export default CalltoAction