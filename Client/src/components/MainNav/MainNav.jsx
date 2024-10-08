import { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MainNav.css";
import Homepage from "../../pages/Homepage";

import LandingPics from "../LandingPics/LandingPics";

const MainNav = () => {
  // State variable used to manage Resources dropdown
  const [showdropDown, setShowdropDown] = useState(false);
  // state use for managing active color link
  const [activeLink, setActiveLink] = useState("/home");

  // function for managing active color for link
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <div className='mainnavDiv'
      
      >
        <Navbar
          // fixed="top"
          expand="lg"
          className="p-2 navbarCustom"
        >
          <Container fluid>
            <Navbar.Brand  as={Link} to="/">
              <div className='d-flex flex-column'>
                <h2 className="brandText">Mustapha </h2>
                <h2 className="brandText">Abiodun</h2>

              </div>
             
              {/* <img style={{width:'200px'}} src="/logoName.png" alt=''/> */}
            
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto ">
                <Nav.Link
                  as={Link}
                  className={`nav-link ms-3 ${
                    activeLink === "/" ? "active-link" : ""
                  }`}
                  onClick={() => handleLinkClick("/")}
                  to="/"
                >
                  HOME
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className={`nav-link ms-3 ${
                    activeLink === "/about" ? "active-link" : ""
                  }`}
                  onClick={() => handleLinkClick("/about")}
                  to="/about"
                >
                  ABOUT
                </Nav.Link>
                <NavDropdown
                 
                  className="navDropdown"
                  title={"RESOURCES"}
                  show={showdropDown}
                  onMouseEnter={() => setShowdropDown(true)}
                  onMouseLeave={() => setShowdropDown(false)}
                >
                  <NavDropdown.Item
                    as={Link}
                    className={`nav-link
                      activeLink === "/resources/book" ? "active-link" : ""
                    }`}
                    onClick={() => handleLinkClick("/resources/book")}
                    to="/resources/book"
                  >
                    Books
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    className={`nav-link
                      activeLink === "/resources/blog" ? "active-link" : ""
                    }`}
                    onClick={() => handleLinkClick("/resources/blog")}
                    to ="/resources/blog"
                  >
                    Blog
                  </NavDropdown.Item>

                  <NavDropdown.Item 
                     as={Link}
                     className={`nav-link
                      activeLink === "/resources/masteryClass" ? "active-link" : ""
                    }`}
                    onClick={() => handleLinkClick("/resources/masteryClass")}
                    to="/resources/masteryClass"
                  >
                    Purpose Mastery Masterclass
                  </NavDropdown.Item>
                  <NavDropdown.Item
                     as={Link}
                     className={ `nav-link
                      activeLink === "/resources/oneCoaching" ? "active-link" : ""
                    }`}
                    onClick={() => handleLinkClick("/resources/oneCoaching")} to = "/resources/oneCoaching"
                  >One-on-One Coaching</NavDropdown.Item>
                  {/* <NavDropdown.Item
                     as={Link}
                     className={`nav-link
                      activeLink === "/resources/speakingEng" ? "active-link" : ""
                    }`}
                    onClick={() => handleLinkClick("/resources/speakingEng")} to="/resources/speakingEng"
                  > Speaking Engagement </NavDropdown.Item> */}
                </NavDropdown>
                <Nav.Link

                  as={Link}
                  className={`nav-link ${
                    activeLink === "/shop" ? "active-link" : ""
                  }`}
                  onClick={() => handleLinkClick("/shop")} to="/shop"
                >
                  SHOP
                </Nav.Link>

                <Nav.Link 
                  as={Link}
                  className={`nav-link ${activeLink === '/contact' ? 'active-link' : ''}`}
                  onClick={() => handleLinkClick('/contact')}
                  to="/contact"
                >CONTACT</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* landinpic section */}
        <LandingPics className=' landingpicsContainer '></LandingPics>

        {/* Scrollable content */}
        {/* <div style={{ backgroundColor: '#fff', padding: '20px', height: '150vh' }}>
          <h1>Your Scrollable Component</h1>
        </div> */}
      </div>
      {/* <Homepage></Homepage> */}
      {/* <div style={{ height: "100vh" }}>khjkkj</div> */}
    </>
  );
};

export default MainNav;
