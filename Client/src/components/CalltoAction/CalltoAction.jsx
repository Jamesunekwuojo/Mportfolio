import {Container, Row, Button} from 'react-bootstrap';
import "./CalltoAction.css"

const CalltoAction = () => {

    return (
        <Container style={{height:'80vh'}}>
            <Row className='mt-4'>
                <div className='d-flex flex-row justify-content-between ' >
                    <div className='text-center'>
                      <img className='imageItem' src='/image3.jpg' alt='abiodun image'/>
                      <p>Purpose Mastery Masterclass</p>
                      <button className='button'>book</button>

                    </div>

                    <div className='text-center'>

                      <img className='imageItem' src="/speak.jpg" alt="abiodun image" />
                      <p>Speaking Engagement</p>
                      <p>1 hr | ₦80,000</p>
                      <button className='button'>book</button>
                        
                    </div>

                    <div className='text-center'>

                     <img className='imageItem' src='/highlight1.jpg' alt='abiodun image'/>
                     <p>One-on-One Coaching</p>
                     <p>1 hr 30 min | ₦50,000</p>
                     <button className='button' >book</button>
                        
                    </div>
                    
                    
                  
                </div>

           
            </Row>

        </Container>

    );

}

export default CalltoAction