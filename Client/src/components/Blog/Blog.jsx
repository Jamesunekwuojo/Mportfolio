import {Container, Row, } from 'react-bootstrap';
import "./Blog.css"
import { Link } from 'react-router-dom';

const Blog = () => {

    return (
        <Container style={{height:'80vh'}}>
            <Row className="mt-4" >
                <div className='d-flex flex-row justify-content-between ' >
                    <div className='text-center'>
                      <img className='imageItem' src='/blog1.png' alt='abiodun image'/>
                      <h4>How To Use Your No's</h4>
                      <p id='text1'>This how you create advantage from your rejections...</p>
                      <button className='button'><Link className='blog_link' to ="https://abiodunmustaphablog.netlify.app/blog/how%20to%20use%20no's" target='blank'>Read more</Link></button>

                    </div>

                    <div className='text-center'>

                      <img className='imageItem' src="/blog2.jpg" alt="abiodun image" />
                      <h4>Three Ways To Solve Any Problem</h4>
                      <p id="text2">There are three Ways To Solve Any Problem...</p>
                     
                      <button className='button'><Link className='blog_link' to ="https://abiodunmustaphablog.netlify.app/blog/solution" target='blank'>Read more</Link></button>
                        
                    </div>

                    <div className='text-center'>

                     <img className='imageItem' src='/blog3.jpg' alt='abiodun image'/>
                     <h4>Best Read Ever</h4>
                     <p id='text3'>This May Be The Best Thing You've Read This Year.</p>
                    
                     <button className='button' ><Link className='blog_link' to ="https://abiodunmustaphablog.netlify.app/blog/read" target='blank'>Read more</Link></button>
                        
                    </div>
                    
                    
                  
                </div>

           
            </Row>

        </Container>

    );

}

export default Blog