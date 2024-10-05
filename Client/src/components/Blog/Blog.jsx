import {Container, Row, } from 'react-bootstrap';
import "./Blog.css"

const Blog = () => {

    return (
        <Container style={{height:'80vh'}}>
            <Row className="mt-4" >
                <div className='d-flex flex-row justify-content-between ' >
                    <div className='text-center'>
                      <img className='imageItem' src='/blog1.png' alt='abiodun image'/>
                      <h3>How To Use Your No's</h3>
                      <p>This how you create advantage from your rejections...</p>
                      <button className='button'>Read more</button>

                    </div>

                    <div className='text-center'>

                      <img className='imageItem' src="/blog2.jpg" alt="abiodun image" />
                      <h3>Three Ways To Solve Any Problem</h3>
                      <p>There are three Ways To Solve Any Problem...</p>
                     
                      <button className='button'>Read more</button>
                        
                    </div>

                    <div className='text-center'>

                     <img className='imageItem' src='/blog3.jpg' alt='abiodun image'/>
                     <h3>Best Read Ever</h3>
                     <p>This May Be The Best Thing You've Read This Year.</p>
                    
                     <button className='button' >Read more</button>
                        
                    </div>
                    
                    
                  
                </div>

           
            </Row>

        </Container>

    );

}

export default Blog