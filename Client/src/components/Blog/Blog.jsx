import {Container, Row, } from 'react-bootstrap';
import "./Blog.css"

const Blog = () => {

    return (
        <Container style={{height:'80vh'}}>
            <Row >
                <div className='d-flex flex-row justify-content-between ' >
                    <div className='text-center'>
                      <img className='imageItem' src='/blog1.png' alt='abiodun image'/>
                      <p>Purpose Mastery Masterclass</p>
                      <button className='button'>book</button>

                    </div>

                    <div className='text-center'>

                      <img className='imageItem' src="/blog2.jpg" alt="abiodun image" />
                      <p>Speaking Engagement</p>
                      <p>1 hr | ₦80,000</p>
                      <button className='button'>book</button>
                        
                    </div>

                    <div className='text-center'>

                     <img className='imageItem' src='/blog3.jpg' alt='abiodun image'/>
                     <p>One-on-One Coaching</p>
                     <p>1 hr 30 min | ₦50,000</p>
                     <button className='button' >book</button>
                        
                    </div>
                    
                    
                  
                </div>

           
            </Row>

        </Container>

    );

}

export default Blog