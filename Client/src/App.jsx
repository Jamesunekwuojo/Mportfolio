import MainNav from "./components/MainNav/MainNav"
import Footer from "./components/Footer/Footer"
import Homepage from "./pages/Homepage";

const App = () => {

  return(
    <>
    <header>
      <MainNav></MainNav>
    </header>

    <Homepage></Homepage>


  
    <footer>
      <Footer></Footer>
    </footer>
    </>

  );

}

export default  App;
