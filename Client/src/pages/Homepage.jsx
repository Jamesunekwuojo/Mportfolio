import About from "../components/About/About.jsx";
import Highlight from "../components/Highlight/Highlight.jsx";
import Featured from "../components/Featured/Featured.jsx";
import CalltoAction from "../components/CalltoAction/CalltoAction.jsx";
import EmailListing from "../components/EmailListing/EmailListing.jsx";
import Podcast from "../components/Podcast/Podcast.jsx";
import {Row} from "react-bootstrap";
import  "./Homepage.css"

const Homepage = () => {

    return (
        <div className="" >
          
           <Row className='subheader'>
           <h2 className='subheader text-center'>Meet Abiodun Mustapha</h2>
           </Row>
           <About></About>

           <Row ><h2 className='subheader text-center '>Highlight</h2></Row>

           <Highlight></Highlight>

           <Row className='parentContainer'>
             <div>
               <h2 className='subheader text-center bookNow'>Book Now!</h2>

             </div>
            
            </Row>
            <CalltoAction></CalltoAction>

           <Row ><h2 className='subheader text-center'>Featured</h2></Row>
           <Featured></Featured>


            {/* Podcast componetn */}
            <Row><h2 className="subheader text-center">Listen to my Podcasts</h2></Row>
           <Podcast></Podcast>

           {/* email listing component */}
           <EmailListing></EmailListing>

          
        </div>
    )
}
export default Homepage ;