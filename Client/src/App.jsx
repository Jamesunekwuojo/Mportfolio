import MainNav from "./components/MainNav/MainNav"
import Footer from "./components/Footer/Footer"
import Homepage from "./pages/Homepage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./components/Shop/Shop.jsx"
import Books from "./components/Books/Books.jsx";
import MainAbout from "./components/MainAbout/MainAbout.jsx";
import Blog from "./components/Blog/Blog.jsx"

const App = () => {

  return(
    <Router>
      <MainNav></MainNav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/resources/book" element={<Books />} />
        <Route path="/resources/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<MainAbout/>}/>
      </Routes>

      <footer>
      <Footer></Footer>
    </footer>
    </Router>
   

  );

}

export default  App;
