import MainNav from "./components/MainNav/MainNav"

import Homepage from "./pages/Homepage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./components/Shop/Shop.jsx"
import Books from "./components/Books/Books.jsx";
import MainAbout from "./components/MainAbout/MainAbout.jsx";
import Blog from "./components/Blog/Blog.jsx";
import CalltoAction from "./components/CalltoAction/CalltoAction.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Podcast from "./components/Podcast/Podcast.jsx";
import Highlight from "./components/Highlight/Highlight.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import About from "./components/About/About.jsx";

const App = () => {

  return(
    <Router>
      <MainNav></MainNav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<MainAbout/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/podcasts" element={<Podcast/>}/>
        <Route path='/highlight' element={<Highlight/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>


        {/* Resources routes */}
        <Route path="/resources/book" element={<Books />} />
        <Route path="/resources/blog" element={<Blog />} />
      
        <Route path="/resources/oneCoaching" element={<CalltoAction />} />
        <Route path="/resources/masteryClass" element={<CalltoAction />} />
        {/* <Route path="/resources/speakingEng" element={<CalltoAction />} /> */}

       
      </Routes>
      <Footer></Footer>

    
    </Router>
   

  );

}

export default  App;
