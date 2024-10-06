import MainNav from "./components/MainNav/MainNav"
import Footer from "./components/Footer/Footer"
import Homepage from "./pages/Homepage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./components/Shop/Shop.jsx"
import Books from "./components/Books/Books.jsx";
import MainAbout from "./components/MainAbout/MainAbout.jsx";
import Blog from "./components/Blog/Blog.jsx";
import CalltoAction from "./components/CalltoAction/CalltoAction.jsx";
import Contact from "./components/Contact/Contact.jsx";

const App = () => {

  return(
    <Router>
      <MainNav></MainNav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<MainAbout/>}/>
        <Route path="/contact" element={<Contact/>}/>


        {/* Resources routes */}
        <Route path="/resources/book" element={<Books />} />
        <Route path="/resources/blog" element={<Blog />} />
        <Route path="/resources/masteryClass" element={<CalltoAction />} />
        <Route path="/resources/oneCoaching" element={<CalltoAction />} />
        <Route path="/resources/masteryClass" element={<CalltoAction />} />
        <Route path="/resources/sp" element={<CalltoAction />} />

       
      </Routes>

      <footer>
      <Footer></Footer>
    </footer>
    </Router>
   

  );

}

export default  App;
