import {Container, Row, } from 'react-bootstrap';
import {Link} from "react-router-dom"
import "./CalltoAction.css"

const CalltoAction = () => {

    return (
        <Container className='ctaContainer h-100'  id='publicSpeak'>
            <Row className='mt-4'>
                <div className=' ctaMainDiv' >
                    <div className='text-center'>
                      <img className='imageItem mt-2' src='/image3.jpg' alt='abiodun image'/>
                      <p>Purpose Mastery Masterclass</p>
                      <button className='button'><Link className='ctaLink' to="/contact">book</Link></button>

                    </div>

                    <div className='text-center'>

                      <img className='imageItem mt-2' src="/speak.jpg" alt="abiodun image" />
                      <p>Speaking Engagement</p>
                      <p>1 hr | ₦80,000</p>
                      <button className='button'><Link className='ctaLink' to="/contact">book</Link></button>
                        
                    </div>

                    <div className='text-center'>

                     <img className='imageItem mt-2' src='/highlight1.jpg' alt='abiodun image'/>
                     <p>One-on-One Coaching</p>
                     <p>1 hr 30 min | ₦50,000</p>
                     <button className='button' ><Link className='ctaLink' to="/contact">book</Link></button>
                        
                    </div>
                    
                    
                  
                </div>

           
            </Row>

        </Container>

    );

}

export default CalltoAction