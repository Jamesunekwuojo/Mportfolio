import About from "../components/About/About.jsx";
import Highlight from "../components/Highlight/Highlight.jsx";
import {Row} from "react-bootstrap";
import  "./Homepage.css"

const Homepage = () => {

    return (
        <div className="" >
          
           <Row className='subheader'>
           <h2 className='subheader text-center'>Meet Abiodun Mustapha</h2>
           </Row>
           <About></About>

           <Row ><h2 className='subheader text-center'>Highlight</h2></Row>

           <Highlight></Highlight>

           <Row ><h2 className='subheader text-center'>Highlight</h2></Row>
        </div>
    )
}
export default Homepage ;