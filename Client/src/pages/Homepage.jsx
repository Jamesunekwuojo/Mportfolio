import About from "../components/About/About.jsx";
import Highlight from "../components/Highlight/Highlight.jsx";
import Featured from "../components/Featured/Featured.jsx";
import CalltoAction from "../components/CalltoAction/CalltoAction.jsx";
import EmailListing from "../components/EmailListing/EmailListing.jsx";
import Podcast from "../components/Podcast/Podcast.jsx";
import Testimonials from "../components/Testimonials/Testimonials.jsx";
import {Row} from "react-bootstrap";
import  "./Homepage.css"

const Homepage = () => {

    return (
        <div className="" >
          
           <Row className='subheader'>
           <h1 className='subheader text-center'>About Abiodun Mustapha</h1>
           </Row>
           <About></About>

           <Row ><h1 className='subheader text-center '>Highlight</h1></Row>

           <Highlight></Highlight>

           <Row className='parentContainer'>
             <div>
               <h1 className='subheader text-center bookNow'>Book Now!</h1>

             </div>
            
            </Row>
            <CalltoAction></CalltoAction>

           <Row ><h1 className='subheader text-center'>Featured</h1></Row>
           <Featured></Featured>

           {/* Testimonials */}
          
           <Testimonials></Testimonials>


            {/* Podcast componetn */}
            <Row><h1 className="subheader text-center">Listen to my Podcasts</h1></Row>
           <Podcast></Podcast>

           {/* email listing component */}
           <EmailListing></EmailListing>

          
        </div>
    )
}
export default Homepage ;