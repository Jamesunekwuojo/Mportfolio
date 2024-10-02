import About from "../components/About/About.jsx";
import Highlight from "../components/Highlight/Highlight.jsx";
import {Row} from "react-bootstrap"

const Homepage = () => {

    return (
        <div className="" >
          
           <Row>
            <h2></h2>
           </Row>
           <About></About>

           <Row cla><h2>Highlight</h2></Row>

           <Highlight></Highlight>
        </div>
    )
}
export default Homepage ;